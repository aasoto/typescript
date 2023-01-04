(() => {
  /**
   * Las interfaces a diferencia de los tipos(types) puede ser extendible, en caso de utlizarlas con las clase se pueden interpretar como un manera de definirla estructura de estas al definir estructuras y métodos que esta debe contener.
   */
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    mutantPower(id: number) {
      return `${this.name} ${this.realName}`;
    }
  }
})()