// import { Hero } from "./classes/Hero"; //exportación normal
// import * as HeroClasses from "./classes/Hero"; //importando todo como un alias
// import powers, { Power } from "./data/powers";

import { genericFunction, genericFunctionArrow } from "../generics/generics";

// const ironman = new HeroClasses.Hero('Ironman', 1, 55);

// console.log(ironman);

// console.log(ironman.powers);

/**
 * Las funciones genericas sirven la hacer respeta el tipo de dato que se ingresa a una función cuando el tipo de dato del parametro es any, además permite acceder a las opciones o metodos predefinidos del lenguaje de programación por medio del intellsence de editor de código.
 */
const name: string = 'Andrés';

console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());

import { Hero } from "../interfaces";


const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Hero>(deadpool).realName );