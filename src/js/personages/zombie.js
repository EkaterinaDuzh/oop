import { Character } from '../user';

export class Zombie extends Character {
    constructor(name, type, health, level) {
      super(name, type, health, level);
      this.attack = 40;
      this.defence = 10;
      
    }
}