const nombres = [10, 20, 144, 30, 88, 33]

function nombre_plus_grand(t) {
    t.sort();
    return t[t.length-1]
}

console.log("Nombre plus grand du tableau : " + nombre_plus_grand(nombres))