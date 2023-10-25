const message = 'Hello la team';
console.log("La variable contenant [" + message + "] est de type : " + typeof message);

//EXERCICE 1

var prenom1 = "Bruno";

var prenom2 = prenom1;

console.log("\n" + prenom2 + "\n");

//EXERCICE 2

var nb1 = 10;
var nb2 = 15;
// var tmp = 0;

// tmp = nb1;
// nb1 = nb2;
// nb2 = tmp;

[nb1, nb2] = [nb2, nb1];

// nb1 = nb1+nb2;
// nb2 = nb1-nb2;
// nb1 = nb1-nb2;

console.log("nb1 = " + nb1 + "\nnb2 = " + nb2);

//EXERCICE 3
//nb1 = nb4
//nb2 = nb3
//nb3 = nb1
//nb4 = nb2

var nb1 = 10;
var nb2 = 15;
var nb3 = 26;
var nb4 = 38;
var tmp = 0;

tmp = nb1;
nb1 = nb4;
nb4 = nb2;
nb2 = nb3;
nb3 = tmp;

console.log("\nnb1 = " + nb1 + "\nnb2 = " + nb2 + "\nnb3 = " + nb3 + "\nnb4 = " + nb4);
