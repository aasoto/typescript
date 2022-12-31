(()=> {
  /*----------------- DESESTRUCTURACIÓN DE OBJECTOS -------------------*/

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

  //tambien se puede desestructurar de la siguiente manera
  //donde resto es un arreglo de los valores restantes
  const actores2 = ({nick, ...resto}:Avengers) => {
    console.log(nick, resto)
  }

  actores2(avengers)

  /*----------------- DESESTRUCTURACIÓN DE ARREGLOS -------------------*/
  const arreglo1:string[] = ['Valledupar', 'César', 'Colombia', 'América del Sur'] //arreglo

  //para hacer la desestructuración del arreglo anterior se deben especificar los nombres de las variables deacuerdo a la posición que se encuentren en el arreglo
  //aquí para desestructurar el valor de la segunda posición del arreglo
  const [ , dpto ] = arreglo1
  console.log({dpto})
  //desetructurar todos los elementos
  const [ ciudad , departamento, pais, continente ] = arreglo1
  console.log( ciudad , departamento, pais, continente )

  //para desestructurar una tupla
  const avengersTuple: [string, number, boolean] = ['Cap. América', 500, true]

  const [nombre, power, situacion] = avengersTuple
  console.log({nombre, power, situacion})
})()