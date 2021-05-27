import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  hand = this.statsService.hand;
  foot = this.statsService.foot;
  torso = this.statsService.torso;
  leg = this.statsService.leg;
  weapon = this.statsService.weapon;
  shield = this.statsService.shield;

  ngOnInit(): void {
  }

}
