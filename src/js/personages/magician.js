import { Character } from '../user';

export class Magician extends Character {
    constructor(name, type, health, level) {
      super(name, type, health, level);
      this.attack = 10;
      this.defence = 40;
      
    }
}