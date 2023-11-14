const { input,select} = require('@inquirer/prompts');

(async function () {
    const first = await input({ message: "1er cote :"});
    const second = await input({ message: "2e cote :"});
    const third = await input({ message: "3e cote :"});

    if (first == second && second == third && third == first){
        console.log("Triangle equilateral")
    }
    else if (first == second || second == third || third == first){
        console.log("Triangle isocele")
    }
    else {
        console.log("Triangle quelconque")
    }
})();