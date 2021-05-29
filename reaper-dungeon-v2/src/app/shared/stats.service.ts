import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  @Output() detectStatHover = new EventEmitter<number>();
  @Output() detectGearHover = new EventEmitter<any>();

  onLevelHighlight(zone: string, condition: boolean) {
    switch (zone) {
      case "health":
        if (condition) {
          this.detectStatHover.emit(1);
        } else {
          this.detectStatHover.emit(0);
        } 
        break;
      case "attack":
        if (condition) {
          this.detectStatHover.emit(2);
        } else {
          this.detectStatHover.emit(0);
        } 
        break;
      case "defense":
        if (condition) {
          this.detectStatHover.emit(3);
        } else {
          this.detectStatHover.emit(0);
        } 
        break;
      default:
        break;
    }
  }

  onGearHighLight(top: number, right: number, visibility: string, display: string) {
    this.detectGearHover.emit({top: top, right: right, visibility: visibility, display: display});
  }

  elementTop = 0;
  elementRight = 0;

  levelAmount = 0;
  //health values
  healthAmount = 100;
  initiativeAmount = 10;
  poisonResAmount = 0;
  physicalResAmount = 0;
  //attack values
  attackAmount = 100;
  handleAmount = 0;
  blacksmithAmount = 0;
  poisonAmount = 0;
  //defense values
  defenseAmount = 100;
  defenseHandleAmount = 0;
  barrierAmount = 0;
  thornAmount = 0;
  //energy values
  manaAmount = 0;
  staminaAmount = 0;
  shadowAmount = 0;
  coinAmount = 0;


  // health pics
  healthPic = "../../../assets/images/stat/health/heart.png";
  initiativePic = "../../../assets/images/stat/health/health-initiative2.png";
  poisonResPic = "../../../assets/images/stat/health/health-poisonRes2.png";
  physicalResPic = "../../../assets/images/stat/health/health-physicalRes2.png";
  //attack pics
  swordPic = "../../../assets/images/stat/attack/stat-sword.png";
  attackHandlePic = "../../../assets/images/stat/attack/sword-handle2.png";
  blacksmithPic = "../../../assets/images/stat/attack/sword-blacksmith2.png";
  poisonPic = "../../../assets/images/stat/attack/sword-poison2.png";
  //shield pics
  shieldPic = "../../../assets/images/stat/defense/shield.png";
  shieldHandlePic = "../../../assets/images/stat/defense/shield-handle2.png";
  barrierPic = "../../../assets/images/stat/defense/shield-barrier2.png";
  thornPic = "../../../assets/images/stat/defense/shield-thorn2.png";
  //energy pics
  manaPic = "../../../assets/images/misc/mana.png";
  staminaPic = "../../../assets/images/misc/stamina.png";
  shadowPic = "../../../assets/images/misc/shadowPotion.png";
  coinPic = "../../../assets/images/misc/coin.png";
  //gear pics
  hand = "../../../assets/images/gear/hand/Weathered_Hand.png";
  feet = "../../../assets/images/gear/feet/Weathered_Feet.png";
  torso = "../../../assets/images/gear/torso/Weathered_Torso.png";
  leg = "../../../assets/images/gear/leg/Weathered_Leg.png";
  weapon = "../../../assets/images/gear/weapon/Weathered_Sword.png";
  shield = "../../../assets/images/gear/shield/Weathered_Shield.png";

  constructor() { }
}
