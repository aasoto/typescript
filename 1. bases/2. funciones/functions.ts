(()=>{

  const hero: string = 'Flash';

  function returnName():string {
    return hero;
  }

  const activateBatiSignal = ():string => {
    return 'Batiseñal activadad';
  }

  console.log(typeof activateBatiSignal());

  const heroName = returnName();

  console.log(heroName);
})()