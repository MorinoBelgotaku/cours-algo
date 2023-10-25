var prenom = "Bruno";
var boucle = 0;

console.log('Bonjour', prenom);
console.log('Bonjour ' + prenom);
console.log(`Bonjour ${prenom}\n`);

while (boucle != 3) {
    boucle += 1;
    console.log("Chiffre : " + boucle);
};
console.log("\nFin du script.");