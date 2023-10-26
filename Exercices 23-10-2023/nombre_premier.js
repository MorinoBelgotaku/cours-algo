const { input, select } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)

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

    test_prime(n) ? console.log(`${n} est un nombre premier`) : console.log(`${n} n'est pas un nombre premier`);
})();