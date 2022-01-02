// some method in javscript

// some method only return boolean value (i.e True or False)... it doesn't return new array .
// kunai array item le condition fullfill garne bittikai true return garcha.. so some method le pani true return garcha.
 


// Example 1:
const items = [                                     // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 10000 },
    { name: 'Keyboard', price: 25 }
]

// for finding free items
const hasFreeItems = items.some((item) => {                 
    return item.price < 0             
})
console.log(hasFreeItems)

// for finding cheaper items
const hasCheaperItems = items.some((item) => {                 
    return item.price > 0 && item.price <= 1000        
})
console.log(hasCheaperItems)

// for finding expensive items
const hasExpensiveItems = items.some((item) => {                 
    return item.price >= 10000       
})
console.log(hasExpensiveItems)




// Example 2 :

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// example 2.1: Is there at least one male character?
const oneMaleCharacter = characters.some((character) => {
    return character.gender === 'male'
})
console.log(oneMaleCharacter)

// // one liner arrow function
// const oneMaleCharacter2 = characters.some((character) => character.gender === 'male')
// console.log(oneMaleCharacter2)



// example 2.2: Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) => character.eye_color === 'blue')
console.log(oneBlueEyes)


// example 2.3: Is there at least one character taller than 200?
const oneTallerThan210 = characters.some((character) => character.height > 210)
console.log(oneTallerThan210)


// example 2.4: Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some((character) => character.mass < 50)
console.log(oneMassLessThan50)





// console.log(characters)     // we can say, some() method doesn't change the original array.

