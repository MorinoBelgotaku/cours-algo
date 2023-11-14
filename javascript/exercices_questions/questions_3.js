const { input,select } = require('@inquirer/prompts');

(async function () {
    var taille = await input({ message: "Indiquer votre taille (en cm) :"});
    taille /= 100;
    while (taille <= 0) {
        taille = await input({ message: "Indiquer votre taille (en cm) :"});
    }
    var poids = await input({ message: "Indiquer votre poids (en kg) :"});
    while (poids <= 0) {
        poids = await input({ message: "Indiquer votre poids (en kg) :"});
    }
    var imc = poids/(taille**2);
    imc = parseFloat(imc).toFixed(2);

    console.log("Votre IMC : " + imc);

    if (imc < '18,5'){	
        console.log("Insuffisance pondérale (maigreur)");
    }
    else if (imc >= '18,5' && imc <= 25){
        console.log("Corpulence normale")
    }
    else if (imc >= 25 && imc <= 30){
        console.log("Surpoids")
    }
    else if (imc >= 30 && imc <= 35){
        console.log("Obésité modérée")
    }
    else if (imc >= 35 && imc <= 40){
        console.log("Obésité sévère")
    }
    else{
        console.log("Obésité morbide ou massive");
    }
})();