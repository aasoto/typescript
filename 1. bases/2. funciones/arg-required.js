"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Andrés', 'Soto');
    console.log({ name });
    const fullAddress = (address, neighborhod) => {
        return `Direccion: ${address} - ${neighborhod}`;
    };
    const direccion1 = fullAddress('Calle 28 No.14-34', '12 de octubre');
    console.log(direccion1);
    const direccion2 = fullAddress('Calle 28 No.14-34', 12);
    console.log(direccion2);
})();
//# sourceMappingURL=arg-required.js.map