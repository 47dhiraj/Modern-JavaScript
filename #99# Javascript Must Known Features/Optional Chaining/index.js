// About Optional Chaining  ==>  Program crash nagari kana, yedi kunai properties ko value null or undefined cha ki chaina vanera check garna use huncha (without crashing whole program if undefined occurs)

// kunai hudai navako function lai call garda error aaucha, but yedi testo function nai chaina but hamile call garera cha ki chaina hernu parne vayo vani, program lai crash nai nagari Optional Chaining ko help batw herna sakincha.

// Optional chaining garna ko lagi property or attribute pachadai  ?  (i.e single question mark) rakhincha

// function call garda pani optional chaining garna sakincha,,, by using -->  function_name?.()

// Optional chaining also works with arrays.



// Example of Optional Chaining

class Person                                        // Person class ho
{

    constructor(name, address, hobbies)             // Constructor ho
    {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    }


    print()                                         // javascript ma print() vanni method hudaina so hami aafaile print() vanni method create gareko
    {
        console.log(this)                           // this keyword refers to the current object or instance.
    }

}



function printPersonStreet(person)                  // object as parameter receive gari rako cha.
{
    console.log(person?.address?.street, person?.address?.city)            // person? le k garcha vanda, yedi person nai exists gardain vani undefined dincha without crashing or thworing error.
}






// Creating hitman object of Person class (no undefined property for this object creation)
const hitman = new Person(                          
                "Agent 47",
                { street: "Ghattekulo", city: "Kathmandu" },
                ["Programming", "Watching Movies", "Travelling"]
)

hitman.print()              
printPersonStreet(hitman)




// Creaing hulk object of Person class (property ko optional chaining ko use garcha yo object creation le)
const hulk = new Person(                          
    "Hulk 47",
    undefined,
    ["Sleeping"]
)

hulk.print()              
printPersonStreet(undefined)




// // Creating thor object (function optional chaining ko use garcha yo object le)
const thor = new Person(                          
                "Agent 47",
                { street: "Dillibazar", city: "Kathmandu" },
                undefined
                // ["Flying", "Sleeping"]
)


thor.print?.()                      // ?.  matlab optioanl chaining for function

// calling function without using optional chaining
// thor.printName()                 // (is not a function vanera error throw garcha)

// Calling function using Optional chaining:  printName() vanni function chadai chaina (but is not a function vanera error throw gardaina) 
thor.printName?.()                  // ?.  matlab optioanl chaining for function

printPersonStreet(thor)   

// Without using optional chaining in array
// console.log(thor.hobbies[0])        // 0' of undefined error throw garcha

// using optional chaining in array (error throw gardaina)
console.log(thor.hobbies?.[0])
console.log(thor.hobbies?.[1].toUpperCase())



