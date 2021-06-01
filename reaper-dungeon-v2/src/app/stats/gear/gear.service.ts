import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GearService {
  @Output() showGearStats = new EventEmitter<any>();
  constructor() {}

  weapon = 0;
  shield = 0;
  hand = 0;
  feet = 0;
  torso = 0;
  leg = 0;

  onShowGearStats(id: string) {
    switch (id) {
      case "weapon":
        this.showGearStats.emit(this.gearItemsWeapon[this.weapon]);
        break;
      case "shield":
        this.showGearStats.emit(this.gearItemsShield[this.shield]);
        break;
      case "hand":
        this.showGearStats.emit(this.gearItemsHand[this.hand]);
        break;
      case "feet":
        this.showGearStats.emit(this.gearItemsFeet[this.feet]);
        break;
      case "torso":
        this.showGearStats.emit(this.gearItemsTorso[this.torso]);
        break;
      case "leg":
        this.showGearStats.emit(this.gearItemsLeg[this.leg]);
        break;
    
      default:
        break;
    }
  }

  public gearItemsWeapon = [
    {
      id: 0,
      name: "Weathered Sword",
      type: "sword",
      attack: 10,
      handle: 2,
      blacksmith: 0,
      poison: 0,
      imgUrl: "url('../../assets/images/gear/weapon/Weathered_Sword.png')"
    }
  ]

  public gearItemsShield = [
    {
      id: 0,
      name: "Weathered Shield",
      type: "shield",
      defense: 10,
      handle: 2,
      barrier: 0,
      thorn: 0,
      imgUrl: "url('../../assets/images/gear/shield/Weathered_Shield.png')"
    }
  ]

  public gearItemsHand = [
    {
      id: 0,
      name: "Weathered Gloves",
      type: "hand",
      defense: 5,
      weaponHandle: 2,
      barrier: 0,
      thorn: 0,
      imgUrl: "url('../../assets/images/gear/hand/Weathered_Hand.png')"
    }
  ]

  public gearItemsFeet = [
    {
      id: 0,
      name: "Weathered Boots",
      type: "feet",
      defense: 5,
      barrier: 0,
      thorn: 0,
      imgUrl: "url('../../assets/images/gear/feet/Weathered_Feet.png')"
    }
  ]

  public gearItemsTorso = [
    {
      id: 0,
      name: "Weathered Jacket",
      type: "torso",
      defense: 10,
      barrier: 0,
      thorn: 0,
      imgUrl: "url('../../assets/images/gear/torso/Weathered_Torso.png')"
    }
  ]

  public gearItemsLeg = [
    {
      id: 0,
      name: "Wethered Trousers",
      type: "leg",
      defense: 5,
      barrier: 0,
      thorn: 0,
      imgUrl: "url('../../assets/images/gear/leg/Weathered_Leg.png')"
    }
  ]
}