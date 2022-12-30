(()=>{

  type Hero = {
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

  console.log(flash, superman)
})()