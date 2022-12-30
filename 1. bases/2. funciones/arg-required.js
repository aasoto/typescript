"use strict";
(() => {
    //los parametros de las funciones de typescript deben venir con el tipo de dato especificado y además tambien se debe especificar el tipo de dato que se va retornar
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Andrés', 'Soto');
    console.log({ name });
    //en caso que se reciba un parametro que puede ser de algún otro tipo o que no se sepa exactamente hacer lo siguiente
    const fullAddress = (address, neighborhod) => {
        return `Direccion: ${address} - ${neighborhod}`;
    };
    const direccion1 = fullAddress('Calle 28 No.14-34', '12 de octubre');
    console.log(direccion1);
    const direccion2 = fullAddress('Calle 28 No.14-34', 12);
    console.log(direccion2);
})();
