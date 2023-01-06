/**
 * En esta clase se manda a llamar a un API de pokemon por medio de una petición realizada através de axios.
 * En la función getPokemon() se encuentra la llamada a a la API.
 */
import { getPokemon } from "../generics/get-pokemon";

getPokemon(4)
  .then(resp => {
    console.log(resp.sprites.front_default);
  }).catch(error => {
    console.log(error);
  }).finally(() => {
    console.log('Fin de getPokemon');
  });