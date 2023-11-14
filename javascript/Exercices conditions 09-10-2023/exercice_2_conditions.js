// Bibliotheque

const { input } = require('@inquirer/prompts'); // npm install @inquirer/prompts (version : 3.2.0)
const isNumber = require('is-number'); // npm i is-number (version : 7.0.0)

// Code

(async function () {
    var note = await input({ message: "Indiquer la note obtenue (entre 0 et 100) :"});

    if (isNumber(note) == false || note < 0 || note > 100) {
        while (isNumber(note) == false || note < 0 || note > 100){
            note = await input({ message: "Veuillez indiquer une note valable :" });
        }
    }


    // Conditions note

    if (note >= 90 && note <= 100) {
        console.log("Votre note est de A")
    }
    else if (note >= 80 && note <= 89) {
        console.log("Votre note est de B")
    }
    else if (note >= 70 && note <= 79) {
        console.log("Votre note est de C")
    }
    else if (note >= 60 && note <= 69) {
        console.log("Votre note est de D")
    }
    else {
        console.log("Votre note est de E.\n" + note + "/100")
    }
})();

// Fin du code