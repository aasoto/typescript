"use strict";
(() => {
    /**
     * Los valores de tipo null o undefined no son permitidos en los booleanos de typescript.
     * Si se desea que un boleano reciba tipo undefined debe definirse la variable como tal
     */
    let isActive = undefined;
    let isNull = null;
    console.log(isNull);
})();
