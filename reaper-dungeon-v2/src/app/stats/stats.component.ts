import { Component, OnInit } from '@angular/core';

import { StatsService } from '../shared/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  goldAmount = 1000;
  
  attackAmount = 1;
  defenseAmount = 1;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
  }

}
