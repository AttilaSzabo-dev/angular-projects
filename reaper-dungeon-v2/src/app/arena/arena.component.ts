import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  @ViewChild('carousel', {static: true}) firstChild: ElementRef;

  enemyName = "Helltooth";
  minAttackName = "Minimum Attack:";
  minAttackValue = 10;
  maxAttackName = "Maximum Attack:";
  maxAttackValue = 15;
  actualAttackName = "Actual Attack:";
  actualAttackValue = 13;
  enemyHealth = "Monster Health:";
  enemyHealthValue = 100;
  enemyInitiative = "Initiative:";
  enemyInitiativeValue = 25;
  enemyModifier = "Modifier:";
  enemyModifierType = "&";
  attackType = "Meele";
  retreat = "Retreat!";
  options = "Options";

  enemyPicPath = "../../assets/images/monsters/helltooth.png";
  carouselTest1 = "../../assets/images/misc/fireball.png"
  carouselTest2 = "../../assets/images/misc/heal.png"

  constructor() { }

  ngOnInit() {
    this.firstChild.nativeElement.carousel({
      interval: 2000
    });
    
  }

}
