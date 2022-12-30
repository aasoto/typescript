"use strict";
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
//# sourceMappingURL=union-types.js.map