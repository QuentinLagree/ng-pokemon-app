import { Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { PokemonService } from "./services/pokemon.service";

export default [
  {
    path: '',
    providers: [PokemonService],
    children: [
      {
        path: "edit/pokemon/:id",
        loadComponent: () => import('./components/edit-pokemon/edit-pokemon-component.component').then(module => module.EditPokemonComponent),
        canActivate: [AuthGuard]  
      },
      {
        path: "pokemon/add",
        title: 'Ajouter un pokemons | Pokedex',
        loadComponent: () => import('./components/add-pokemon/add-pokemon.component').then(module => module.AddPokemonComponent),
        canActivate: [AuthGuard]  
      },
      {
        path: "pokemons",
        title: 'Liste des pokémons | Pokedex',
        loadComponent: () => import('./components/list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent),
      },
      {
        path: "pokemon/:id",
        loadComponent: () => import('./components/detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent),
      }
    ]
  }
] as Routes