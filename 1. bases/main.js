"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.12344
    };
    const { nick, ironman, vision, activo, poder } = avengers;
    console.log(nick.toUpperCase(), poder.toFixed(2));
    const actores = ({ ironman, activo }) => {
        console.log(ironman.toLowerCase(), activo);
    };
    actores(avengers);
})();
//# sourceMappingURL=main.js.map