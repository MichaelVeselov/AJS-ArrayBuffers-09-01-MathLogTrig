import Opportunities from './opportunities.js';

export default class Magician extends Opportunities {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
