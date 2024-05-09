import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Card} from '../models/card.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl = 'https://localhost:7227/api/cards';

  constructor(private http: HttpClient) { }

  //Get All Cards
  getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card: Card): Observable<Card>{
    card.id = '00000000-0000-0000-0000-000000000000';
    this.getAllCards();
    return this.http.post<Card>(this.baseUrl, card);
  }

  deleteCard(id: string): Observable<Card>{
    return this.http.delete<Card>(this.baseUrl + '/' + id);
  }
}
