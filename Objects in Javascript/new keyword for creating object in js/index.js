// Creating a javascript object(instance) through functional way using new keyword.


// Example 1 : 
// yo talako User chai auta function ho .. when we call this function with new keyword then this function will act as like constructor function.
var User = function (firstName, courseCount)            // User vaneko auta function ho having firstName & courseCount as parameters.
{
    this.firstName = firstName;                         // here, this keywrod points to the current object.
    this.courseCount = courseCount;

    this.getCourseCount = function () {                 // getCourseCount chai auta method ho
        return `Course count is : ${this.courseCount}`
    }

};

console.log(typeof User)                        // User chai khas ma k ho vanera yesari herna sakincha..

var hitman = new User("Agent 47", 2)            // creating new user object by calling User function(since we are using new keyword it's not a regular function call) using new keyword.

// console.log(hitman)                             // full object lai yesari herna sakincha

console.log(hitman.firstName)
console.log(hitman.getCourseCount())            // object ko method lai call garne tarika.
















