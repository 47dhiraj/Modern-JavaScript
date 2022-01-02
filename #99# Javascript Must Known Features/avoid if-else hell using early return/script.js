// Avoid if else hell using early return keyword

var user = prompt('Enter your username :');
var age = prompt('Enter your age :');
// console.log('Your age is:', age)





// Using if and early return keyword (without using else & else if)
const CanDrinkOrNot = ((age) => {

    // // one way
    // if (age <= 100 && age >= 18) return "Yes. U can 🍻"
    // return "Nope 😷. U can't 🍻"


    // single liner way (Good way)
    return (age != '') ? (age >= 18 && age <= 100 ? "Yes. U can 🍻" : "Nope 😷. U can't 🍻") : "You are not person";        // True condition statement lekhni thau ma pani feri ternary condition code cha...

})

console.log(CanDrinkOrNot(age))            // calling CanDrinkOrNot function




// // Tradition if-else way
// if (age != '')
// {
//     if (age < 18) {
//         console.log("Nope 😷. U can't 🍻")
//     } 
//     else if (age <= 100) {
//         console.log("Yes. U can 🍻")
//     }
//     else {
//         console.log("You are not person.")
//     }

// } 
// else {
//     console.log("You are not person.")
// }
    

