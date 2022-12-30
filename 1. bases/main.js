"use strict";
(() => {
    const msg = "Hola mundo";
    const city = {
        name: 'Valledupar',
        country: 'Colombia',
        population: 450000
    };
    city.population = 500000;
    console.log(city.population + 1);
})();
(() => {
    let avenger = 123;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.29394932;
    console.log(avenger.toFixed(2));
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["acuaman"] = 0] = "acuaman";
        FuerzaHeroes[FuerzaHeroes["batman"] = 1] = "batman";
        FuerzaHeroes[FuerzaHeroes["flash"] = 5] = "flash";
        FuerzaHeroes[FuerzaHeroes["superman"] = 100] = "superman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    const fuerzaFlash = FuerzaHeroes.flash;
    const fuerzaSuperman = FuerzaHeroes.superman;
    const fuerzaBatman = FuerzaHeroes.batman;
    const fuerzaAcuaman = FuerzaHeroes.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
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
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let EscalaNumerica;
    (function (EscalaNumerica) {
        EscalaNumerica[EscalaNumerica["min"] = 0] = "min";
        EscalaNumerica[EscalaNumerica["medium"] = 1] = "medium";
        EscalaNumerica[EscalaNumerica["maximum"] = 2] = "maximum";
    })(EscalaNumerica || (EscalaNumerica = {}));
    const valor = EscalaNumerica.medium;
    console.log(valor);
    console.log(EscalaNumerica);
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
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion.d);
    console.log(enumeracion);
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    const aprobado = (respuesta) => {
        if (respuesta) {
            return 'Aprobado';
        }
        else {
            throw new Error("Reprobado");
        }
    };
    console.log(aprobado(true));
})();
(() => {
    let isActive = undefined;
    let isNull = null;
    console.log(isNull);
})();
(() => {
    const avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcán negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toLowerCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    let superHeroe = ['Superman', 500, true];
    superHeroe[0] = 'Batman';
    superHeroe[1] = 400;
    superHeroe[2] = false;
    console.log(superHeroe);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    console.log(callBatman(), callSuperman());
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    let noSigueHaciendoNada;
    noSigueHaciendoNada = noHaceNada;
    noSigueHaciendoNada(1, 'Andrés', true, ['a', 'b', 'c']);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Andrés', 'Soto');
    console.log({ name });
    const fullAddress = (address, neighborhod) => {
        return `Direccion: ${address} - ${neighborhod}`;
    };
    const direccion1 = fullAddress('Calle 28 No.14-34', '12 de octubre');
    console.log(direccion1);
    const direccion2 = fullAddress('Calle 28 No.14-34', 12);
    console.log(direccion2);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastname'}`;
        }
    };
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés'));
    console.log(fullName('Andrés', 'Soto', true));
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés'));
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    console.log(fullName('Andrés'));
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés', 'Soto', 'Suárez'));
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salavado!`;
    let myFunction;
    let theFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    theFunction = addNumbers;
    console.log(theFunction(1, 2));
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activadad';
    };
    console.log(typeof activateBatiSignal());
    const heroName = returnName();
    console.log(heroName);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
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
(() => {
    let myCustomVariable = 'Andrés';
    console.log(typeof myCustomVariable);
    myCustomVariable = 25;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['ninguno']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=main.js.map