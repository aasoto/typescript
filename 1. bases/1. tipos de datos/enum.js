"use strict";
(() => {
    let EscalaNumerica;
    (function (EscalaNumerica) {
        EscalaNumerica[EscalaNumerica["min"] = 0] = "min";
        EscalaNumerica[EscalaNumerica["medium"] = 1] = "medium";
        EscalaNumerica[EscalaNumerica["maximum"] = 2] = "maximum";
    })(EscalaNumerica || (EscalaNumerica = {}));
    const valor = EscalaNumerica.medium;
    console.log(valor);
    console.log(EscalaNumerica);
    let EscalaCalificaciones;
    (function (EscalaCalificaciones) {
        EscalaCalificaciones[EscalaCalificaciones["deficiente"] = 0] = "deficiente";
        EscalaCalificaciones[EscalaCalificaciones["insuficiente"] = 2] = "insuficiente";
        EscalaCalificaciones[EscalaCalificaciones["aceptable"] = 6] = "aceptable";
        EscalaCalificaciones[EscalaCalificaciones["sobresaliente"] = 8] = "sobresaliente";
        EscalaCalificaciones[EscalaCalificaciones["excelente"] = 9] = "excelente";
    })(EscalaCalificaciones || (EscalaCalificaciones = {}));
    const nota = EscalaCalificaciones.sobresaliente;
    console.log(nota);
    console.log(EscalaCalificaciones);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion.d);
    console.log(enumeracion);
})();
//# sourceMappingURL=enum.js.map