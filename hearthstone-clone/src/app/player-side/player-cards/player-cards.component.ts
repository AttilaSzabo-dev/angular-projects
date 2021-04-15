import { Component, OnInit } from '@angular/core';

import { Card } from "./player-card-item/card.model";

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.scss']
})
export class PlayerCardsComponent implements OnInit {
  cards: Card[] = [
    new Card(2, 3, 4, "assets/img/creature.png", "Bullfrog", "Battlecry", "btc"),
    new Card(3, 4, 5, "assets/img/creature.png", "Titan", "Outcast", "ouc"),
    new Card(5, 6, 7, "assets/img/creature.png", "Galibáusz", "Chidi", "ouc")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
