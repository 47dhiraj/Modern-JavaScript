// Two rules to remember in Execution & Global Context

// 1st ) Function declarations are scanned and are made available.
// 2nd ) Variable declarations are scanned and are made undefined (i.e function in variable ma rakhyau vani, timile tyo function lai sajilai access garna paudaina,, rather you need to use )


// Example 1 : No problem of calling function before function declaration (rule number 1st)
tipper("60")

function tipper(number)
{
    var bill = parseInt(number)
    console.log('Total Payment from Tipper : ',bill + 5)
}




// Example 2 : Problem occurs when calling variable function before function definition(declaration) (the reason for this problem is rule number 2nd)
// bigTipper("100")                                 // yesari surumai variable function lai call garda problem aaucha
// window.bigTipper("100")                          // yesari global context use gare pani mildaina, error nai aaucha

var bigTipper = function (number)                   // function in a variable (i.e variable function)
{
    var bill = parseInt(number)
    console.log('Total Payment from Big Tipper : ', bill + 10)
}

bigTipper("100")        




// Example 3 : For showing how variable actually works in rule number 2nd
console.log(name)                                   // kunai js ko framework ko terminal ma use garyo vani undefined dincha, but browser ma use garyo ni global context ma vayeko name dincha hola
console.log(window.name)                            // kunai js ko framework ko terminal ma use garyo vani undefined nai dincha, but browser ma use garyo ni global context ma vayeko name dincha hola

var name = 'Agent 47'                               // yo name vanni variable chai global context ho


function sayName()
{
    var name = 'Hitman'                             // function vitra vako variable declaration chai execution context variable ho (execution context variable lai just tyo function or block vitra execution huda matra chincha, bahira chindaina)
    console.log(name)
}
sayName()


console.log(name)                                   // function bahira ko name variable chai global context variable ho
















