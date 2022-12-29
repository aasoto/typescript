(()=>{
  /**
   * Los valores de tipo null o undefined no son permitidos en los booleanos de typescript.
   * Si se desea que un boleano reciba tipo undefined debe definirse la variable como tal
   */

  let isActive: (boolean|undefined) = undefined;

  let isNull: (boolean|null) = null;

  console.log(isNull)
})()