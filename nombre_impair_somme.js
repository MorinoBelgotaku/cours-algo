const { input } = require('@inquirer/prompts');
const isFloat = require('is-float');
const isNumber = require('is-number');

(async function () {

    console.clear();

    let somme = 0;
    let n = await input({ message: `Donner un nombre premier :` });
    while (isFloat(n) == true || isNumber(n) == false) {
        n = await input({ message: `Donner un nombre premier :` });
    }

    console.clear();

    for(let i=1; i<=n; i++) {
        console.log(`Nombre : ${i} ${(i%2 == 1 ? "est impair" : "")}`);
        if(i%2 == 1) {
            somme+=i;
        }
    }

    console.log(`\nLa somme total des nombres impair jusqu'a ${n} vaut ${somme}`);
})();