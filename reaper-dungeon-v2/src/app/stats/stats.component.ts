import { Component, OnInit } from '@angular/core';

import { StatsService } from '../shared/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  goldAmount = 1000;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
  }

}
