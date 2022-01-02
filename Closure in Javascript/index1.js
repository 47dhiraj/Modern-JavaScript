// Closure ko concept React Redux(i.e Javascript state management library) ma use huncha.


// Example 1 :
function init()
{
    console.log("Inside init() method.")

    var firstName = "Agent 47"

    function sayFirstName()
    {
        console.log(firstName)
    }

    return sayFirstName;                        // sayFirstName function ko reference lai return gareko

}

var value = init()                              // init() method chai call huncha, but sayFirstName() method chai execute hudaina because tesko reference return vayera value ma basi rako huncha.
value()                                         // so, value() lai call garnu vaneko, sayFirstName() lai call garnu ho. yesto scenario lai closure vanincha.




// Example 2 :
function doAddition(x)
{
    return function(y)
    {
        return x + y;
    };

}

// var add = doAddition(4)                             // add ma function(y) ko reference bascha
// console.log(add(7))                                 // so add(7) call garnu vaneko, function(7) call garnu jastai ho & finally add gareko result retun huncha.

// Yesari single line ma pani addition garna sakincha
console.log(doAddition(4)(7))                           // Closure ko involvement vayera yesto syntax use garna payeko ho.






