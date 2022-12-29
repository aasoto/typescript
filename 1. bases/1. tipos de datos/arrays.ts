(()=>{
  //cuando es un array que va a contener diferentes tipos de datos estos se deben colocar
  const array: (string | number | boolean)[] = [1, 2, 3, 4, '5', 6, 7, true];
  //cuando es de un tipo especifico
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  //si todos los elementos son del mismo tipo de dato typescript lo intuye
  const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

  villians.forEach( villian => {
    console.log(villian.toUpperCase());
  });

  //para crear un variable tipo array esta se debe inicializar como tal y si no se sabe que tipo de datos va a obtener declarar como tipo any
  let randomElements: any[] = [];

  randomElements.push(true);
  randomElements.push(1);
  randomElements.push('Andrés');

  randomElements.forEach(element => {
    console.log(element);
  });
})()