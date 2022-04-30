import Opportunities from './opportunities.js';

export default class Daemon extends Opportunities {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
