// In world of JavaScript, { } (i.e curly braces) vitra ko kura lai scope vanincha (i.e local scope)... and gloabl scope vannale ==> cruly braces vanda bahira ko duniya (i.e function or if else vanda bahira ko kura)

// About Global Scope & Local Scope 
// Local Scope variable can acesss the value from the global scope varibale, if the variable name in both scope are same... but global scope variable cannot access value from the local scope variable.


// // Example 1 : Local scope variable accessing value from global scope variable
// var name = 'Agent 47'


// function sayName()                  
// {
//     console.log('Inside function sayName:',name)       // ahile lai yo name local variable vaye pani gloabl variable ko value access garcha  // yo name vannale, yedi function vitra local scope variable name declare cha vani tei local name ko value use garcha but yedi chaina vani global name ko value use garcha.
// }
// sayName()


// console.log('Outside Function sayName:',name)




// // Example 2 : Local scope variable using it's own value (i.e not using gloabl scope variable value)
// var name = 'Agent 47'

// function sayName()                  
// {
//     var name = 'Hitman'                                   // local scope variable banaune ho vane, yesari var keyword le variable declare garera new value rakhera garna parcha
//     console.log('Inside function sayName:',name)          // yo name vannale, yedi function vitra local scope variable name cha vani tei local name ko value use garcha but yedi chaina vani global name ko value use garcha.
// }
// sayName()

// console.log('Outside Function sayName:',name)




// Example 3 :  Actual example of Scope Chaining
var name = 'Agent 47'
console.log('Global Scope variable value:',name)


function sayName()                  
{
    // var name = 'Hitman'                                    // local scope variable banaune ho vane, yesari var keyword le variable declare garera new value rakhera garna parcha
    console.log('Inside local function sayName:',name)        // yo name vannale, yedi function vitra local scope variable name declare cha vani tei local name ko value use garcha but yedi chaina vani global name ko value use garcha.


    sayName2()                                                // yedi function keyword use garera function define gareko cha vani, function define vanda mathi nai function call garna paincha,,, but yedi variable function tarikale function define gareko cha vani, function vanda mathi call garna paudaina  
    function sayName2()
    {
        // var name = '47'                                    // yedi inner local scope function ma variable declare cha vani, tei inner scope variable ko value use garcha,, but yedi chaina vani just mathi ko local scope variable ko value use garcha,, but yedi mathiko local ma pani value declare chaina vani global scope variable ko value use garcha
        console.log('Inside inner local function sayName2:',name)
    }

}

sayName()





