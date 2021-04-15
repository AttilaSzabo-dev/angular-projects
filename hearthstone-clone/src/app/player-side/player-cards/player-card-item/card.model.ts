export class Card {
    public mana: number;
    public attack: number;
    public health: number;
    public imagePath: string;
    public name: string;
    public description: string;
    public type: string;

    constructor(mana: number, attack: number, health: number, imagePath: string, name: string, desc: string, type: string) {
        this.mana = mana;
        this.attack = attack;
        this.health = health;
        this.imagePath = imagePath;
        this.name = name;
        this.description = desc;
        this.type = type;
    }
}