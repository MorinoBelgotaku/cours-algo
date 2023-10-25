// Bibliotheque

const { input } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)

// Code

const mois_31 = ['JANVIER','MARS','MAI','JUILLET','AOUT','OCTOBRE','DECEMBRE'];
const mois_30 = ['AVRIL','JUIN','SEPTEMBRE','NOVEMBRE'];
const mois_28 = ['FEVRIER'];


(async function () {

    let mois = await input({ message: 'Donnez-moi le nom d\'un mois' });
    mois = mois.toUpperCase();

    if (mois_31.includes(mois)) {
        console.log('31 jours')
    } 
    else if (mois_30.includes(mois)) {
            console.log('30 jours')
    } 
    else if(mois_28.includes(mois)) {
        console.log('28 jours')
    }
    else {
        console.log("Mois invalide.")
    }

})();

// Fin du code