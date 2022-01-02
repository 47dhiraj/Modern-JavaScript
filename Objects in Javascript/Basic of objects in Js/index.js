// Basic Understanding of Javascript Objects


// // creating an empty js object
// var user = {}                       //This is object literal
// console.log(user)
// console.log(typeof user)

// // Another way of creating empty object
// var user = new Object()          //This is the object constructor
// console.log(user)
// console.log(typeof user)



// Example 1 :  creating user object in object literal way
var user = {
    firstName: "Agent",
    lastName: "47",
    role: "Programmer",
    level: "mid-level",
    salary: 35000
};

// View a complete object
console.log(user)
console.log(typeof user)

// Another nice way to view your object in tabular structure
console.table(user)

// Accessing key value of an object
console.log(user.firstName)

// Alternative way of accessing key of an object
console.log(user['firstName'])


console.log(user.lastName)
console.log(user['lastName'])


// Manipulating or changing the values of an object
user.salary = 40000
console.log(user.salary)


















