"use strict";
(() => {
    /**
     * La función never es una función que deberetornar con un error.
     * Si esta función se ejecuta el resto del código de va a seguir ejecutandose.
     */
    const error = (msg) => {
        throw new Error(msg);
    };
    // error('Miss El Tocuyo');
    // console.log('Clasificada');
    /**
     * Tambien se puede definir una función que en parte pueda dar este resultado
     */
    const aprobado = (respuesta) => {
        if (respuesta) {
            return 'Aprobado';
        }
        else {
            throw new Error("Reprobado");
        }
    };
    console.log(aprobado(false));
})();
