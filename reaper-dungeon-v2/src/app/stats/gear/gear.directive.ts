import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

import { StatsService } from 'src/app/shared/stats.service';
import { GearService } from './gear.service';

@Directive({
  selector: '[appGear]'
})
export class GearDirective implements OnInit {

  constructor(private el: ElementRef,private renderer: Renderer2, private statService: StatsService, private gearService: GearService) { }

  @HostListener("mouseenter") onMouseEnter() {
    const element = this.el.nativeElement.getBoundingClientRect();
    const elementTop = element.top;
    const elementRight = element.right;
    
    const elementId = this.el.nativeElement.id;

    this.statService.onGearHighLight(elementTop, elementRight, "block");
    this.gearService.onShowGearStats(elementId);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.statService.onGearHighLight(0, 0, "none");
  }

  ngOnInit() {
   let id = this.el.nativeElement.id;
   switch (id) {
      case "hand":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsHand[this.gearService.hand].imgUrl)
       break;
      case "feet":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsFeet[this.gearService.feet].imgUrl)
      break;
      case "torso":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsTorso[this.gearService.torso].imgUrl)
      break;
      case "leg":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsLeg[this.gearService.leg].imgUrl)
      break;
      case "weapon":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsWeapon[this.gearService.weapon].imgUrl)
      break;
      case "shield":
        this.renderer.setStyle(this.el.nativeElement, "background-image", this.gearService.gearItemsShield[this.gearService.shield].imgUrl)
      break;
   
     default:
       break;
   }
  }
}
