"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    console.log(fullName('Andrés'));
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés', 'Soto', 'Suárez'));
})();
//# sourceMappingURL=args-rest.js.map