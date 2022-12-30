"use strict";
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
//# sourceMappingURL=app.js.map