(()=>{
  /**
   * El void es utilizado cuando una función no regresa nada
   */
  function callBatman ():void {
    return;
  }

  const callSuperman = ():void => {
    return;
  }

  console.log(callBatman(), callSuperman());
})()