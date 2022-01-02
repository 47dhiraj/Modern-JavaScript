// Classes, constructor, object and inheritance of classes



// Example 1 :  

class User                                                      // Class in javascript yesari banaincha
{

    constructor(name, email)                                    // constructor of class User  // constructor is the method which runs as soon as any object is created.
    {
        this.name = name
        this.email = email
    }


    courseList = [];                                            // courseList, User class property ho 
 

    getInfo()                                                   // getInfo() vaneko auta method ho
    {
        return {name: this.name, email: this.email}            // object return gareko
    }

    enrollCourse(name)                                          // enrollCourse() vaneko auta method ho
    {
        this.courseList.push(name)
    }

    getCourseList()                                             // getCourseList() vaneko auta method ho
    {
        return this.courseList
    }

};


// Creating one object (i.e hitman)
const hitman = new User("Agent 47", "hitman47@gmail.com")

let info1 = hitman.getInfo()                            // hitman object ko getInfo() vanni method lai call gareko
console.log('name :',info1.name)                        // object ko key ko help batw value access gareko
console.log('email :',info1.email)                      // object ko key ko help batw value access gareko

hitman.enrollCourse("Javascript Course")                // course ma enroll gareko
hitman.enrollCourse("React Course")                     // course ma enroll gareko


// console.log(hitman.courseList)                       // direct yesari property nai bahira access garnu ramro haina
// console.log(hitman.getCourseList())                  // hitman object ko getCourseList() vanni method lai call gareko 

let hitman_courses = hitman.getCourseList()             // yesari array lai forEach loop lagayera acutal value matra display garauna sakincha
hitman_courses.forEach((course, index) => {
    console.log(index+1, course)
})



//Creating another object (i.e python_hitman)
const python_hitman = new User("Pyton 47", "python@gmail.com")

let info2 = python_hitman.getInfo()                             // python_hitman object ko getInfo() vanni method lai call gareko
console.log('name :',info2.name)                                // object ko key ko help batw value access gareko
console.log('email :',info2.email)                              // object ko key ko help batw value access gareko

python_hitman.enrollCourse("Python Course")             // course ma enroll gareko
python_hitman.enrollCourse("Django Course")             // course ma enroll gareko


// console.log(python_hitman.courseList)                // direct yesari property nai bahira access garnu ramro haina
// console.log(python_hitman.getCourseList())           // python_hitman object ko getCourseList() vanni method lai call gareko 
let python_courses = python_hitman.getCourseList()      // yesari array lai forEach loop lagayera acutal value matra display garauna sakincha
python_courses.forEach((course, index) => {
    console.log(index+1, course)
})



// console.log(User.courseList)                            // courseList User class ko property vaye pani, yesari direact class batw property access garda value aayeko chaina kina vani hamile value halda this.courseList.push() garera haleka chau (i.e particular object vitra value haleko chau so particular object ko help batw matra value lai access garna sakincha)






