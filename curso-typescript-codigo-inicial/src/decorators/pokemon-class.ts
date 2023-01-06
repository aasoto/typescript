/**
 * Los decoratores son metodos que se ejecutan una vez durante la compilación o transpilación de los archivos de TypeScript
 * Estos métodos solamente se ejecutan al inicio y no se vuelven aejecutar aunque se instancia nuevamente la clase que los contiene
 * @returns function
 */
function CheckValidPokemonId() {
  /**
   * Este decorador es para validar el parametro de una función, en el que se establece un rango de valores validos para que esta pueda ejecutarse perfectamente.
   */
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (id:number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe de estar entre 1y 800');
      } else {
        return originalMethod(id);
      }
    }
  }
}

function readonly (isWritable: boolean = true):Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        //para usar el this la funcion que no contiene no debe ser de flecha
        console.log(this);
        return 'Fernando';
      },
      set (this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }
  }
}

export class Pokemon {

  @readonly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ){}
    /** Invocación del decorador */
  @CheckValidPokemonId()
  savePokemonToDB(id: number){
    console.log(`Pokemon guardado en DB ${id}`);
  }
}