// Bibliotheques
const { input, select, checkbox } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const isFloat = require('is-float'); // npm i is-float (version : 0.0.2)
const isNumber = require('is-number'); // npm i is-number (version : 7.0.0)
const chalk = require('chalk');


// Debut Code

(async function () {
    console.clear()

    // Fonctions

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // Regles

    console.log(`=====================`)
    console.log(`| Petit reglement : |`)
    console.log(`| Interdictions aux |`)
    console.log(`| accents durant le |`)
    console.log(`| questionnaire ;)  |`)
    console.log(`=====================`)

    let regles = await select({
        message: "Acceptez-vous ces regles ?",
        loop: false,
        choices: [
            {
                name: "Oui",
                value: true
            },
            {
                name: "Non",
                value: false
            }
        ]
    });

    const questions_regles = [
        `Accepte, c'est ton destin`,
        `Clique sur la premiere reponse`,
        `As-tu donc pas de coeur ?`,
        `Choisis la reponse OUI`,
        `Aller s'il te plait ToT`,
        `Je vais bouder a force.`
    ]

    while (regles == false) {

        regles = await select({
            message: `${questions_regles[random(0,5)]}`,
            loop: false,
            choices: [
                {
                    name: "Oui",
                    value: true
                },
                {
                    name: "Non",
                    value: false
                }
            ]
        })
    }


    // Debut questionnaire

    // Variables utiles

    let note_final = 0
    let rep_fruits_1 = ''
    let rep_fruits_2 = ''
    let rep_fruits_3 = ''
    const fruits = ['ABRICOT','ANANAS','AVOCAT','BAIE','BANANE','CASSIS','CITRON','CITRON VERT','CLEMENTINE','DATTE','DURIAN','FIGUE','FRAISE','FRAMBOISE','FRUIT DE LA PASSION', 'FRUIT DU DRAGON','GOYAVE','GRENADE','GROSEILLE','KAKI','KIWANO','KIWI','LITCHI','MANDARINE','MANGUE','MELON','MIRABELLE','MYRTILLE','NOIX DE COCO','ORANGE','PAPAYE','PASTEQUE','PECHE','POIRE','POMME','RAISIN','TOMATE']
    

    // Premiere question

    console.clear();
    console.log(`Citez 3 fruits. (Au singulier)`);

    while (rep_fruits_1 == '') {
        rep_fruits_1 = await input({message: `Premier fruit :`})
    }
    if (fruits.includes(rep_fruits_1.toUpperCase())){
        note_final++
    }
    
    while (rep_fruits_2 == '') {
        rep_fruits_2 = await input({message: `Deuxieme fruit :`})
    }
    if (fruits.includes(rep_fruits_2.toUpperCase())){
        note_final++
    }

    while (rep_fruits_3 == '') {
        rep_fruits_3 = await input({message: `Troisieme fruit :`})
    }
    if (fruits.includes(rep_fruits_3.toUpperCase())){
        note_final++
    }


    // Deuxieme question

    const answer = await checkbox({
        message: 'Select a package manager',
        choices: [
            { 
                name: 'npm', 
                value: 'npm' 
            },
            { 
                name: 'yarn',
                value: 'yarn' 
            },
            { 
                name: 'pnpm',
                value: 'pnpm', 
                disabled: true 
            },
            {
                name: 'pnpm',
                value: 'pnpm',
                disabled: '(pnpm is not available)',
            },
        ],
    });


    // Fin questionnaire

    // Resultat

    console.log(chalk.green(`Voici ta note final ${note_final}/3`))
})();
// Fin du code