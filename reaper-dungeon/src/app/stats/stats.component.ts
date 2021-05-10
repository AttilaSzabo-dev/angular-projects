import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  goldAmount = 1000;
  healthAmount = 100;
  attackAmount = 1;
  defenseAmount = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
