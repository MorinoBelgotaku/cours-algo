// Bibliotheques
const { input, select } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const chalk = require('chalk');
const shuffle = require('shuffle-array');
const quiz = require('./questions.json');
const fs = require('fs');


// Debut Code

(async function () {

    console.clear();

     // Declaration de variables
    
     let pause
     let recommencer = true;
     let total
     let temps
     let questions_resultats = [];
 
 
    // Regles

    console.log(chalk.red(`⚠️  Interdiction d'utiliser ${chalk.yellow("internet")} ou votre ${chalk.yellow("calculatrice")} !⚠️\nLa prise d'accent sur les caracteres n'est pas prise en compte.`))
    console.log(`\nAppuyer sur ${chalk.green("Entree")} pour accepter les regles.\n`)
    pause = await input({ message: `` });
    console.clear();

   
    // Boucle

    while (recommencer == true) {
        console.clear();

        // Parametre variables

        shuffle(quiz);
        total = 0;
        questions_resultats = [];


        // Questions et calcul réponse avec "chronomètre"

        let start = Date.now()
        for (let i = 0; i < quiz.length; i++) {
            const reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quiz[i]['question']}`)}` });
            while (reponse == "") {
                console.clear();
                reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quiz[i]['question']}`)}` });
            }
            quiz[i]['reponse'].toUpperCase() == reponse.toUpperCase() ? total++ : null;
            questions_resultats.push(quiz[i]['reponse'].toUpperCase() == reponse.toUpperCase() ? `\n\nQuestion ${i+1} : ${quiz[i]["question"]}\nReponse : ${reponse} (correct)` : `\n\nQuestion ${i+1} : ${quiz[i]["question"]}\nVotre reponse : ${reponse} (incorrect)\nLa bonne reponse : ${quiz[i]["reponse"]}`)
            console.clear();
        }
        let end = Date.now()
        temps = (end-start)/1000;

        // Affichage total

        console.clear();
        console.log(chalk.cyan(`Tu as un total de ${total}/${quiz.length} ! ${total / quiz.length >= 0.5 ? `😀\n${chalk.green('Felicitations !\n')}` : `😭\n${chalk.red('Tu peux mieux faire !\n')}`}\nTemps realise : ${temps} sec.\n`));

        // Recommencer

        recommencer = await select({
            message: 'Recommencer le questionnaire ?',
            choices: [
                {
                    name: 'Oui',
                    value: true
                },
                {
                    name: 'Non',
                    value: false
                }
            ],
        });
    }


    // Sauvegarde du résultat du quiz

    const sauvegarder = await select({
        message: 'Voulez-vous sauvegarder votre resultat ?',
        choices: [
            {
                name: 'Oui',
                value: true
            },
            {
                name: 'Non',
                value: false
            }
        ],
    });

    if (sauvegarder == true) {
        let dernier_resultat = `Total : ${total}/${quiz.length}.\nTemps realise : ${temps} sec.\n\n\nResultats questions :${questions_resultats}`;
        dernier_resultat = dernier_resultat.replaceAll(',', ' ');
        fs.writeFileSync(`dernier resultat.txt`, dernier_resultat);
    }

    console.clear();
})();