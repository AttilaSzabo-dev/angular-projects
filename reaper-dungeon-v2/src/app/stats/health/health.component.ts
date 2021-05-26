import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  healthAmount = 100;
  initiativeAmount = 25;

  healthPic = "../../../assets/images/stat/health/heart.png"
  initiativePic = "../../../assets/images/stat/health/initiative.png"

  constructor() { }

  ngOnInit(): void {
  }

}
