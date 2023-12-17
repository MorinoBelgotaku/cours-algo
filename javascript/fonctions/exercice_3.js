const nombres = [10, 20, 144, 30, 88, 33, 245]

function nombre_plus_grand(t) {
    let grand_nombre = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] > grand_nombre) {
            grand_nombre = t[i]
        }
    }
    return grand_nombre
}

console.log("Nombre plus grand du tableau : " + nombre_plus_grand(nombres))