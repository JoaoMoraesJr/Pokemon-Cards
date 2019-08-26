import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import { debug } from 'util';
import { ReturnStatement } from '@angular/compiler';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  constructor(private service: PokemonsService, private alertService: AlertService) { }
 
  cards: any;
  cardsImage: any = [];
  pokemonsCards: any = [];
  types: any = [];
  deck = [];

  ngOnInit() {
    this.getTypes();
    this.getAllPokemons();
  }

  addCards(aux){
    if (this.deck.length >= 60) {
      this.alertService.danger('You have reached the deck limit');
      return;
    }
    var count = 0;
    for (var i = 0; i < this.deck.length; i++) {
      if (aux == this.deck[i]){
        count++;
      }
    }
    if (count >= 4) {
      this.alertService.danger('The limit for this card was reached');
      return;
    }
    this.deck.push(aux);
    this.alertService.success('Card added');
  }

  removeCard(index) {
    this.alertService.info('Card removed');
    this.deck.splice(index, 1);
  }

  getTypes(){
    this.service.getTypes().subscribe(
      res => {
        this.types = res['types'];      
      }
    );
}

  getAllPokemons(){
    this.cardsImage = [];
    this.service.getAllPokemons().subscribe(
      res => {
        for (var i = 0; i < 1000; i++) {
          this.cardsImage.push (res['cards'][String(i)]['imageUrlHiRes']);
        }
        this.cards = res['cards']['0']['imageUrlHiRes'];
      }
    );
  }

  getPokemonByType (aux){
    this.cardsImage = [];
    this.service.getPokemonByTypes(aux).subscribe(
      res=>{
        for (var i = 0; i < 1000; i++) {
          this.cardsImage.push (res['cards'][String(i)]['imageUrlHiRes']);
        }
      }
    );
  }

}
