import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  hand = "background-image: url(" + this.statsService.hand + ")";
  feet = "background-image: url(" + this.statsService.feet + ")";
  torso = "background-image: url(" + this.statsService.torso + ")";
  leg = "background-image: url(" + this.statsService.leg + ")";
  weapon = "background-image: url(" + this.statsService.weapon + ")";
  shield = "background-image: url(" + this.statsService.shield + ")";

  ngOnInit() {
  }

}
