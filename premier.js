const { input, select } = require('@inquirer/prompts'); // npm i @inquirer/prompts (version : 3.2.0)

(async function () {

    let reponse = await input({ message: `2+2 ?` });
})();