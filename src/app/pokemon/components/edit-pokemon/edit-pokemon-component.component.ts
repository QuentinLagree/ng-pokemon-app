import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonFormsComponent } from '../pokemon-forms/pokemon-forms.component';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-edit-pokemon-component',
    template: `
  <div class="container text-center">
  <h2>Editer {{ pokemon?.name }}</h2>
  <img *ngIf="pokemon" [src]="pokemon.picture" alt="">
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  </div>
  `,
    standalone: true,
    imports: [NgIf, PokemonFormsComponent]
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon | undefined;

  constructor (private pokemonService: PokemonService, private route: ActivatedRoute, private title: Title) {}
  
  ngOnInit() {
    const ID: string | null = this.route.snapshot.paramMap.get("id");
    if (ID) this.pokemonService.getPokemonByID(+ID).subscribe(pokemon => {
        this.pokemon = pokemon
        this.initTitle(pokemon)
    }
    ); 
  }

  initTitle(pokemon: Pokemon | undefined) {
    this.title.setTitle((pokemon) ? `Modifier ${pokemon.name}` : 'Pokemon Introuvable')
  }
  
}
