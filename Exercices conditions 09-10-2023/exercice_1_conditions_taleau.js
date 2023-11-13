// Bibliotheque

const { input } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)

// Code

const mois_31 = ['JANVIER','MARS','MAI','JUILLET','AOUT','OCTOBRE','DECEMBRE'];
const mois_30 = ['AVRIL','JUIN','SEPTEMBRE','NOVEMBRE'];
const mois_28 = ['FEVRIER'];


(async function () {

    console.clear();

    let mois = await input({ message: 'Donnez-moi le nom d\'un mois :' });
    mois = mois.toUpperCase();

    while (mois_31.includes(mois) == false && mois_30.includes(mois) == false && mois_28.includes(mois) == false){
        console.clear();
        console.log(`Le mois ${mois.toLowerCase()} n'existe pas.`);
        mois = await input({ message: 'Donnez-moi le nom d\'un mois :' });
        mois = mois.toUpperCase();
    }

    console.clear();

    if (mois_31.includes(mois)) {
        console.log(`31 jours dans le mois de ${mois.toLocaleLowerCase()}.`);
    } 
    else if (mois_30.includes(mois)) {
            console.log(`30 jours dans le mois de ${mois.toLocaleLowerCase()}.`);
    } 
    else {
        console.log(`28 jours dans le mois de ${mois.toLocaleLowerCase()}.`);
    }

})();

// Fin du code