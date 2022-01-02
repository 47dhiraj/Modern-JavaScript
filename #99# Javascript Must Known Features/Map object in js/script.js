// ############### About Map object in javascript  ###################

// Generally Map object chai js object ko lagi ho


// syntax for creating empty map object : 
// const map_object = new Map()
// console.log(map_object)




// // Example of using map object :
const Currency = new Map([                              // creating an map object with some values in it
    ["United States", "USD"],
    ["China", "Renminbi"],
])    

console.log(Currency)



Currency.set( "Nepal", "Nepali Rupee" )                 // easy way of adding new map entry
console.log(Currency)


Currency.forEach((value, key) => {                 // Looping map object using forEach() method
    
    console.log(key + ' = ' + value)

})


Currency.delete('China')                                // map object ko kunai entry lai yesari delete garna sakincha
console.log(Currency)



// const japan = { name: "Japan" }                         // simple js object banako
// Currency.set(japan, "Japanese yen")                     // adding object as new map entry
// // console.log(Currency.get(japan))
// Currency.forEach((value, key) => {                 // Looping map object using forEach() method
    
//     console.log(key + ' = ' + value)

// })


