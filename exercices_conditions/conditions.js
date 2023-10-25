const age = 19;

if (age > 18) {
    console.log("Vous etes majeur");
}
else if (age == 18) {
    console.log("Vous venez d'etre tout juste majeur")
}
else {
    console.log("Vous etes mineur");
}


//Exercice 1
//Entre 7 et 9 tres bien
//10 = Tres tres tres bien
//Entre 5 et 6 = Limite
//En dessous de = Pas terrible
const note = 10;

if (note == 10) {
    console.log("Tres tres tres bien");
}
else if (note <= 9 && note >= 7) {
    console.log("Tres bien");
}
else if (note <= 6 && note >= 5) {
    console.log("Limite");
}
else{
    console.log("Pas terrible");
}