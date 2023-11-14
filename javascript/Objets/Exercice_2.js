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
    console.log(`${user.firstname} ${user.lastname}`)
    if(user.addresses) {
        const addresses = user.addresses;
        addresses.forEach(address => {
            console.log(`${address.street}, ${address.number} `)
        })
    }
})