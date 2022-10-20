import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private getListePokemon():Pokemon[]{
      return POKEMONS;
  }
  private getPokemonById(pokemonId:number){
      return POKEMONS.find(pokemon => pokemonId==pokemon.id)
  }
  constructor() { }
}
