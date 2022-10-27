import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonBorderCardDirective } from './pokemon-border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { AjoutPokemonComponent } from './ajout-pokemon/ajout-pokemon.component';

const pokemonRoute:Routes=[
  {path:"pokemons/ajout/pokemon",component:AjoutPokemonComponent},
  {path:"edit/pokemon/:id",component:EditPokemonComponent},
  {path:"pokemons",component:ListPokemonComponent},
  {path:"pokemon/:id",component:DetailPokemonComponent}
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonBorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AjoutPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoute)
  ]
})
export class PokemonsModule { }
