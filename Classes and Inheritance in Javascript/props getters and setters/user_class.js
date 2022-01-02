// About Private props getters and setters in Javascript

// khas jun sukai programming language ko class ma private property haru huncha,, so testo private property haru lai access garna ko lagi getters ko use garincha & testo private property lai set garna ko lagi setters ko use garincha

// setter method, generally expects some parameter and set the value of the private property of the class through parameter's vlaue.
// getter method, generally doesn't expects parameter, rather it returns some value of the private property.

// Note : Best way ==> JS ma private proptery banauna ko lagi, property name ko agadi  #  ko lekhincha.  alternative way ==> variable ko agadi _ (i.e single underscore) pani lekhincha






// Great Example :  
class User                                                      // Class in javascript yesari banaincha
{

    constructor(name, email)                                    // constructor of class User  // constructor is the method which runs as soon as any object is created.
    {
        this.name = name
        this.email = email
    }


    #courseList = [];                                           // Best way ==> JS ma private variable banaunako lagi variable name agadi  #  lekhincha.                                       
    
    // Alternative way:
    // _courseList = [];                                        // Alternative way ==> JS ma private variable banaunako lagi variable name agadi  _  pani lekhincha. 


    getInfo()                                                   
    {
        return {name: this.name, email: this.email}           
    }





    // // Yedi class ko method lai object. garera call garda as a property or variable jasto parenthesis use nagari (i.e object.property ) call garna man cha vani:
    // set enrollCourse(name)                                          // method ko agadi set keyword use gareko
    // {
    //     this.#courseList.push(name)
    //     // this._courseList.push(name)
    // }

    // yo pani ek kisim ko setter nai ho, but without using set keyword
    setenrollCourse(name)                                          // setter method to set or update value of private property                                   
    {
        this.#courseList.push(name)

        // Alternative way :
        // this._courseList.push(name)
    }





    // // Yedi class ko method lai object. garera call garda as a property or variable jasto parenthesis use nagari (i.e object.property ) call garna man cha vani:
    // get CourseList()                                                // method ko agadi get keyword use gareko                        
    // {
    //     return this.#courseList
    //     // return this._courseList
    // }

    // yo pani ek kisim ko getter nai ho, but without using get keyword
    getCourseList()                                             // getter method to get the value of private property                            
    {
        return this.#courseList

        // Alternative way :
        // return this._courseList
    }



};




// Creating object
const hitman = new User("Agent 47", "hitman47@gmail.com")

let info1 = hitman.getInfo()                            // object ko getInfo() vanni method lai call gareko
console.log('name :',info1.name)                        // object ko key ko help batw value access gareko
console.log('email :',info1.email)                      // object ko key ko help batw value access gareko




// // method agadi set keyword lekheko vayera, yesari value set gareko
// hitman.enrollCourse = 'Javascript Course'    
// hitman.enrollCourse = 'React Course'       
                    
// in this way also we can set the value of setter method
hitman.setenrollCourse("Javascript Course")                // course ma enroll gareko
hitman.setenrollCourse("React Course")                     // course ma enroll gareko




// // method agadi get keyword lekheko vayera, yesari value set gareko
// let hitman_courses = hitman.CourseList             // yesari array lai forEach loop lagayera acutal value matra display garauna sakincha
// hitman_courses.forEach((course, index) => {
//     console.log(index+1, course)
// })

// in this way also, we can get value from getter method
let hitman_courses = hitman.getCourseList()             // yesari array lai forEach loop lagayera acutal value matra display garauna sakincha
hitman_courses.forEach((course, index) => {
    console.log(index+1, course)
})





// Not Allowed for private property of the class.
// console.log(hitman.courseList)                          // private variable lai yesari direct bahira batw access garna paudaina (undefined aaucha) .. rather you should use getter method of the User class to get the courselist.

