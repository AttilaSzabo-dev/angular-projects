import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
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


  // health pics
  healthPic = "../../../assets/images/stat/health/heart.png";
  initiativePic = "../../../assets/images/stat/health/initiative.png";
  poisonResPic = "../../../assets/images/stat/health/poison.png";
  physicalResPic = "../../../assets/images/stat/health/physical.png";
  //attack pics
  swordPic = "../../../assets/images/stat/attack/stat-sword.png";
  attackHandlePic = "../../../assets/images/stat/attack/sword-handling.png";
  blacksmithPic = "../../../assets/images/stat/attack/blacksmith.png";
  poisonPic = "../../../assets/images/stat/attack/poison.png";
  //shield pics
  shieldPic = "../../../assets/images/stat/defense/shield.png"
  shieldHandlePic = "../../../assets/images/stat/defense/shield-handling.png"
  barrierPic = "../../../assets/images/stat/defense/barrier.png"
  thornPic = "../../../assets/images/stat/defense/thorn.png"

  constructor() { }
}
