const nombres = [10, 20, 144, 30, -56, 88, 33]
const nombres2 = [10, 20, 144, 30, -56, 88, 33, -112]

function nombre_plus_grand_ou_petit(tableau, valeur) {
    let petit_nombre = -Infinity;
    let grand_nombre = Infinity;
    if (valeur.toLocaleLowerCase() === 'grand') {
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] > petit_nombre) {
                petit_nombre = tableau[i]
            }
        }
        return petit_nombre;
    }
    else if (valeur.toLocaleLowerCase() === 'petit') {
        for (let i = 0; i < tableau.length; i++) {
            if (tableau[i] < grand_nombre) {
                grand_nombre = tableau[i]
            }
        }
        return grand_nombre;
    }
    else {
        return 'Donner un paramètre valide!'
    }
}

let petit_ou_grand = 'petit'
console.log("Nombre plus grand du tableau : " + nombre_plus_grand_ou_petit(nombres, petit_ou_grand))
console.log("Nombre plus grand du tableau : " + nombre_plus_grand_ou_petit(nombres2, 'grand'))