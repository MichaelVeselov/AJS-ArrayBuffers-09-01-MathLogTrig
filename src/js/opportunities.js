import Character from './character.js';

export default class Opportunities extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.fuddleLevel = false;
  }

  get stoned() {
    return this.fuddleLevel;
  }

  set stoned(value) {
    this.fuddleLevel = value;
  }

  get attack() {
    let attack = this.attackStrength * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    if (attack > 0) {
      return Math.round(attack);
    }
    return 0;
  }

  set attack(value) {
    this.attackStrength = value;
  }
}
