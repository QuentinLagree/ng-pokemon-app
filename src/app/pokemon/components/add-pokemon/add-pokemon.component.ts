import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonFormsComponent } from '../pokemon-forms/pokemon-forms.component';

@Component({
    selector: 'app-add-pokemon',
    template: `
    <h2 class="text-center">Ajouter un pokemon !</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
    standalone: true,
    imports: [PokemonFormsComponent]
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }


}
