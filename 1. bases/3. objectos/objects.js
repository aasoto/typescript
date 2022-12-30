"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    //cuando se asignan nuevos valores al objecto d esta manera
    //se sobreescriben todos los anteriores
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
