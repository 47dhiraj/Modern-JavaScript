// Function vitra function lai callback vanincha.



// With using Callback() only
// Pretend that this response is coming from the server
$( document ).ready(function() 
{
    
    const students = [
        {name: "Agent 47", subject: "JavaScript"},
        {name: "Hitman", subject: "Machine Learning"}
    ]


    function enrollStudent(student, callback)                       //enrollSutdent() vanni function ho jasle parameter ma auta object & arko callback function lai lincha 
    {
            students.push(student);

            console.log("Student has been enrolled successfully");

            callback();  
                
    }

    function getStudents()
    {
        
            let str = "";
            students.forEach(function(student)              
            {
                str += `<li> ${student.name} is enrolled to ${student.subject}.</li>`   
            });

            document.getElementById('students').innerHTML = str;
            console.log("Students have been fetched");
      
    
    }


    let newStudent = {name:"Corey", subject:"Python"}           // newStudent vanni auta javascript object banako
    enrollStudent(newStudent, getStudents);             // yo line ko getStudents chai auta callback function ho because yo chai enrollstudent() vanni function ma as a parameter ko rup ma pass vai rako cha

});







// Using Callback() and SetTimeout()
// Pretend that this response is coming from the server
const students = [
    {name: "Agent 47", subject: "JavaScript"},
    {name: "Hitman", subject: "Machine Learning"}
]


function enrollStudent(student, callback)       //enrollSutdent() vanni function ho jasle parameter ma aua json object & arko callback function lai lincha 
{
    setTimeout(function()                       // yo setTimeout() vanni javascript ko inbuilt function certain seconds of time pachi background ma asynchronously run huncha.
    {
        students.push(student);

        console.log("Student has been enrolled successfully");

        callback();                             // callback() le getStudents() lai call garcha // jaba samma enrollStudent() vanni method run vayera aafno kaam sakdaina taba samma yo callback() function kunai halat ma run hudaina (i.e callback function ko setTimeout yo enrollStudent method ko setTimeout vanda less vayeta pani kunai baal matlab chaina... pahila enrollStudent() ko kaam sakinai parcha) 

    }, 2000);    
    
    console.log('Wait, new student is being enrolled .....')
}



function getStudents()
{

    setTimeout(function() 
    {
        let str = "";
        students.forEach(function(student)              
        {
            str += `<li> ${student.name} is enrolled to ${student.subject}.</li>`
        });

        document.getElementById('students').innerHTML = str;

        console.log("Students have been fetched");

    }, 1000);

}


let newStudent = {name:"Corey", subject:"Python"}           // newStudent vanni auta javascript object banako

enrollStudent(newStudent, getStudents);                     // yo line ko getStudents chai auta callback function ho because yo chai enrollstudent() vanni function ma as a parameter ko rup ma pass vai rako cha
















