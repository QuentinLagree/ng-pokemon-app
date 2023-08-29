import { Component, ElementRef, HostListener, OnInit, ViewChild, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-forms.component.html',
    standalone: true,
    imports: [NgIf, FormsModule, NgClass, NgFor, LoaderComponent, PokemonTypeColorPipe]
})
export class PokemonFormsComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private router: Router) { }

  isAddForm: boolean;
  autocompletion: string[] = []
  navigationIndexAutocompletion: number = -1;
  typesSelected: string[] = [];


  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    this.typesSelected = [...this.pokemon?.types];
  }

  @Input() pokemon: Pokemon;

  @ViewChild("types_list") autocompletionHTML: ElementRef;
  @ViewChild("search_types") searchInputHTML: ElementRef;

  @HostListener('document:click', ['$event'])
  unFocusSelectTypes(event: Event) {
    let targetSearchInput: boolean = this.searchInputHTML.nativeElement != event.target
    let targetListResult: boolean = this.autocompletionHTML?.nativeElement != event.target && this.searchInputHTML.nativeElement.focus == true
    if (targetSearchInput || targetListResult) {
      this.autoCompletionForListType("");
    }
  }

  navigateInAutocompletionList(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        this.autocompletionHTML?.nativeElement.children[this.autocompletion.length > this.navigationIndexAutocompletion+1 ? this.navigationIndexAutocompletion += 1 : 0].focus()
        break;
      case 'ArrowUp':
        if (this.navigationIndexAutocompletion - 1 != -1) {
          this.autocompletionHTML?.nativeElement.children[this.navigationIndexAutocompletion - 1 >= 0 ? this.navigationIndexAutocompletion -= 1 : -1].focus();
          return;
        }  
        this.searchInputHTML?.nativeElement.focus()
        this.navigationIndexAutocompletion = - 1
        break;
      default: break;
    }
  }

  autoCompletionForListType(typeEnter: string) {
    this.autocompletion = []
    if (!this.pokemon) return;
    if (!typeEnter) return;
    
    this.pokemonService.getPokemonsTypeList()
      .filter((type => this.filterListPokemonSearchType(type, typeEnter)))
      .forEach((type) => this.autocompletion.push(type) )
   }

   

  toggleTypeOfPokemon(type: string) {
    (this.typesSelected.includes(type)) ?
      this.typesSelected.splice(this.typesSelected.indexOf(type), 1):
      this.typesSelected.push(type);

    (this.autocompletion.includes(type)) ?
      this.autocompletion.splice(this.autocompletion.indexOf(type), 1):
      this.autocompletion.push(type);
  }


  onSubmit() {
    this.pokemon.types = [...this.typesSelected]
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon: Pokemon) => this.router.navigate(["/pokemon", pokemon.id]))
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => {
          this.router.navigate(["/pokemon", this.pokemon.id])
      })
    }
  }

  onCancel() { this.router.navigate(["/pokemon", this.pokemon.id]) }

  private filterListPokemonSearchType(type: string, term: string): boolean {
    let startWith = type.toLowerCase().includes(term.toLowerCase())
    let hasAlreadyType = this.typesSelected.includes(type)

    return startWith && !hasAlreadyType
   }
}
