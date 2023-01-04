(() => {
  /**
   * Las interfaces funciones de manera similar a los tipos(types) con la diferencia de las interfaces son extendibles.
   * Además de una ligera variación en su estructura.
   */
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['Súmer velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clark Kent',
    powers: ['Súper velocidad'],
    getName() {
      return this.name;
    }
  }
  console.log(flash.name);
  flash.powers.forEach(element => {
    console.log(element);
  });
  console.log(flash, superman);
})()