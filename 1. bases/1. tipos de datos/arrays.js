"use strict";
(() => {
    const array = [1, 2, 3, 4, '5', 6, 7, true];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => {
        console.log(villian.toUpperCase());
    });
    let randomElements = [];
    randomElements.push(true);
    randomElements.push(1);
    randomElements.push('Andrés');
    randomElements.forEach(element => {
        console.log(element);
    });
})();
//# sourceMappingURL=arrays.js.map