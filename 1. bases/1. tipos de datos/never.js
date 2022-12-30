"use strict";
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
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
//# sourceMappingURL=never.js.map