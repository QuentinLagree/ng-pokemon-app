import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { PokemonTypeColorPipe } from '../../pipes/pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { OutlineCardDirective } from '../../directives/outline-card.directive';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
    selector: 'app-list-pokemon',
    inputs: ["alert"],
    templateUrl: './list-pokemon.component.html',
    standalone: true,
    imports: [SearchPokemonComponent, NgFor, OutlineCardDirective, NgIf, LoaderComponent, RouterLink, DatePipe, PokemonTypeColorPipe]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonServive: PokemonService) {}
  ngOnInit(): void {
    this.pokemonServive.getPokemonList().subscribe(list_flux => this.pokemonList = list_flux)
  }
  

  goPokemon(id: number) {
    this.router.navigate([`/pokemon/${id}`])
  }
}
