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

  onGearHighLight(top: number, right: number, display: string) {
    this.detectGearHover.emit({top: top, right: right, display: display});
  }

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
  healthPic = "background-image: url('../../assets/images/stat/health/heart.png')";
  initiativePic = "background-image: url('../../assets/images/stat/health/health-initiative2.png')";
  poisonResPic = "background-image: url('../../assets/images/stat/health/health-poisonRes2.png')";
  physicalResPic = "background-image: url('../../assets/images/stat/health/health-physicalRes2.png')";
  //attack pics
  swordPic = "background-image: url('../../assets/images/stat/attack/stat-sword.png')";
  attackHandlePic = "background-image: url('../../assets/images/stat/attack/sword-handle2.png')";
  blacksmithPic = "background-image: url('../../assets/images/stat/attack/sword-blacksmith2.png')";
  poisonPic = "background-image: url('../../assets/images/stat/attack/sword-poison2.png')";
  //shield pics
  shieldPic = "background-image: url('../../assets/images/stat/defense/shield.png')";
  shieldHandlePic = "background-image: url('../../assets/images/stat/defense/shield-handle2.png')";
  barrierPic = "background-image: url('../../assets/images/stat/defense/shield-barrier2.png')";
  thornPic = "background-image: url('../../assets/images/stat/defense/shield-thorn2.png')";
  //energy pics
  manaPic = "../../../assets/images/misc/mana.png";
  staminaPic = "../../../assets/images/misc/stamina.png";
  shadowPic = "../../../assets/images/misc/shadowPotion.png";
  coinPic = "../../../assets/images/misc/coin.png";

  constructor() { }
}
