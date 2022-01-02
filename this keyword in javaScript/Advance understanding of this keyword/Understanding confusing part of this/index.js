// Important Rule : For all Regular function call, this points or refers to window object.


// Example 1 : javascript object 
var user = 
{
    firstName: "Agent 47",
    courseCount: 4,

    getCourseCount: function() 
    {                                                                   // getCourseCount is not a regular function.
        console.log('Inside getCourseCount property :', this);          // Here this keyword, inside not a regular function does not refers to the window object, rather it refers to this particular object.
        
        function sayHello() {                                           // sayHello is a regular function.
            console.log('inside sayHello:', this)                       // this keyword inside regular function refers to the window object.
        }
        sayHello()                                                      // regular function call gareko ho yo.
    },

};

user.getCourseCount();                                                  // yesari object ko through function call gareko cha, so yo function vitra ko this points to the object.



















