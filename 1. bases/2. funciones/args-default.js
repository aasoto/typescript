"use strict";
(() => {
    //En este tipo de argumento se inicializa el argumento en la función
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastname'}`;
        }
    };
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés'));
    console.log(fullName('Andrés', 'Soto', true));
})();
