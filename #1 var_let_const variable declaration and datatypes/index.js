// A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.

// Which javascript variable declaration keyword to use on what situation ?


// Var or let or const ???


// Few thing to know :

// 1) Function scope variable:      ==> created using  'var'  keyword
//      ==> yesto khalko variable jasko scope kunai function vitra matra huncha vani testo lai function scope variable...


//  2) Block Scope Variable:        ==> created using  'let' keyword
//          ==> yesto khalko variable jasko scope kunai block vitra matra huncha vani testo lai block scope variable  ...








// Examples of var keyword declared variable        ==> both function scope and block scope matra huncha .... yedi function ma chaina block ma cha vani , testo bela var keyword declared variable ko scope global huncha

// Example 1 : 
function dhiraj()
{
    var name = 'Dhiraj'
    console.log(name)           // function vitra chai yo name vanni variable chincha .. because name vanni variable var keyword le banayeko ho so yesko scope function vitra matra huncha
}

dhiraj()

console.log(name)               // yaha bahira name lai access garna sakidaina.. becuase name varibale has only scope to inside of the function not outside of the function


// Example 2:
// since yaha variable chai var keyword le declared gareko cha but yaha kunai function chaina.. so yeti bela yo variable ko scope chai kaha kaha huncha ? => yeso bela yo variable ko socpe global huncha. i.e globally access garna milcha

if(true)            // yo tw auta block ho .. ani var keyword batw declare gareko variable ko yo scenario ma global scope huncha
{
    var name = 'Dhiraj'
    console.log(name)       // global scope cha so jaha batw pani name lai access garna sakincha
}

console.log(name)           // global scope cha so jaha batw pani name lai access garna sakincha


// Example 3:
// var variable is completely redefinable

if(true)            
{
    var name = 'Ram'
    console.log(name)     
    
    name = 'Shyam'          // var variable lai feri yesari redefine garna sakincha
    console.log(name)
}

name = 'Shyam'          // var variable lai feri yesari redefine garna sakincha
console.log(name)           









// Examples of let keyword declared variable        ==> let declared variable is block scope variable ... function vitra pani block nai ho so access garna sakincha... but function bahira chia access garna sakidaina

// Example 1:
function dhiraj()           // function pani ek kisim ko block nai ho... 
{
    let name = 'Dhiraj'
    console.log(name)           
}
dhiraj()


// Example 2 : 
// let variable is also redifineable but only inside block 

if(true)            
{
    let name = 'Ram'
    console.log(name)   
    
    name = 'Shyam'
    console.log(name)    
     
}





// Example 3 :  even though name is declared both in funciton and if block.. but since variable name is declared using let keyword we can not access it outside function & blocks

function dhiraj()           
{
    let name = 'Dhiraj'
    console.log(name)           
}
dhiraj()

if(true)            
{
    let name = 'Ram'
    console.log(name)       
}

console.log(name)       




// Examples of const keyword declared variable      ==> let & const or constant variable are exatly same , except, Variables defined with const cannot be Redeclared or cannot be changed through re-assignment.

// Example 1 :
if(true)            
{
    const name = 'Ram'
    console.log(name)    

    // name = 'Shyam'                  // constant khalko variable lai yesari redefine garna mildaina error aaucha
    // console.log(name)               // error aaucha
}
 


// Example 2 : const variable actually allows us to change the value of properties in it

const constantvariable = {name: 'Ram'}

constantvariable.name = 'Shyam'
console.log(constantvariable)



