import axios from "axios"
import { Pokemon } from '../interfaces/pokemon';
/**
 * Esta función pide el id del un pokemón y através de un petición realizada con axios se obtiene los datos.
 * Estos datos son validados por medio de una interfaz que se obtuvo en una página web llamada quicktype.io.
 * La función retorna una promesa tipo Pokemon debido a que es un función generica.
 * @param pokemonId 
 * @returns Promise
 */
export const getPokemon = async(pokemonId: number): Promise<Pokemon> => {

  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  
  return data;
}