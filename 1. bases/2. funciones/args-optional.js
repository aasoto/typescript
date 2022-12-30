"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    console.log(fullName('Andrés', 'Soto'));
    console.log(fullName('Andrés'));
})();
//# sourceMappingURL=args-optional.js.map