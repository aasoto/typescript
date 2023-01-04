import powers from '../data/powers';
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get powers () {
    return powers.find( power => power.id === this.powerId )?.desc || 'not found';
  }
}