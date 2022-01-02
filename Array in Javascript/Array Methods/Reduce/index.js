// Reduce method in Javascript

// Reduce method does some operations on all the array elements and return the result of the operation as combine result.
// The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).



// Example 1 :
const items = [                                           // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 10000 },
    { name: 'Keyboard', price: 25 }
]

const total = items.reduce((currentTotal, item) => {      // yo line ko item vannale array element vanni bujincha // yo line ko currentTotal ko value harek iteration mai change vai rako huncha // Finally, at last loop or iteration, yo line ko currentTotal ko value total vanni variable ma jancha             
    return currentTotal + item.price                      // harek iteration ma yaha batw return vako value feri ghumera tei mathi ko reduce method ko currentTotal ma jancha  
}, 0)                                                     // currentTotal ko starting value 0 hos vanna ko lagi 0 lekheko.
console.log(total)



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


// example 2.1: Get the total mass of all characters
const totalMass = characters.reduce((acc, character) => {
    return acc + character.mass;
}, 0);                   // acc ko value 0 le initialize gareko.
console.log(totalMass)

// // one liner
// const totalMass = characters.reduce((acc, character) => acc + character.mass, 0);
// console.log(totalMass)



// example 2.2: Get the total height of all characters
const totalHeight = characters.reduce((acc, character) => {
    return acc + character.height;
}, 0);               // acc ko value 0 le initialize gareko
console.log(totalHeight)



// example 2.3: Get the total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, current) => {
    return acc + current.name.length;
}, 0)               // acc ko value 0 le initialize gareko
console.log(totalNameCharacters)




// example 2.4: Get the total number of characters by eye color (i.e group by eye color anusar total number of characters nikalni)
const charactersCountByEyeColor = characters.reduce((acc, current) => {
    const color = current.eye_color

    if(acc[color])
    {
        acc[color]++;               // yedi tyo particular eye color vako character cha vani acc object ko color vanni key ko value 1 le increment gareko.
    }
    else
    {
        acc[color] = 1;             // yedi tyo particular eye color vako character nai first time veti rako cha vani, acc object ko color vanni key ko value 1 set gareko.
    }

    return acc;
   
}, {})              // {} vannale acc ko value empty object le initialize gareko.

console.log(charactersCountByEyeColor)





