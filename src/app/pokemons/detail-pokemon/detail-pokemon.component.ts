import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { POKEMONS } from '../mock-pokemon';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({    
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
 pokemon :Pokemon | undefined;
  constructor(private route:ActivatedRoute,private router:Router,private pokemonService:PokemonService) { }

  ngOnInit(): void {
    const pokemonId :string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
       this.pokemonService.getPokemonById(+pokemonId).subscribe((pokemon) => this.pokemon=pokemon);
    }
  }
  goToListPokemon(){
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['edit/pokemon',pokemon.id])
    console.log("EDITER")
  }
  deletePokemon(pokemon : Pokemon){
    this.pokemonService.deletePokemon(pokemon).subscribe(() =>{
      this.router.navigate(['/pokemons'])
    } )
  }
}
