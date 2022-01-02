// Here we learn to define Methods in JS Object



// Example 1 : Object literal
var user = {

    firstName: "Agent",
    lastName: "47",
    role: "Admin",
    loginCount: 50,
    facebookSignedIn: true,
    courseList: [],                                 // courseList array ho

    buyCourse: function (courseName) {              // buyCourse chai method ho user object ko
        this.courseList.push(courseName)
    },

    getCourseCount: function () {                   // getCourseCount pani method ho user object ko
        return `${this.firstName} is enrolled in following ${this.courseList.length} courses.`
    },

};


// console.log(user.firstName)

// console.log(user.getCourseCount())               // user object ko getCourseCount vanni method lai call gareko.

user.buyCourse("Modern JS Course")                  // Buying a new course by calling buyCourse() method of user object
user.buyCourse("React JS Course")                   // Buying another new course

console.log(user.getCourseCount())                  // new course ma enroll vai sake pachi count herna ko lagi.


user.courseList.forEach((course, index) => {        // object vitra ko array ma forEach method ko help batw looping gareko
    console.log(index+1, course)
})


console.table(user)












