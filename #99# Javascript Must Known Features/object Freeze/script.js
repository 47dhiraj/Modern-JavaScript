// About object.freeze  ==> object ko properties lai freeze garna help garcha ( i.e we will be unable to change or modify the values of object property or nested object property or even arrays)

// We can use object.freze() on object, ntested object, also with arrays.

// Note : Inside the nested object, nested object ko property ko value change garna batw prevent garnu cha vani, particularly tyo property lai object.freeze garna parcha.



// // Example of object.freeze() with array :

// array1 = Object.freeze(['agent 47', 'hitman'])          // array banauda kheri nai array lai freeze gareko.
// console.log(array1)
// // array1.push('fataha')                                // we cannot update the array1 because this array is being freeze




// Example of object.freeze() with simple object
const person = Object.freeze(
    {
        name: "Agent 47",
        age: 25,
        favouriteFood: 'Momos & mutton gravy'
    }
)

console.log(person)
person.age = 26         // yesari value change garni code lekhe pani property ko value change garna sakidaina because object lai surumai freeze gareko cha.
console.log(person)






// Example of object.freeze() with complex object
const person2 = Object.freeze(
    {

        name: "Agent 47",
        age: 25,
        favouriteFood: 'Momos & mutton gravy',
        
        address: Object.freeze({                     // address chai nested object ho // so nested object lai freeze garda particulary nested object.freeze() lekhna parcha
            street: "Ghattekulo",
            city: "Ktm",
        }),

        
        hobbies: Object.freeze(["Programming", "Watching Movies", "Travelling"])    // array type ko property lai pani particularly object.freeze() garna parcha
    
    }
)


console.log(person2)

person2.address.street = "Dillibazar"            // change garni code lekhe pani u cannot change value of nested object property

// person2.hobbies.push("watching football")         // cannot do this.. we cannot modify freeze array so it throws an error

console.log(person2)

