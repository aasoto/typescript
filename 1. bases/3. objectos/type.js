"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súmer velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        powers: ['Súper velocidad'],
        getName() {
            return this.name;
        }
    };
    console.log(flash, superman);
})();
//# sourceMappingURL=type.js.map