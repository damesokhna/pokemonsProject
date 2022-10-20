import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList : Pokemon []=POKEMONS;
  constructor(private router : Router) { }
  ngOnInit(): void {
  }
  goToPokemon(pokemon :Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}