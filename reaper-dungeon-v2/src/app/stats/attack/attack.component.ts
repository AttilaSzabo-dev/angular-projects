import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {
  healthAmount = 100;
  initiativeAmount = 25;
  
  swordPic = "../../../assets/images/stat/attack/stat-sword.png"
  handlePic = "../../../assets/images/stat/attack/sword-handling.png"
  blacksmithPic = "../../../assets/images/stat/attack/blacksmith.png"
  poisonPic = "../../../assets/images/stat/attack/poison.png"

  constructor() { }

  ngOnInit() {
  }

}
