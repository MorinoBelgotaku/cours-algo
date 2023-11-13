console.clear()

const users = [
    {
        firstname: 'Bob',
        lastname: 'Bernard',
        addresses: [
            {
                street: "Rue de la paix",
                number: 1
            }
        ]
    },
    {
        firstname: 'TOTO',
        lastname: 'Brice',
        addresses: [
            {
                street: "Rue de la paix",
                number: 2
            }
        ]
    },
    {
        firstname: 'Roger',
        lastname: 'Tom',
        addresses: [
            {
                street: "Rue de la paix",
                number: 3
            },
            {
                street: "Rue de la poire",
                number: 22
            }
        ]
    },
    {
        firstname: 'Morgan',
        lastname: 'Sam',
    },
]

users.forEach(user => {
    console.log(user.firstname + ' ' + user.lastname)
    if (users.addresses) {
        const addresses = users.addresses
        addresses.forEach(adress => {
            console.log(adress.street)
        })
    }
})

console.log(users[0].addresses[0].street)