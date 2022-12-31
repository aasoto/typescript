(()=>{
  /**
   * Las clases abstractas se utilizan como auxiliares de otras clases
   * por ejemplo:
   * se pueden utilizar para extender otras clases, es decir para ser clases padres.
   * Por otro lado estas no pueden ser invocadas directamente sino que se debe acceder a ellas por medio de sus hijos o clases extendidas.
   */
  abstract class Mutante {
    constructor (
      public name: string,
      public realName: string
    ) {}
  }

  /** estas clases sin constructor usan de manera predeterminada el constructor de su clases padre.
   * En caso de recibir más parametros o parametros adicionalesa la clases padres, debe declararse el constructor para la aplicación o utlización de estos parametros.
   */
  class Xmen extends Mutante {
    salvarMundo (): string {
      return 'Mundo salvado';
    }
  }

  class Villian extends Mutante {
    conquistarMundo (): string {
      return 'Mundo conquistado';
    }
  }

  /*--------- FORMA DE INSTANCIAR UNA CLASE ---------*/
  /**Primero a través de una variable, la cual para efectos de integridad de datos se le asigna el tipo de la clase */
  let wolverine: Xmen;
  wolverine = new Xmen('Wolverine', 'Logan');
  /** Luego de tipo constante */
  const magneto = new Villian('Magneto', 'Magnus');

  /**Aquí se llaman las funciones definidas dentro de las clases */
  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  /** Se puede asignar a un parametro de una función la clase que debería contener el objecto que recibe */
  const printName = ( character: Mutante ) => {
    console.log( character.realName );
  }

  printName(wolverine);
})()