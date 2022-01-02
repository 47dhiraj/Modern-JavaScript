// Map method in JS

// map method le original array lai change gardaina.
// Note : Map allows you to take a array and convert this array into different new array so all the items in new array going to look like different.
//  The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order.
//  Note: map() does not execute the function for array elements without values.


// // Example 1 :
const items = [                                         // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

const itemNames = items.map((item) => {                 // itemsNames vanni auta naya array banako & yesma chai orginal array ko item haru ko name matra rakhna khojeko      
        return item.name
})

const itemPrices = items.map((item) => {                // itemsNames vanni auta naya array banako & yesma chai orginal array ko item haru ko price matra rakhna khojeko
    return item.price
})

console.log(itemNames)
console.log(itemPrices)





// Example 2 : Github Repo example (Github link : https://github.com/jamesqquick/javascript-array-functions-practice )
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// example 2.1: Get an array of all names
const names = characters.map((character) => {
    return character.name
})
console.log(names)

// // One liner map method in arrow function
// const names2 = characters.map((character) => character.name )
// console.log(names2)




// example 2.2: Get an array of all heights
const heights = characters.map((character) => {
    return character.height
})
console.log(heights)




// example 2.3: Get an array of objects with just name and height properties
const minimizedArray = characters.map((character) => {
    return {name: character.name, height: character.height}                  // array vitra json object jasari return gareko
})
console.log(minimizedArray)

// // One liner code
// const minimizedArray2 = characters.map( (character) =>  ({name: character.name, height: character.height}) )
// console.log(minimizedArray2)




// example 2.4: Get an array of all first names 
const firstNames = characters.map((character) => {
    return character.name.split(" ")[0]                 // split() method string ko property method ho, yo chai string lai split garna ko lagi use huncha.
})
console.log(firstNames)

// // one linear code
// const firstNames2 = characters.map((character) =>  character.name.split(" ")[0] )
// console.log(firstNames2)




console.log(characters)                 // since we can clearly say that, map() method doesnt change the original array.