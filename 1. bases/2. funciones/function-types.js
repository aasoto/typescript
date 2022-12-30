"use strict";
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
//# sourceMappingURL=function-types.js.map