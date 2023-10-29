// Bibliotheques
const { input, select } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)
const chalk = require('chalk');
const shuffle = require('shuffle-array');
const quiz = require('./questions.json');
const fs = require('fs');


// Debut Code

(async function () {

    console.clear();

    // Regles

    console.log(chalk.red(`⚠️  Interdiction d'utiliser ${chalk.yellow("internet")} ou votre ${chalk.yellow("calculatrice")} !⚠️\nLa prise d'accent sur les caracteres n'est pas prise en compte.`))
    console.log(`\nAppuyer sur ${chalk.green("Entree")} pour accepter les regles.\n`)
    let pause = await input({ message: `` });
    console.clear();


    // Boucle

    let recommencer = true;

    while (recommencer == true) {
        console.clear();

        // Variables

        shuffle(quiz);
        let total = 0;


        // Questions et calcul réponse

        var start = Date.now()
        for (let i = 0; i < quiz.length; i++) {
            let reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quiz[i]['question']}`)}` });
            while (reponse == "") {
                console.clear();
                reponse = await input({ message: `Q.${i+1} | ${chalk.cyan(`${quiz[i]['question']}`)}` });
            }
            quiz[i]['reponse'].toUpperCase() == reponse.toUpperCase() ? total++ : null;
            console.clear();
        }
        var end = Date.now()
        var temps = (end-start)/1000;

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

        const resultat = `Total : ${total}/${quiz.length}.\nTemps realise : ${temps} sec.`;
        fs.writeFileSync(`dernier resultat.txt`, resultat);    
        console.log('File written successfully');

    }
    console.clear();
})();