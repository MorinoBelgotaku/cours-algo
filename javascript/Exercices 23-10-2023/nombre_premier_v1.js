const { input } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const isFloat = require('is-float');
const isNumber = require('is-number');
const chalk = require('chalk');

(async function () {

  console.clear()

  // Declaration de variable

  let premier
  let diviseurs = []


  // Question

  let n = await input({ message: `Donner un nombre :` });
  while (isFloat(n) == true || isNumber(n) == false || n <= 0) {
    n = await input({ message: `Donner un nombre :` });
  }


  // Verification

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      diviseurs.push(i)
    }
  }
  if (diviseurs.length == 2) {
    premier = true
  }
  else {
    premier = false
  }


  // Resultat

  console.log(premier ? chalk.green(`${n} est un nombre premier`) : chalk.red(`${n} n'est pas un nombre premier`));
})();