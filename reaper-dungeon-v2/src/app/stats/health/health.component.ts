import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  healthHover = false;

  onHover(id: string, condition: boolean) {
    this.statsService.onLevelMouse(id, condition);
  }

  levelAmount = this.statsService.levelAmount;

  healthAmount = this.statsService.healthAmount;
  initiativeAmount = this.statsService.initiativeAmount;
  poisonResAmount = this.statsService.poisonResAmount;
  physicalResAmount = this.statsService.physicalResAmount;

  healthPic = this.statsService.healthPic;
  initiativePic = this.statsService.initiativePic;
  poisonResPic = this.statsService.poisonResPic;
  physicalResPic = this.statsService.physicalResPic;

  ngOnInit() {
    this.statsService.detectHover.subscribe(
      (hoverState) => {
        if (hoverState === 1) {
          this.healthHover = true;
        }else this.healthHover = false;
      }
    );
  }

}
