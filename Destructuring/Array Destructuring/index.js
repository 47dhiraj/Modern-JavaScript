// Array Destructuring means unpacking the values from the Array.
// While Destructuring ==> whatever the datatype on the right hand side, similar datatype should be on the left hand side.


// // Example 1: 
// const user = ["Agent 47", 4, "Admin"]

// var [name, courseCount, role] = user                    // left hand side ma pani array chaincha & right hand side ma pani array nai chaincha.

// console.log(name)
// console.log(role)
// console.log(courseCount)







// Example 2 :
const alphabet = ['A', 'B', 'c', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']


const [a,, b,, ...rest] = alphabet              // yo line ko ,,  vannale skipping single value  &  ...rest vannale remaing sabbai vanna khojeko ( i.e  triple ... vannale spread operator vanni janaucha)   
console.log(a)
console.log(b)
console.log(rest)



// Creating a new array by spreading two arrays (Arrays combining)
const newArray = [...alphabet, ...numbers]          // ...alphabet vannale spreading alphabet array values & ...numbers vannale spreading numbers array values
console.log(newArray)

// // Alternative of above : we can also create a new array by concatenating two arrays.
// const newArray2 = alphabet.concat(numbers)
// console.log(newArray2)



// Function batw return vayeko array value lai pani destructuring garna sakincha vanera dekhauna khojeko
function sumAndMultiply(a, b)
{
    return [a+b, a*b, a/b]               // yo chai aru kei haina just array return gareko ho .... yesari calculate garera aayeko value chai array ma return huncha .
}

const [sum, multiply, division = 'No Divsion'] = sumAndMultiply(5, 5)        // [sum, multiply, division='No Division']  ko matlab vaneko, sumAndMultiply() method batw return vayeko array lai destructuring gareko ho and aayeko values lai  sum , multiply and division vanni alag alag variable ma rakheko

console.log(sum)
console.log(multiply)
console.log(division)
