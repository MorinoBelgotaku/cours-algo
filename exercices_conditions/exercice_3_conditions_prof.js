// Bibliotheque

const { input, select } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)
const isNumber = require('is-number'); // npm i is-number (version : 7.0.0)

// Code

(async function () {

    // Poids du colis

    var poids = await input({ message: "Veuillez indiquer le poids du colis (kg) :"});

    if (isNumber(poids) == false || poids <= 0) {
        while (isNumber(poids) == false || poids <= 0){
            poids = await input({ message: "Veuillez indiquer un poids valable :" });
        }
    }
    
    // Zone d'envoie

    const zone = await select({
        message: "Zone d'envoie du colis :",
        loop: false,
        choices: [
            {
                name: "Local",
                value: "local"
            },
            {
                name: "National",
                value: "national"
            },
            {
                name: "International",
                value: "international"
            }
        ]
    });

    // Conditions frais

    let frais = 0;

    if (zone == "local") {
        frais = 5 + (2*poids);
    }
    else if (zone == "national") {
        frais = 15 + (poids * ((poids < 10) ? 4 : 3));
    }
    else {
        frais = 15 + (poids * ((poids < 5) ? 10 : 7));
    }
    
    // Frais du colis

    console.log(`\nLes frais de votre colis allant dans une zone ${zone} et pesant ${poids} kg, s'eleve a ${frais.toFixed(2)}€`)
})();

// Fin du code