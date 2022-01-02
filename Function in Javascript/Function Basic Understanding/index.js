// Note : JavaScript ma suru ma function call garera pachi function define gareko cha vani pani majale execute huncha function ( but aru programming langugae ma yesto garyo vani error aaucha )

// 1st way Syntax for creating javascript void function
// function functionname(parameter)
// {
//     // your logical code
// }


// 2nd way Syntax(using functions in variable) for creating javascript function & calling it
// const functionname = function()
//                     {
//                         // your logical code
//                     }
// functionname()               // function call garda parenthesis rakhne garincha






// Yo talako sabbai example 1st way syntax batw matrai gareko cha


// Example 1 : Most simple way of defining and calling a javscript void function
sayHello("Agent 47")                        // Calling the function at first

function sayHello(name)                     // function definition part
{
    console.log(`Hi, ${name}. How are you ?.`)
}




// Example 2 : Javascript fruitful function (function which returns something)
function namastey(name)
{
    return `Namastey ${name}! Tapai lai nepal ma swagat cha.`
}

var greetings = namastey("Agent 47")
console.log(greetings)
console.log(namastey("Agent 47"))



// Example 3 : calling the function inside javascript object
const myobj = {
    name: "Agent 47",
    game: function()
    {
        return "GTA";
    }
}
console.log(myobj.game())




// Example 4 : example of inbuilt function (i.e forEach() vanni array ko loop ko lagi inbuilt method ho)
arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) 
{
    console.log(index, element)
});    






