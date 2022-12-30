"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    flash = {
        name: 'Clack Kent',
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    if (flash.getName) {
        console.log(flash.getName());
    }
})();
//# sourceMappingURL=objects.js.map