// sort() method in JS Array
// sort() method also changes the original array.

// Example 1 :
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




// example 1.1: Sort by name (string lai alphabetically ordering garcha)
// Alphabetically ascending order
const byName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
})
console.log(byName)

// Alphabetically descending order
const byName2 = characters.sort((a, b) => {
    if(a.name < b.name) return 1;
    return -1;
})
console.log(byName2)




// example 1.2: Sort by mass
// Ascending order by mass
const byMass = characters.sort((a, b) => {      // a & b vaneko two array elements(mathi ko case ma two objects)
    return a.mass - b.mass;                     // if result comes positive after substraction, then b is sorted before a else if result comes negative a is sorted before b.
})
console.log(byMass)

// // Descending order by mass
const byMass2 = characters.sort((a, b) => {      // a & b vaneko two array elements(mathi ko case ma two objects)
    return b.mass - a.mass;                     // if result comes positive after substraction, then a is sorted before b else if result comes negative b is sorted before a.
})
console.log(byMass2)


// console.log(characters)             // sort() method changes the original array





// example 1.3: Sort by height
// Ascending order by height
const byheight = characters.sort((a, b) => {      // a & b vaneko two array elements(mathi ko case ma two objects)
    return a.height - b.height;                     // if result comes positive after substraction, then b is sorted before a else if result comes negative a is sorted before b.
})
console.log(byheight)


// Descending order by height
const byheight2 = characters.sort((a, b) => {      // a & b vaneko two array elements(mathi ko case ma two objects)
    return b.height - a.height;                     // if result comes positive after substraction, then a is sorted before b else if result comes negative b is sorted before a.
})
console.log(byheight2)




// example 1.4: Sort by gender
// Sort female gender at first
const byGender = characters.sort((a, b) => {
    if(a.gender === 'female') return -1;
    return 1;
})
console.log(byGender)

// Sort male gender at first
const byGender2 = characters.sort((a, b) => {
    if(a.gender === 'male') return -1;
    return 1;
})
console.log(byGender2)
