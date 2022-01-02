// About proto in js object


// // Example 1 : 
// yo talako User chai auta constructor function ho.
var User = function (firstName, courseCount)           
{
    this.firstName = firstName;                         // here, this keywrod points to the current object.
    this.courseCount = courseCount;

    this.getCourseCount = function () {                 // getCourseCount chai auta method ho
        return `Course count is : ${this.courseCount}`
    }

};

// Using prototype to add method inside the __proto__ of object.
User.prototype.getFirstName = function () {
    console.log(`Your Firstname is : ${this.firstName}`)
}




var hitman = new User("Agent 47", 2)            // creating new user object by calling User function(since we are using new keyword it's not a regular function call) using new keyword.
console.log(hitman.getCourseCount())            // object ko method lai call garne tarika.

if (hitman.hasOwnProperty('firstName')){
    hitman.getFirstName()
}
console.log(hitman)





var hulk = new User("Hulk", 3)
console.log(hulk.getCourseCount())

if (hulk.hasOwnProperty('firstName')){
    hulk.getFirstName()
}
console.log(hulk)





// Example 2 : 

function Employee(name, salary, experience)                     // Creating an Employee constructor function.
{
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Creating Employee prototype (Slogan)
Employee.prototype.slogan = function ()                         // Employee ko prototype ma slogan vanni function add garko.... yesari pani add garna sakincha
{
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let employee1 = new Employee("Agent", 20000, 3);
console.log(employee1)
console.log(employee1.slogan())




function Programmer(name, salary, experience, language)         // Programmer Constructor function ho.
{
    Employee.call(this, name, salary, experience);      //calling employee constructor
    this.language = language;
}

// Inheriting the prototype from Employee to  the Programmer
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the prototype constructor of programmer
Programmer.prototype.constructor = Programmer;


let programmer1 = new Programmer("Rohan", 10000, 1, "Javascript");
console.log(programmer1);
console.log(programmer1.slogan())


























