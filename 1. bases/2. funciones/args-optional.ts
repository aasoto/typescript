(()=>{
  //un argumento opcional es aquel que se puede enviar o no.
  //para hacer esto se debe colocar el operador nulo ? junto al nombre del parametro
  const fullName = ( firstName: string, lastName?:string ):string => {
    return `${firstName} ${lastName || 'no lastname'}`;
  }

  console.log(fullName('Andrés', 'Soto'));
  console.log(fullName('Andrés'));
})()