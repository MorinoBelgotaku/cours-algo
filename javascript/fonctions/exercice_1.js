const nombres = [10, 20, 30, 88, 33]

function somme_tableau(t) {
    let somme = 0;
    for (let i = 0; i < t.length; i++) {
        somme += t[i]
    }
    return somme
}

console.log("Somme du tableau : " + somme_tableau(nombres))