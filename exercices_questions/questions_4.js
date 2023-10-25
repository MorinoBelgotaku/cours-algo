const { input,select} = require('@inquirer/prompts');

(async function () {
    const first = await input({ message: "1er nombre :"});
    const second = await input({ message: "2e nombre :"});
    const third = await input({ message: "3e nombre :"});

    if (first <= second && second <= third){
        console.log(first + " <= " + second + " <= " + third)
    }
    else if (first <= third && third<= second){
        console.log(first + " <= " + third + " <= " + second)
    }
    else if (second <= first && first <= third){
        console.log(second + " <= " + first + " <= " + third)
    }
    else if (second <= third && third <= first){
        console.log(second + " <= " + third + " <= " + first)
    }
    else if (third <= first && first <= second){
        console.log(third + " <= " + first + " <= " + second)
    }
    else {
        console.log(third + " <= " + second + " <= " + first)
    }
})();