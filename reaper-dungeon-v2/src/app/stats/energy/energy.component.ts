import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  manaAmount = this.statsService.manaAmount;
  staminaAmount = this.statsService.staminaAmount;
  shadowAmount = this.statsService.shadowAmount;
  coinAmount = this.statsService.coinAmount;

  manaPic = this.statsService.manaPic;
  staminaPic = this.statsService.staminaPic;
  shadowPic = this.statsService.shadowPic;
  coinPic = this.statsService.coinPic;

  ngOnInit() {
  }

}
