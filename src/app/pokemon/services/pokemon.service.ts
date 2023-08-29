import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMONS } from '../models/mock-pokemon-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  HTTP_OPTIONS = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor (private http: HttpClient) {}
  
  
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((list_pokemon) =>  this.log(list_pokemon)),
      catchError((error) => this.handleError(error, [])))
  }

  getPokemonByID(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined)))
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    
    return this.http.put('api/pokemons', pokemon, this.HTTP_OPTIONS).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePokemonById(ID: number): Observable<null> {
    return this.http.delete(`api/pokemons/${ID}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>('api/pokemons', pokemon, this.HTTP_OPTIONS).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    if (term.length <= 1) return of([])
    return this.http.get<Pokemon>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, defaultValue: any) {
    console.error(error)
    return of(defaultValue)
  }

  getPokemonsTypeList(): string[] {
    let types: string[] = [];
    POKEMONS.map((pokemon) => {
        for (let type of pokemon.types) {
          if (!types.includes(type)) types.push(type);
        }
      })
    return types;
  }
}
