(()=> {
  /**
   * La desestructuración de objectos en TypeScript se hace similar a JavaScript, solo que aquí
   * se recomienda la definir el type cuando se declara un objecto
   */

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.12344
  }

  //la desesctructuración como constantes o variables se puede hacer como se hace en javascript
  const { nick, ironman, vision, activo, poder } = avengers;

  //tambien salen las funciones que se le pueden aplicar a cada tipo de dato.
  console.log( nick.toUpperCase(), poder.toFixed(2) )

  //la desestructuración de paramatros en una función se hace así
  //se coloca el tipo en vez del nombre de la variable
  const actores = ({ironman, activo}:Avengers) => {
    console.log(ironman.toLowerCase(), activo)
  }
  
  //por último pasar el parametro a la función
  actores(avengers)
})()