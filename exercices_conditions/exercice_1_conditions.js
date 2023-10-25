// Bibliotheque

const { select } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)

// Code

(async function () {
    const mois = await select({
        message: "Choissisez un mois :",
        pageSize: 4,
        loop: false,
        choices: [
            {
                name: "Janvier",
                value: "1"
            },
            {
                name: "Fevrier",
                value: "2"
            },
            {
                name: "Mars",
                value: "3"
            },
            {
                name: "Avril",
                value: "4"
            },
            {
                name: "Mai",
                value: "5"
            },
            {
                name: "Juin",
                value: "6"
            },
            {
                name: "Juillet",
                value: "7"
            },
            {
                name: "Aout",
                value: "8"
            },
            {
                name: "Septembre",
                value: "9"
            },
            {
                name: "Octobre",
                value: "10"
            },
            {
                name: "Novembre",
                value: "11"
            },
            {
                name: "Decembre",
                value: "12"
            }
        ]
    });

    const date = new Date();
    const annee = date.getFullYear();
    const nombreJours = new Date(annee, mois, 0).getDate();

    console.log(`\nLe mois que vous avez choisis contient ${nombreJours} jours de l'annee ${annee} (annee actuel).`)
})();

// Fin du code