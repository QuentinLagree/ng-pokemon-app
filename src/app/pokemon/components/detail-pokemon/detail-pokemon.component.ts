import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from 'src/app/services/auth.service';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { GoBackDirective } from '../../directives/go-back.directive';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgFor, GoBackDirective, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor (
    private title: Title,
    private route: ActivatedRoute, 
    private router: Router, 
    private pokemonService: PokemonService,
    public auth: AuthService
    ) {}

  ngOnInit() {
    const ID: string | null = this.route.snapshot.paramMap.get("id")
    if (ID == null) return;
    this.pokemonService.getPokemonByID(+ID).subscribe(
      pokemon => {
        this.pokemon = pokemon
        this.initTitle(pokemon);
      }
    );
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goBack())
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
     this.router.navigate(['edit/pokemon', pokemon.id])
  }

  initTitle(pokemon: Pokemon | undefined) {
    this.title.setTitle((pokemon) ? `${pokemon.name} | Pokedex` : 'Pokemon Introuvable  | Pokedex')
  }
  

}
