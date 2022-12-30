"use strict";
(() => {
    /**
     * Una función con argumentos rest es aquella donde no se sabe cuantos o que número de argumentos se van a pasar
     */
    const fullName = (firstName, ...restArgs) => {
        /**
         * el resto de argumentos se colocan de esta manera debido a que  el tipo string[]
         * es un arreglo y lo concatena por medio de join(' ')
         */
        return `${firstName} ${restArgs.join(' ')}`;
    };
    console.log(fullName('Andrés'));
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés', 'Soto', 'Suárez'));
})();
