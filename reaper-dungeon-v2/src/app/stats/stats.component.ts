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
    gearBlacksmithValue: 0,
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
  gearHand = {
    condition: false,
    gearDefenseValue: 0,
    defensePic: this.statsService.shieldPic,
    gearHandleValue: 0,
    handlePic: this.statsService.attackHandlePic,
    gearBarrierValue: 0,
    barrierPic: this.statsService.barrierPic,
    gearThornValue: 0,
    thornPic: this.statsService.thornPic
  };
  gearFeet = {
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
  gearTorso = {
    condition: false,
    gearDefenseValue: 0,
    defensePic: this.statsService.shieldPic,
    gearHandleValue: 0,
    handlePic: this.statsService.attackHandlePic,
    gearBarrierValue: 0,
    barrierPic: this.statsService.barrierPic,
    gearThornValue: 0,
    thornPic: this.statsService.thornPic
  }
  gearLeg = {
    condition: false,
    gearDefenseValue: 0,
    defensePic: this.statsService.shieldPic,
    gearHandleValue: 0,
    handlePic: this.statsService.shieldHandlePic,
    gearBarrierValue: 0,
    barrierPic: this.statsService.barrierPic,
    gearThornValue: 0,
    thornPic: this.statsService.thornPic
  }

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
      if (data.type === "hand") {
        this.gearHand.condition = true;
        this.gearHand.gearDefenseValue = data.defense;
        this.gearHand.gearHandleValue = data.weaponHandle;
        this.gearHand.gearBarrierValue = data.barrier;
        this.gearHand.gearThornValue = data.thorn;
      }else this.gearHand.condition = false;
      if (data.type === "feet") {
        this.gearFeet.condition = true;
        this.gearFeet.gearDefenseValue = data.defense;
        this.gearFeet.gearHandleValue = data.shieldHandle;
        this.gearFeet.gearBarrierValue = data.barrier;
        this.gearFeet.gearThornValue = data.thorn;
      }else this.gearFeet.condition = false;
      if (data.type === "torso") {
        this.gearTorso.condition = true;
        this.gearTorso.gearDefenseValue = data.defense;
        this.gearTorso.gearHandleValue = data.weaponHandle;
        this.gearTorso.gearBarrierValue = data.barrier;
        this.gearTorso.gearThornValue = data.thorn;
      }else this.gearTorso.condition = false;
      if (data.type === "leg") {
        this.gearLeg.condition = true;
        this.gearLeg.gearDefenseValue = data.defense;
        this.gearLeg.gearHandleValue = data.shieldHandle;
        this.gearLeg.gearBarrierValue = data.barrier;
        this.gearLeg.gearThornValue = data.thorn;
      }else this.gearLeg.condition = false;
    });
  }
}
