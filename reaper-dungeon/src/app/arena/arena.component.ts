import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {
  enemyName = "Helltooth";
  minAttackName = "Minimum Attack";
  minAttackValue = 10;
  maxAttackName = "Maximum Attack";
  maxAttackValue = 15;
  actualAttackName = "Actual Attack";
  actualAttackValue = 13;
  enemyHealth = "Monster Health";
  enemyHealthValue = 100;
  enemyInitiative = "Initiative";
  enemyInitiativeValue = 25;
  enemyModifier = "Modifier";
  enemyModifierType = "&";
  attackType = "Meele";

  enemyPicPath = "../../assets/images/monsters/helltooth.png";

  constructor() { }

  ngOnInit(): void {
  }

}
