import { Component, OnInit } from '@angular/core';
import { CardsService } from './service/cards.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cards';
  cards: Card[] = [];
  card: Card = {
    id: '',
    cardNumber: '',
    cardholderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  };

  constructor(private cardsService: CardsService){}

  ngOnInit(): void{
    this.getAllCards();
  }

  getAllCards(){
    this.cardsService.getAllCards()
    .subscribe(
      response => {
        this.cards = response;
      }
    );
  }

  onSubmit(){
    this.cardsService.addCard(this.card)
    .subscribe(
      response =>{
        console.log(response);
        this.getAllCards();
      }
    )
   
    this.card = {
      id: '',
      cardNumber: '',
      cardholderName: '',
      expiryMonth: '',
      expiryYear: '',
      cvc: ''
    };

    this.getAllCards();
  }

  deleteCard(id: string){
    this.cardsService.deleteCard(id)
    .subscribe(
      response => {
        this.getAllCards();
      }
    )
  }

  populateForm(card: Card){
    this.card = card;
  }

}

