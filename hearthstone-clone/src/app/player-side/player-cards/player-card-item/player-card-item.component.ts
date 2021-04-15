import { Component, OnInit, Input } from '@angular/core';

import { Card } from './card.model';

@Component({
  selector: 'app-player-card-item',
  templateUrl: './player-card-item.component.html',
  styleUrls: ['./player-card-item.component.scss']
})
export class PlayerCardItemComponent implements OnInit {
  @Input() cardInfo: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
