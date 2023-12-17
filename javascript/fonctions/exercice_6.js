function listNumber(numberStart, NumberFinish, hop) {
    let tableau = [];
    if (NumberFinish < numberStart) {
        return 'Mauvais paramètres!'
    }
    for (let i = numberStart; i <= NumberFinish; i += hop) {
        tableau.push(i)
    }
    return tableau
}

console.log(listNumber(78, 100, 3))
console.log(listNumber(78, 100, 5))
console.log(listNumber(78, 100, 7))

// console.log(listNumber(7, 15))
// console.log(listNumber(56, 78))
// console.log(listNumber(-17, 53))
// console.log(listNumber(100, 78))