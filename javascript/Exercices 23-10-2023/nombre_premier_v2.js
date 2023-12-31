const { input } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const isFloat = require('is-float');
const isNumber = require('is-number');
const chalk = require('chalk');

(async function () {

  console.clear()

  // Fonction

  function premier(n) {
    diviseurs = []
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
        diviseurs.push(i)
      }
    }
    return diviseurs.length == 2
  }


  // Question

  let n = await input({ message: `Donner un nombre :` });
  while (isFloat(n) == true || isNumber(n) == false || n <= 0) {
    n = await input({ message: `Donner un nombre :` });
  }


  // Resultat

  for (let i = 1; i <= n; i++) {
    console.log(premier(i) ? chalk.green(`${i} est un nombre premier`) : chalk.red(`${i} n'est pas un nombre premier`));
  }
})();