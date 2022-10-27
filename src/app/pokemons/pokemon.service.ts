import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from 'express';
import { getLocaleMonthNames } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http:HttpClient){

  }
    log(response :any){
      console.table(response)
  } 
  handleError(err:Error,errorValue:any){
      console.error()
      return of(errorValue);
  } 

   getListePokemon():Observable<Pokemon[]>{
      return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response) => this.log(response)),
        catchError((err) => this.handleError(err,[]))
        );
  }

  
  getPokemonById(pokemonId:number):Observable<Pokemon>{
      return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response) => this.log(response)),
        catchError((err) => this.handleError(err,undefined))
        );
  }
  getPokemonTypeList(){
    return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
    ]
  }
  httpOptions = {
    headers : new HttpHeaders({'content-Type':'application/json'},
    )
  } 
  updatePokemon(pokemon : Pokemon):Observable<Pokemon>{
    
    return this.http.put<Pokemon>('api/pokemons',pokemon,this.httpOptions).pipe(
        tap((response) => this.log(response)),
        catchError((err) => this.handleError(err,undefined),
        ))
  }
  deletePokemon(pokemon:Pokemon):Observable<Pokemon>{
    return this.http.delete<Pokemon>(`api/pokemons/${pokemon.id}`).pipe(
      tap((response) => this.log(response)),
      catchError((err) => this.handleError(err,undefined))
    )
  }
  addPokemon(pokemon :Pokemon):Observable<Pokemon>{
      return this.http.post<Pokemon>('api/pokemons',pokemon,this.httpOptions).pipe(
         tap((response) => this.log(response)),
         catchError((err) => (this.handleError(err,undefined)))
      )
      }
    }
