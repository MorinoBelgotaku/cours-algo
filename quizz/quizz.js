// Bibliotheques
const { input, select } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const chalk = require('chalk');
const shuffle = require('shuffle-array');
const quizz = require('./questions.json');


// Debut Code

(async function () {

    console.clear();

    // Regles

    console.log(chalk.red(`⚠️  Interdiction d'utiliser ${chalk.yellow("internet")} ou votre ${chalk.yellow("calculatrice")} !⚠️\nLa prise d'accent sur les caracteres n'est pas prise en compte.`))
    console.log(`\nAppuyer sur ${chalk.green("Entree")} pour accepter les regles.\n`)
    let pause = await input({ message: `` });
    console.clear();


    // Boucle

    let recommencer = 'true';

    while (recommencer == 'true') {
        console.clear();

        // Variables

        shuffle(quizz);
        let total = 0;


        // Questions et calcul réponse

        for (let i = 0; i < quizz.length; i++) {
            let reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quizz[i]['question']}`)}` });
            while (reponse == "") {
                console.clear();
                reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quizz[i]['question']}`)}` });
            }
            quizz[i]['reponse'].toUpperCase() == reponse.toUpperCase() ? total++ : null;
            console.clear();
        }


        // Affichage total

        console.clear();
        console.log(chalk.cyan(`Tu as un total de ${total}/${quizz.length} ! ${total / quizz.length >= 0.5 ? `😀\n${chalk.green('Felicitations !\n')}` : `😭\n${chalk.red('Tu peux mieux faire !\n')}`}`));

        // Recommencer

        recommencer = await select({
            message: 'Recommencer le questionnaire ?',
            choices: [
                {
                    name: 'Oui',
                    value: 'true',
                },
                {
                    name: 'Non',
                    value: 'false',
                }
            ],
        });
    }
    console.clear();
})();