import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-ajout-pokemon',
  template: `
   <h2 class="center">Ajout d'un Pokemon</h2>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>>
  `,
  styles: [
  ]
})
export class AjoutPokemonComponent implements OnInit {
   pokemon : Pokemon
  constructor() { 
    this.pokemon = new Pokemon()
  }

  ngOnInit(): void {
  }

}
