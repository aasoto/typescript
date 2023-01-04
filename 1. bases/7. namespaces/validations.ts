/**
 * Los namespaces se usan similar a las funciones autoinvocadas en este curso, pero en realidad funcionan más como archivos importados, se puede usar cuando se necesita encapsular una parte de nuestro código y a la vez necesitamos usar cierto método encapsulado en cierto momento.
 */
namespace Validations {

  export const validateText = (text: string): boolean => {
    //este es un condicional ternario
    return (text.length > 3) ? true : false;
  }

  export const validateDate = (myDate: Date): boolean => {
    return (isNaN(myDate.valueOf())) ? false : true;
  }
}

console.log(Validations.validateText('Fer'));
