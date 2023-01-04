"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
conducirBatimovil(batimovil);
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`${this.nombre} - ${this.edad} | ${this.sexo}`);
    }
}
const persona = new Persona('Andrés Soto', 25, 'Másculino', 'Soltero');
persona.imprimirBio();
//# sourceMappingURL=main.js.map