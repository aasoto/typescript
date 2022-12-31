(()=>{

  class Avenger {
    constructor (
      public name: string,
      public realName: string
    ) {
      console.log('Constructor inicializado.');
    }

    //los métodos tipo protected solo pueden ser accedidos dentro de lamisma clase o dentro de las clases que extiendan de esta (herencia)
    protected getFullName(): string {
      return `${this.name} ${this.realName}`
    }

  }

  class Xmen extends Avenger {
    constructor (
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    //el get se utiliza para obtener valores
    get fullName() {
      return `${ this.name } - ${ this.realName }`;
    }

    //el set se utiliza para asignar valores
    set fullName( name: string ) {
      this.name = name;
    }

    getFullNameDesdeXmen ():void {
      console.log(this.getFullName());
    }
  }

  const wolverine = new Xmen ('Wolverine', 'Logan', true);
  wolverine.fullName = 'Andrés'; //asignación por medio del set
  console.log(wolverine.fullName); //obtención por medio del get
})()