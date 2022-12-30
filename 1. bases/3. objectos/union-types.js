"use strict";
(() => {
    //se puede definir un variable de diferentes tipos
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
