// yedi Javascript code browser ma run vai rako cha vani teti bela global context vannale window lai bujincha (i.e window.variable )

// tara tei same Javascript code lai nodeJs local server le run gareko vaye teti bela global context window hudaina.



// Example 1 :
var name = 'Agent 47'

if(name === name)                // simple tarikale pani garna sakinthyo  
{
    console.log('True statement')
}

if(name === window.name)            // window.name le globally name variable lai use gari rako cha
{
    console.log('Also True statement using global context.')
}



// Example 2 : suru ma function call gare pani error na aaunu ko karan vaneko .. javascript code ma vayeko sabbai function lai window vanni global context ma wrap garera rakhiyeko huncha... so hamile suru mai function call garda window context ma check garcha and tyo function lai vetcha.

sayHello("Agent 47")                        // Calling the function at first

window.sayHello("Agent 47")                 // we can also call the function using window. global context


function sayHello(name)                     // function definition part
{
    console.log(`Hi, ${name}. How are you ?.`)
}


















