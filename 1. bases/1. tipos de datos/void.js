"use strict";
(() => {
    /**
     * El void es utilizado cuando una función no regresa nada
     */
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    console.log(callBatman(), callSuperman());
})();
