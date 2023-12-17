function multiplication(nombre) {
    let tableau = [];
    if (nombre >= 1 && nombre <= 10) {
        for (let i = 1; i <= 10; i++) {
            tableau.push(i * nombre)
        }
        return tableau
    } else {
        return 'Erreur de nombre ! ' + nombre + ' doit être compris entre 1 et 10 !'
    }
}

console.log(multiplication(7))
console.log(multiplication(15))