const message1 = "Hello";
const message2 = "World";

console.log(message1 + " " + message2);



const message3 = "Hello";
const message4 = "World";

console.log(message3.concat(" ").concat(message4));



const message5 = "Hello";
const message6 = "World";

console.log(`${message5} ${message6}`);



//Exercice 1

var prenom = "Bruno";
var nom = "Morin";

console.log(`Bonjour ${prenom} ${nom}`);

//Exercice 2

var a = "5";
var b = 3;
var text = "2";

console.log(`${a}${b}${text}`);

//Exercice 3

var prenom = "Bruno";
var nom = "Morin";

console.log(`Mon prenom est ${prenom} et mon nom est ${nom}.`)

//Exercice 4

var nom = "Morin Bruno";
var rue = "Rue du Mont-A-Leux, 122";
var ville = "Mouscron";
var codePostal = "7700";
var pays = "Belgique";

console.log(`
Mr.${nom}
${rue}
${codePostal} ${ville}
${pays}\n`);

//Exercice 5

var animaux = ["chien", "chat", "poisson"];
var boucle = -1;

while (boucle != 2) {
    boucle += 1;
    console.log(`Avez-vous un ${animaux[boucle]} ?`);
}