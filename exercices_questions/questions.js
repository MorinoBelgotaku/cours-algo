// (async function () {
//     var age = await input({ message: 'Quel est ton âge ?' });

//     while (age < 0 || typeof age === 'string') {
//         age = await input({ message: 'Entre un âge valide :' });
//     }
//     if (age >= 18) {
//         console.log("Vous etes majeur.");
//     }
//     else {
//         console.log("Vous etes mineur.");
//     }
// })()

//Exercice 2
//Civilite
//Age
//Navigateur prefere

const { input,select } = require('@inquirer/prompts');

(async function () {
    const civilite = await select({
        message: "Etes-vous : Homme ou Femme ou Autre ?",
        choices: [
            {
                name: "Homme",
                value: "1"
            },
            {
                name: "Femme",
                value: "0"
            },
            {
                name: "Autre"
            }
        ]
    });
    const age = await input({ message: "Quel age avez-vous ?" });
    const navPref = await select({
        message: "Quel est votre navigateur prefere ?",
        choices: [
            {
                name: "Chrome",
                value: "Chrome"
            },
            {
                name: "Firefox",
                value: "Firefox"
            },
            {
                name: "Edge",
                value: "Edge"
            },
            {
                name: "Opera",
                value: "Opera"
            }
        ]
    });

    if (civilite == "1") {
        console.log("Bonjour Monsieur, vous avez " + age + " ans et votre navigateur prefere est " + navPref + ".");
    }
    else if (civilite == "0") {
        console.log("Bonjour Madame, vous avez " + age + " ans et votre navigateur prefere est " + navPref + ".");
    }
    else {
        console.log("Bonjour, vous avez " + age + " ans et votre navigateur prefere est " + navPref + ".");
    }

})();
