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

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Magnus');

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

})()