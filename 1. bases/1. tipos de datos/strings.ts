(() => {

  const batman: string = 'Batman';
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcán negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toLowerCase());

  console.log( batman[10]?.toUpperCase() || 'No está presente' );

})()