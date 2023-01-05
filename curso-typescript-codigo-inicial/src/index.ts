import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then(resp => {
    console.log(resp.sprites.front_default);
  }).catch(error => {
    console.log(error);
  }).finally(() => {
    console.log('Fin de getPokemon');
  });