import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {
  healthAmount = 100;
  initiativeAmount = 25;
  
  shieldPic = "../../../assets/images/stat/defense/shield.png"
  handlePic = "../../../assets/images/stat/defense/shield-handling.png"

  constructor() { }

  ngOnInit(): void {
  }

}
