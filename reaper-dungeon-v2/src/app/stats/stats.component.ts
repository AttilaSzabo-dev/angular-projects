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
    attackPic: this.statsService.swordPic,
    gearHandleValue: 0,
    handlePic: this.statsService.attackHandlePic,
    gearBlacksmithValue: false,
    blacksmithPic: this.statsService.blacksmithPic,
    gearPoisonValue: 0,
    poisonPic: this.statsService.poisonPic
  };
  gearDefense = {
    condition: false,
    gearDefenseValue: 0,
    defensePic: this.statsService.shieldPic,
    gearHandleValue: 0,
    handlePic: this.statsService.shieldHandlePic,
    gearBarrierValue: 0,
    barrierPic: this.statsService.barrierPic,
    gearThornValue: 0,
    thornPic: this.statsService.thornPic
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
      if (data.type === "sword") {
        this.gearAttack.condition = true;
        this.gearAttack.gearAttackValue = data.attack;
        this.gearAttack.gearHandleValue = data.handle;
        this.gearAttack.gearBlacksmithValue = data.blacksmith ;
        this.gearAttack.gearPoisonValue = data.poison ;
      }else this.gearAttack.condition = false;
      if (data.type === "shield") {
        this.gearDefense.condition = true;
        this.gearDefense.gearDefenseValue = data.defense;
        this.gearDefense.gearHandleValue = data.handle;
        this.gearDefense.gearBarrierValue = data.barrier;
        this.gearDefense.gearThornValue = data.thorn;
      }else this.gearDefense.condition = false;
    });
  }
}
