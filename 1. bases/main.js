"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    const actores2 = (_a) => {
        var { nick } = _a, resto = __rest(_a, ["nick"]);
        console.log(nick, resto);
    };
    actores2(avengers);
    const arreglo1 = ['Valledupar', 'César', 'Colombia', 'América del Sur'];
    const [, dpto] = arreglo1;
    console.log({ dpto });
    const [ciudad, departamento, pais, continente] = arreglo1;
    console.log(ciudad, departamento, pais, continente);
    const avengersTuple = ['Cap. América', 500, true];
    const [nombre, power, situacion] = avengersTuple;
    console.log({ nombre, power, situacion });
})();
//# sourceMappingURL=main.js.map