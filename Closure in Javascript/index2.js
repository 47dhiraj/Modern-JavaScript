// About Closures in Javascript

// Closure is, when you have a function defined inside of another function, that inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function.



// Example 1 :
function outerFunction(outerVariable) {
    const outer_name = 'Agent 47'

    return function innerFunction(innerVariable)            // innerFunction() ko reference lai return gareko ho.
    {
        console.log('Outer Variable:', outerVariable)
        console.log('Inner Variable:', innerVariable)

        console.log(outer_name)                             // outer function variable lai innerfunction le sajilai access garna paucha javascript ma

    }

}

// const newFunction = outerFunction('Outside')                // newFunction ma innerFunction ko reference return vayera baseko huncha.
// newFunction('Inside')                               // newFunction() call garnu vaneko innerFunction() call garnu ho. yesto scenario lai closure vanincha (i.e function vitra function)


// Best Alternative way (single liner) : 
outerFunction('Outside')('Inside')





