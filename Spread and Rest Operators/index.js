// About Spread and Rest Operator in Javascript

// Note : triple dots (i.e ...) followed by variable is spread operator or rest operator (for eg: ...variablename, ...args)

// Herda or syntax of spread or rest operator same huncha... just teslai use garne scenario and aaune output farak huncha.



// Spread Operator ==> speard operator actually usues array or object and upack the values in it.
// spread operator is used to unpack the values from array or object.

// Example 1 :
function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA));                 // Here in this scenario,  ...myA chai spread operator ho because ...myA  le chai myA array ko values lai unpack garcha.





// // Rest Operator ==> rest operator actually helps to convert individual values into array or object.
// // rest operator is used for packing of the values into single object or array.

// Example 2 :  Rest operator ko example
function sumAny(...args)                       // Here in this scenario,   ...args chai rest operator ho because it convert the argument values into an array.
{
    // console.log(args)
    // console.log(typeof args)

    let sum = 0
    for (const arg of args)                     // looping the array.
    {
        sum += arg
    }

    return sum;
}

console.log(sumAny(9, 8, 7, 6, 4, 5, 3, 2, 1))




// Example 3 : Advance use of rest operator
function sumAny(a, b, ...args)                       // Here in this scenario,   ...args chai rest operator ho because it convert the argument values into an array.
{
    console.log(`args parameter values: ${args}`)

    let multi = a * b;

    let sum = 0
    for (const arg of args)                     // looping the array.
    {
        sum += arg
    }

    return [multi, sum];
}

console.log(sumAny(9, 8, 7, 6, 4, 5, 3, 2, 1))

