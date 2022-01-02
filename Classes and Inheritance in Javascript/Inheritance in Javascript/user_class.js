// Inheritance in Javascript

// auta class le arko class ko constructor, property and methods haru lai inherit garna sakcha...


// Example 1 :  

class User                                                      // Here, User is parent class.                                               
{

    constructor(name, email)                                    // constructor of class User  // constructor is the method which runs as soon as any object is created.
    {
        this.name = name
        this.email = email
    }


    #courseList = [];                                            // courseList auta private proptery ho
 

    getInfo()                                                   // getInfo() vaneko auta method ho
    {
        return {name: this.name, email: this.email}            
    }


    enrollCourse(name)                                          // static method of parent class cannot be inherited by child class.  // enrollCourse() vaneko auta method ho
    {
        this.#courseList.push(name)
    }


    getCourseList()                                             // static method of parent class cannot be inherited by child class. // getCourseList() vaneko auta method ho
    {
        return this.#courseList
    }


    static login()                                              // static method can also be calling creating object i.e just by using class name.
    {
        return "Inside login method of User (Parent) class."
    }


};



// Creating child or sub class.
class SubAdmin extends User                             // extends keyword use garera child class le parent or super class ko features lai inherit garna sakcha.
{
    constructor(name, email)
    {
        super(name, email)                              // super keyword is used to access properties and call functions & constructions on parent class.     // code resulablity ma dherai helo garcha. 
        
        // Alternative code (dherai line lekhna parcha)
        // super()
        // this.name = name
        // this.email = email
    }


    getAdminInfo()
    {
        return "I am sub-Admin."
    }

    login()                                             // Method Overriding ==> yo login() method le parent class ko login() method lai override garcha. This is called method overriding.
    {
        return "Inside login method of SubAdmin (Child) class."
    }

};



// Creating  object of parent class i.e User
const hitman = new User("Agent 47", "hitman47@gmail.com")
console.log(hitman)
console.log(User.login())

let info1 = hitman.getInfo()                           
console.log('name :',info1.name)                        
console.log('email :',info1.email)                      

hitman.enrollCourse("Javascript Course")             
hitman.enrollCourse("React Course")                     


let hitman_courses = hitman.getCourseList()           
hitman_courses.forEach((course, index) => {
    console.log(index+1, course)
})



//creating object of child class i.e SubAdmin
const subadmin1 = new SubAdmin("Hulk", "hulk@gmail.com")
console.log(subadmin1)
console.log(subadmin1.getAdminInfo())
console.log(subadmin1.getInfo())
console.log(subadmin1.login())










// Example 2 :

class Employee                                                  // Employee is parent class.
{
    constructor(givenName, givenExperience, givenDivision)      // Constructor 
    {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan()                                                    // method
    {
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear()                                               // method
    {
        return 2021 - this.experience;
    }

    static add(a, b)                                            //static method can be called without creating an object
    {
        return a + b;
    }

};



class Programmer extends Employee                                           // Programmer is child class inheriting from Employee class. 
{
    constructor(givenName, givenExperience, givenDivision, language, github) //programmer class ko constructor
    {
        super(givenName, givenExperience, givenDivision);                   // parent class ko constructor lai call gareko using super() keyword.
        this.language = language;
        this.github = github;
    }

    favouriteLanguage()
    {
        if (this.language === 'Python')
        {
            return 'Python';
        }
        else
        {
            return 'JavaScript';
        }
    }

    static multiply(a, b)
    {
        return a * b;
    }
};



// Creating objec of Parent class
hitman_employee = new Employee("Hitman", 5, "Secret Division");             // creating Employee object
console.log(hitman_employee)
console.log(hitman_employee.slogan())
console.log('Company Joining Year', hitman_employee.joiningYear());
console.log('Addition Result:', Employee.add(4, 7))                         // calling static method without creating object, just using class name 



// Creating object of child class
dhiraj = new Programmer("Agent 47", 3, "Mid Level", "Python", "47dhiraj")
console.log(dhiraj)

console.log(dhiraj.slogan())
console.log('Company Joining Year:', dhiraj.joiningYear());

console.log('Favourite Language:', dhiraj.favouriteLanguage())
console.log('Multiplication Result:',Programmer.multiply(4, 7));         //calling static method by using Class name i.e without creating object