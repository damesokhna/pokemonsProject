import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonBorderCardDirective } from './pokemon-border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

const pokemonRoute:Routes=[
  {path:"pokemons",component:ListPokemonComponent},
  {path:"pokemon/:id",component:DetailPokemonComponent}
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonBorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoute)
  ]
})
export class PokemonsModule { }
