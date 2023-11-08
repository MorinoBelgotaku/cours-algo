const { input } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const isFloat = require('is-float');
const isNumber = require('is-number');

(async function () {
    function test_prime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }

      let n = await input({ message: `Donner un nombre premier :` });
      while (isFloat(n) == true || isNumber(n) == false || n <= 0) {
          n = await input({ message: `Donner un nombre premier :` });
      }

      for(let i=1; i<=n; i++) {
        console.log(`Nombre : ${i} ${(test_prime(i) ? "est nombre premier" : "")}`);
    }

    test_prime(n) ? console.log(`${n} est un nombre premier`) : console.log(`${n} n'est pas un nombre premier`);
})();