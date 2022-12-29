"use strict";
(() => {
    /**
     * El enum sirve para tener escalas con valores predeterminados, igual estospueden ser modificados
     */
    //enum por defecto
    let EscalaNumerica;
    (function (EscalaNumerica) {
        EscalaNumerica[EscalaNumerica["min"] = 0] = "min";
        EscalaNumerica[EscalaNumerica["medium"] = 1] = "medium";
        EscalaNumerica[EscalaNumerica["maximum"] = 2] = "maximum";
    })(EscalaNumerica || (EscalaNumerica = {}));
    const valor = EscalaNumerica.medium;
    console.log(valor);
    console.log(EscalaNumerica);
    //enum modificado
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
})();
