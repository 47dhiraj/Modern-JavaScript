// Various examples of Arrow Function


// Example 1:  Converting above normal function to an arrow function
const greet1 = (name)=>
{
    console.log('Inside Arrow Function')
    return `Good Morning ${name}`    
}
console.log(greet1('Agent 47'))

// Another example :
var isEven1 = (element) => 
{
    return element % 2 === 0
}
console.log(isEven1(10))




// Example 2 : One liners do not require cruly braces and return keyword (i.e return keywrod lekhi rakhna pardaina)
const  greet2 = (name) =>  `Good Morning ${name}`
greeting = greet2('Agent 47')
console.log(greeting)

// Another example :
var isEven = (element) => element % 2 === 0
console.log(isEven(10))




// Example 3 : We can also return object in one line statement 
const greet3 = () =>  ({name: "Agent 47"});
greeting = greet3('Agent 47')
console.log(greeting)




// Example 4 : Single parameters do not need parenthesis(i.e small bracket) 
const greet4 = name =>  `Good Morning ${name}`            // OR ,  "Good Morning " + name;
console.log(greet4('Agent 47'))




// Example 5 : But you will have to put parenthesis if there are multiple paramteres
const greet5 = (name, ending) =>  `Good Morning ${name} ${ending}`     // OR, "Good Morning " + name + ending;
console.log(greet5('Agent ', '47'))




// Example 6 :  Using Arrow Function Reference as callback function
var isEven2 = (element) => element % 2 === 0
var result = [2, 4, 6, 8, 9, 10].every(isEven2)                //every() vaneko array ko inbuilt method ho  // yo line ko isEven vanni function chai yo line ma as a callback function ko rup ma use vai rako cha
console.log(result)


// Example 7 : Arrow Function callbacks (Most important for Javascript Framework & Library)
var result = [2, 4, 6, 8, 9, 10].every((element) => {
    return element % 2 === 0
});
console.log(result)



// Example 8 : Single liner Arrow Function Callback
var result = [2, 4, 6, 8, 10].every((element) => element % 2 === 0 )
console.log(result)




// Example 9 : Example of Anonymous function with arrow function

// // Normal Function
// document.addEventListener('click', function(e) {
//     console.log('Button is clicked')
//     console.log(e)
// })

// Anonymous function(having no name) with arrow function
document.addEventListener('click', (e) => console.log('Button is clicked'))




