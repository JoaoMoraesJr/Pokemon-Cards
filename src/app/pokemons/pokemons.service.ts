import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  apiEndPoint = 'https://api.pokemontcg.io/v1/cards';
  specificPokemon = 'https://pokemontcg.io/cards?name=';
  pokemonTypes = 'https://api.pokemontcg.io/v1/types';
  pokemonByType = 'https://api.pokemontcg.io/v1/cards?types=';

  constructor(private http: HttpClient) { }

  getPokemon(aux){
    return this.http.get(`${this.specificPokemon}${aux}`);
  }

  getAllPokemons(){
    return this.http.get(this.apiEndPoint);
  }

  getTypes() {
    return this.http.get(this.pokemonTypes);
  }

  getPokemonByTypes(aux){
    return this.http.get(`${this.pokemonByType}${aux}`);
  }

}
