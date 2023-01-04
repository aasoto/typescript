// import { Hero } from "./classes/Hero"; //exportación normal
import * as HeroClasses from "./classes/Hero"; //importando todo como un alias
// import powers, { Power } from "./data/powers";

const ironman = new HeroClasses.Hero('Ironman', 1, 55);

console.log(ironman);

console.log(ironman.powers);