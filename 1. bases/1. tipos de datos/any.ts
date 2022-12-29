(()=>{
  /**
   * La recomendación es nunca utilizar el tipo de dato any
   * Pero si se utiliza es recomendable castear el tipo de datos cuando se vaya a hacer cualquier tipo de operación
   */
  let avenger: any = 123;

  avenger = 'Dr Strange';

  //casteo de variable tipo any a string para que tyscript la trate como un string
  //esta función permite acceder a la funciones recomendadas por el editor de texto
  //esta función no tiene equivalente en JavaScript
  console.log( (avenger as string).charAt(0) )

  //el tipo de dato any permite que se cambie el tipo de dato en una variable así como se hace en JavaScript sin importar que esta en el pasado halla sino un string
  avenger = 150.29394932;
  //casteo de una variable tipo number
  console.log( (<number>avenger).toFixed(2) );
})()