"use strict";
(() => {
    const ironMan = {
        name: 'Iron man',
        weapon: 'Armadura'
    };
    const captainAmerica = {
        name: 'Capitan América',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Martillo'
    };
    const superHeroes = [ironMan, captainAmerica, thor];
    for (const heroe of superHeroes) {
        const { name, weapon } = heroe;
        console.log(name, weapon);
    }
})();
//# sourceMappingURL=main.js.map