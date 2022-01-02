// About Ternary operator

// Note : Ternary operator is mostly used to replace the traditional way of writing if else in javascript

// ternary operator symbol  ?  ho

// syntax of using ternary operator
// (condition) ? True condition statement : False condition statement




// Example 1 : basic understanding of ternary operators

let marks = prompt('Enter your marks :');

let result1 = (marks >= 40) ? 'pass' : 'fail';           // check the condition.. True vaye pass, False vaye fail huncha

console.log(`You ${result1} the exam.`);



// Example 2 : 

// Note : we can also do the below code in tradition if else logic .

let age = prompt('Enter your age :');

let result2 = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";

console.log(result2);






// Example 3 : Nested Ternary Operators

// Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.

let num = prompt('Enter any number :');

let result3 = (num >= 0) ? (num == 0 ? "zero" : "positive") : "negative";        // True condition statement lekhni thau ma pani feri ternary condition code cha...

console.log(`The number is ${result3}.`);
