const { input } = require('@inquirer/prompts'); // npm i inquirer (version : 3.2.0)

(async function () {
// // Posez une question en boucle a l'utilisateur
    console.clear()
    let prenom;
    while (prenom != 'BRUNO') {
        prenom = await input({ message: "Indique ton prenom :" });
        prenom = prenom.toUpperCase();
    }
    console.clear();
    console.log("\nC'est bien Bruno !\n")


    const questions = [
        'Couleur prefere ?',
        'Ton prenom ?',
        'Ton nom ?',
        'Ton age ?',
        'Plat prefere ?',
    ]

    const reponses_table = [];
    let boucle = 0;
    while (boucle < questions.length) {
        reponses = await input({ message: `${questions[boucle]}` });
        reponses_table.push(`${reponses}`);
        boucle++
    }

    console.log(`Bonjour ${reponses_table[2]} ${reponses_table[1]}, vous avec ${reponses_table[3]} ans, votre couleur prefere est le ${reponses_table[0]} et vous aimez manger ${reponses_table[4]}`)
})();