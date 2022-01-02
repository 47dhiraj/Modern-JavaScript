// Object Destructuring
// While Destructuring ==> whatever the datatype on the right hand side, similar datatype should be on the left hand side.



// Example 1 : 
const MyUser = {
    name : "Hitman",
    courseCount : 4,
    role: "admin",
};


const {name, courseCount, role} = MyUser;           // left hand side ma pani object chaincha & right hand side ma pani object nai chaincha.
console.log(name)
console.log(courseCount)
console.log(role)





// Example 2 : Creating two objects i.e personOne & personTwo

const personOne ={
    name:   'Ram',   
    age: 25,
    address: {
        city: 'Kawasoti',
        state: 'Lumbini'
    }
}

const personTwo ={
    name:   'Hari',   
    age: 25,
    favouriteFood: 'Chicken & Mutton Gravy Meat',
    address: {
        city: 'Ghattekulo',
        state: 'Bagmati'
    }
}

const {name, age} =  personOne      //  {name, age} chai  Object destructuring gareko ho ( i.e object destructuring garda, left side ko object ko key or variable name, right side ko object key or variable sanga same huna parcha)
console.log(name)
console.log(age)


//yedi object destructuring  garda object ko key vanda alik vinna varibale ma value save garna man cha vani yesari garni
const {name: Name, age: Age, favouriteFood = 'Momo'} =  personTwo       // favouriteFood = 'Momo' yesari favouriteFood ko lagi default value pani set garna sakincha
console.log(Name)
console.log(Age)
console.log(favouriteFood)

const {name: Name, ...rest} =  personTwo                // ...rest  le chai spread operator ko use gareko ho
console.log(Name)
console.log(rest)


// Destructuring in nested object
const {name, address: { city } } =  personTwo             // address: { city }  chai destructuring in nested object
console.log(name)
console.log(city)






// Example 3 :  Advance Concept of Object Destructuring

const personThree ={  
    age: 25,
}


const personFour ={
    // age: 30,
    name:   'Lakkhan',   
    favouriteFood: 'Momos, Mutton gravy with rice, Chicken gravy with Dhedo',
    address: {
        city: 'Dhobighat',
        state: 'Lumbini'
    }
}


const personFive = {...personThree, ...personFour}      // object combining using ...spread operator  // personThree object ma navayeko or even vayeko properties lai personFour ko properties le override garcha 
console.log(personFive)




// using object destructuring in the function parameter to get key value of the object.
function printUser( {name, age, address: { city, state}, favouriteFood})     //  {name, age} chai object destructuring gareko ho
{
    console.log(`Myself ${name}. I'm ${age} years old. I'm from ${city},${state}. I love eating ${favouriteFood}.`)
}


// // Passing parameter without object destructuring
// function printUser(user)
// {
//     console.log(`Myself ${user.name}. I'm ${user.age} years old. I'm from ${user.address.city}, ${user.address.state}. I love eating ${user.favouriteFood}.`)
// }


printUser(personFive)


