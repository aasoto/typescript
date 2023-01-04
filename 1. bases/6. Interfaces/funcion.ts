(()=>{
  /**
   * Se pueden utilizar las interfaces para definir la estructura de una función, 
   * es un caso muy poco común que se utilice de esta manera pero esta es su estructura.
   */
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addNumbers: addTwoNumbers = (x:number, y:number) => {
    return x + y;
  }

  console.log(addNumbers (2, 3));
})()