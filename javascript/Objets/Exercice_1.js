console.clear()
// Creation d'un objet
const obj1 = {}

// Creation d'un objet
// const user = {
//     firstname: "Bruno",
//     lastname: "Morin"
// }

// Ajouter des informations
// user.gender = 'M'
// user['adress'] = "Rue du Mont-A-Leux"

// // Supprimer un element dans un objet
// delete user.gender

const users = [
    {
        firstname: 'Bob',
        lastname: 'Bernard'
    },
    {
        firstname: 'TOTO',
        lastname: 'Brice'
    },
    {
        firstname: 'Roger',
        lastname: 'Tom'
    },
    {
        firstname: 'Morgan',
        lastname: 'Sam'
    }
]

console.log(users)

for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstname,users[i].lastname)
}

users.forEach((u) => {
    console.log(u)
})