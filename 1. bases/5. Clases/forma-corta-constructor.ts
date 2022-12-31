(()=>{

  class Avenger {

    static avgAge: number = 35; //las variables estaticas no pueden asignarse por medio de los parametros del constructor

    constructor (
      private name: string,
      private team: string,
      public realName?: string
    ) {}

  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log(antman);

  console.log(Avenger.avgAge); //de esta manera se accede a las propiedades privadas y estaticas desde afuera de la clase.

})()