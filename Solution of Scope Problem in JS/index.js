// var, let, const ko clear scope understanding

// When to use var keyword for declaring variable
// => front end ko programming garnu cha vani var keyword ko use garda pani huncha because code ma kei problem vaye pani front end ko problem lai neglect gardai program run vayeko ramro ho, tei vayera var keyword variable ma problem or undefined aaye pani program run huncha.

// When to use let keyword for declaring variable
// => yedi backend or sensitive place ma programming garnu cha vani let keyword ko use garni gara because backend programming is always the most sensitive place to code so let batw banayeko variable le undefined haina error nai falne garcha. so hamilai program execution garne time ma exact error tha huncha. so surumai error tha vako ramro ho.





// Use of var keyword ::

// Example 1 of using var keyword :
console.log(name)                               // variable lai initialization nagardai variable ko value yesari access garda undefined aaunu or even value automatic access hunu front end programming ma chai ramrai ho.
var name = 'Agent 47'


// Example 2 of using var keywrod :
if(true)
{
    var lastName = '47'
}
console.log(lastName)                           // local scope vanda ba  hira yo variable use garna napauna parni ho but pai rako cha, front end ma tw khasai problem na hola.

// Example 3 of using var keyword:
for (var i = 0; i < 10; i++)    
{
    console.log(i)
}
console.log(i)                                  // i ko value increment vayera 10 vai rako huncha.. which is never good .. programmer lai yesto increment vako tha nai hudaina. // since using var keywrod for variable initialization, we can also access that variable outside for loop, which might be good for front end programming but it is never good for backend programming.





// Use of let keyword ::

// Example 1 of using let keyword :
// console.log(name2)                          // Backend programming garda kheri variable lai declare and initialization nagardai value access garna khojda error aaunu chai ramro ho, so tei vayera error aaos vanna ko lagi let keyword ko use garincha.
let name2 = 'Agent 47'


// Example 2 of using let keyword :
if(true)
{
    let lastName = '47'
}
// console.log(lastName)                       // local scope vanda bahira variable lai use garna khojda kheri error aauna parcha backend programming ma. so tei vayera let keyword ko use gareko ramro ho.


// Example 3 of using let keyword:
for (let i = 0; i < 10; i++)                   // Javascript le provide garne for loop ma default variable pani let ko huncha, var ko variable hudaina.   
{
    console.log(i)
}
// console.log(i)                              // since using let keywrod for variable initialization, we cannnot access that variable outside for loop thus gives the error.














