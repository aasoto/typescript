(()=>{
  //si una función de flecha tiene solo una línea en su contenido, esta puede resumirse toda en un sola línea

  const addNumbers = ( a: number, b: number ) => a + b;
  const greet = ( name: string ) => `Hola ${ name }`;
  const saveTheWorld = () => `El mundo está salavado!`;

  let myFunction; //se declara variable tipo any para asignación de funciones
  let theFunction: (x: number, y: number) => number; //tambien se puede especificar el tipo de funcion y los parametros de la misma, en este caso es para la función de addNumbers()

  //con el primer tipo de variable
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  //con el segundo tipo de variable (especifica)
  theFunction = addNumbers;
  console.log(theFunction(1, 2));

})()