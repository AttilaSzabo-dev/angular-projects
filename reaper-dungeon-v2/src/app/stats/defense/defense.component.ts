import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  levelAmount = this.statsService.levelAmount;

  defenseAmount = this.statsService.defenseAmount;
  defenseHandleAmount = this.statsService.defenseHandleAmount;
  barrierAmount = this.statsService.barrierAmount;
  thornAmount = this.statsService.thornAmount;

  shieldPic = this.statsService.shieldPic;
  shieldHandlePic = this.statsService.shieldHandlePic;
  barrierPic = this.statsService.barrierPic;
  thornPic = this.statsService.thornPic;

  ngOnInit(): void {
  }

}
