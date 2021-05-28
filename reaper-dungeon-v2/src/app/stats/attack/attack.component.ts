import { Component, OnInit } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  attackHover = false;

  onHover(id: string, condition: boolean) {
    this.statsService.onLevelMouse(id, condition);
  }

  levelAmount = this.statsService.levelAmount;

  attackAmount = this.statsService.attackAmount;
  handleAmount = this.statsService.handleAmount;
  blacksmithAmount = this.statsService.blacksmithAmount;
  poisonAmount = this.statsService.poisonAmount;

  swordPic = this.statsService.swordPic;
  attackHandlePic = this.statsService.attackHandlePic;
  blacksmithPic = this.statsService.blacksmithPic;
  poisonPic = this.statsService.poisonPic;

  ngOnInit() {
    this.statsService.detectHover.subscribe(
      (hoverState) => {
        if (hoverState === 2) {
          this.attackHover = true;
        }else this.attackHover = false;
      }
    );
  }

}
