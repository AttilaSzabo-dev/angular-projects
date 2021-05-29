import { Directive, ElementRef, HostListener } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';

@Directive({
  selector: '[appGear]'
})
export class GearDirective {

  constructor(private el: ElementRef, private statService: StatsService) { }

  @HostListener("mouseenter") onMouseEnter() {
    const element = this.el.nativeElement.getBoundingClientRect();
    const elementTop = element.top;
    const elementRight = element.right;

    this.statService.onGearHighLight(elementTop, elementRight, "visible", "block");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.statService.onGearHighLight(0, 0, "hidden", "none");
  }

}
