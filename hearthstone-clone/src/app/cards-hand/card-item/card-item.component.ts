import { Component, OnInit, Input } from '@angular/core';

import { Card } from "../card-item/card.model";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() cardInfo: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
