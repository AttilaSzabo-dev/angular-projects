import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { StatsService } from '../shared/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @ViewChild("popUp") el: ElementRef;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.detectGearHover.subscribe((data) => {
      this.el.nativeElement.style.top = data.top + "px";
      this.el.nativeElement.style.left = data.right + "px";
      this.el.nativeElement.style.display = data.display;
    });
  }
}
