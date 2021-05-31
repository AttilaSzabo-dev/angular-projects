import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { StatsService } from '../shared/stats.service';
import { GearService } from './gear/gear.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild("popUp") popUp: ElementRef;
  @ViewChild("popUpImage") popUpImage: ElementRef;

  constructor(private statsService: StatsService, private gearService: GearService, private renderer: Renderer2) { }

  gearName = "";
  gearAttack = {
    condition: false,
    gearAttackValue: 0,
    pic: this.statsService.swordPic
  };
  gearAttackHandle = {
    condition: false,
    gearHandleValue: 0,
    pic: this.statsService.attackHandlePic
  };

  ngOnInit() {
    this.statsService.detectGearHover.subscribe((data) => {
      this.popUp.nativeElement.style.top = data.top + "px";
      this.popUp.nativeElement.style.left = data.right + "px";
      this.popUp.nativeElement.style.display = data.display;
    });
    
    this.gearService.showGearStats.subscribe(data => {
      this.renderer.setStyle(this.popUpImage.nativeElement, "background-image", data.imgUrl);
      this.gearName = data.name;
      if (data.hasOwnProperty("attack")) {
        this.gearAttack.condition = true;
        this.gearAttack.gearAttackValue = data.attack;
      }else this.gearAttack.condition = false;
      if (data.hasOwnProperty("handle")) {
        this.gearAttackHandle.condition = true;
        this.gearAttackHandle.gearHandleValue = data.handle;
      }else this.gearAttackHandle.condition = false;
    });
  }
}
