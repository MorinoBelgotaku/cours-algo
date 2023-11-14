const { input, select } = require('@inquirer/prompts');

(async function () {

    // Declaration des variables sous forme de questions

    var first = await input({ message: "1er nombre :" });
    var second = await input({ message: "2e nombre :" });
    const operation = await select({
        message: "Quel est votre navigateur prefere ?",
        choices: [
            {
                name: "Addition",
                value: "+"
            },
            {
                name: "Soustraction",
                value: "-"
            },
            {
                name: "Multiplication",
                value: "x"
            },
            {
                name: "Division",
                value: "/"
            }
        ]
    });

    // Conversion des "string" du input en "number"

    first = parseInt(first);
    second = parseInt(second);

    // Conditions de calculs

    if (operation == "+") {
        reponse = first + second;
        console.log(first + " " + operation + " " + second + " = " + reponse);
    }
    else if (operation == "-") {
        reponse = first - second;
        console.log(first + " " + operation + " " + second + " = " + reponse);
    }
    else if (operation == "x") {
        reponse = first * second;
        console.log(first + " " + operation + " " + second + " = " + reponse);
    }
    else {
        reponse = first / second;
        console.log(first + " " + operation + " " + second + " = " + reponse);
    }
})();