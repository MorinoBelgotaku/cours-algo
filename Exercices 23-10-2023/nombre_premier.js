const { input } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const isFloat = require('is-float');
const isNumber = require('is-number');

(async function () {

  console.clear()

  // Declaration de variable
  
  let prime
  let diviseurs = []


  // Question

  let n = await input({ message: `Donner un nombre premier :` });
  while (isFloat(n) == true || isNumber(n) == false || n <= 0) {
    n = await input({ message: `Donner un nombre premier :` });
  }


  // Verification

  for (let i=1; i <= n; i++) {
    if (n%i==0) {
      diviseurs.push(i)
    }
  }
  if (diviseurs.length == 2) {
    prime = true
  }
  else {
    prime = false
  }


  // Resultat

  prime ? console.log(`${n} est un nombre premier`) : console.log(`${n} n'est pas un nombre premier`);
})();