(()=>{

  class Avenger {

    static avgAge: number = 35; //las variables estaticas no pueden asignarse por medio de los parametros del constructor

    constructor (
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    /**
     * biography
     */
    public biography(): string {
      return `${this.name} (${this.team}): ${this.realName || 'sin nombre'}, ${Avenger.avgAge} años. ${this.disclaimer(`${this.name} - ${this.realName}`)}`;
    }

    //solo pueden ser accedidas dentro de la misma función.
    private disclaimer(fullName: string): string  {
      return `${fullName} es un miembro de este equipo pero no respondemos por él.`
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  
  console.log(antman.biography())

})()