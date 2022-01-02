// Every method in JS Array

// all array items le condition fullfill gare matra True return garcha.
// every() method returns boolean(True or False) value.
// Note : Every method checks condition for every array elements in array. if the condtion matches for all elements then only it return True, otherwise false.




// Example 1 :
const items = [                                 // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 1000 },
    { name: 'Computer', price: 10000 },
    { name: 'Keyboard', price: 25 }
]


const hasAllItems = items.every((item) => {                 
    return item.price <= 10000             
})
console.log(hasAllItems)

// console.log(items)          // It doesn't change original array.



// Example 2 : Github repo example

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


// example 2.1: Does every character have blue eyes?
const allBlueEyes = characters.every((character) => {
    return character.eye_color === 'blue'
})
console.log(allBlueEyes)

// // one liner code
// const allBlueEyes2 = characters.every((character) => character.eye_color === 'blue')
// console.log(allBlueEyes2)


// example 2.2: Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((character) => {
    return character.mass > 40
})
console.log(allMassMoreThan40)



// example 2.3: Is every character shorter than 200?
const allShorterThan200 = characters.every((character) => {
    return character.height < 200
})
console.log(allShorterThan200)



// example 2.4: Is every character male?
const allMale = characters.every((character) => {
    return character.gender === 'male'
})
console.log(allMale)







