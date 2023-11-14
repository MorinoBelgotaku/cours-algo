// Bibliotheque

const { input, select } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)
const isFloat = require('is-float'); // npm i is-float (version : 0.0.2)
const isNumber = require('is-number'); // npm i is-number  (version : 7.0.0)

// Code

(async function () {
    var nombreEntier = await input({ message: "Indiquer un nombre entier :"});
    var nombre;

    if (isNumber(nombreEntier) == false || isFloat(nombreEntier) == true) {
        while (isNumber(nombreEntier) == false || isFloat(nombreEntier) == true){
            nombreEntier = await input({ message: "Indiquer un nombre entier :" });
        }
    }
    else {
        nombreEntier = parseInt(nombreEntier);
    }
    

    nombre = nombreEntier%5;
    if (nombre == 0) {
        console.log(nombreEntier + " est divisible par 5")
    }
    else {
        console.log(nombreEntier + " n'est pas divisible par 5")
    }
})();

// Fin du code