function espace(){
    console.log('')
}

// Exercice 1

for(let i=1; i<=10; i++) {
    console.log('Hello World! ' + i)
}


// Exercice 2
// Afficher les nomres suivant
// 2 4 6 8 10 12
espace();

for(let i=2; i<=12; i+=2) {
    console.log('Nombre : ' + i)
}


// Exercice 3
// Afficher la table de multiplication de 5
espace();
for(let i=1; i<=10; i++) {
    const multi = 5;
    console.log(`${i} x ${multi} = ${i*multi}`);
}


// Exercice 4
// Afficher les nombres de 1 a 20
// Sur les nombres divisibles par 3 rajoutes un message a cote du nombre divisible par 3
espace()

for(let i=1; i<=20; i++) {
    console.log(`Nombre : ${i} ${(i%3 == 0 ? "est divisible par 3" : "")}`);
}


// Exercice 5
espace()
const fruits = ['pomme','poire','kiwi','orange','cerise'];

for(let i=0; i<fruits.length; i++) {
    console.log(`Fruit : ${fruits[i]}`);
}