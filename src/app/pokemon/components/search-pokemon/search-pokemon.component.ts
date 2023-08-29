import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { NgIf, NgClass, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styles: [],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, AsyncPipe]
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>;
  pokemons$: Observable<Pokemon[]>;
  

  constructor (
    private router: Router,
    private pokemonService: PokemonService
    ) {}
  
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  searchPokemon(term: string) {
    this.searchTerms.next(term);
  }

  goToDetailPokemon (pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link);
  }

}
