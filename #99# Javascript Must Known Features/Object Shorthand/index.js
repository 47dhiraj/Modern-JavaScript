// About Object Shorthand  ==> object property and variable value ko name same rakhni ho vani ek choti matra tyo name lekhda huncha.



// Example of object shorthand :

const name = "Agent 47"
const favouriteFood = "Momo"
const city = "ktm"


const hitman = {                        // creating js object using object literal
    
    name,                               // using object shorthand (yedi key and variable value ko name same rakhni ho vani, ekchoti matra name lekhda huncha)
    // Alternative
    // name: name,

    favouriteFood,
    // Alternative
    // favouriteFood: favouriteFood,


    address: city,                      // property and variable ko name different cha, so yesma chai object shortand feature use garna mildaina.

}


console.log(hitman)