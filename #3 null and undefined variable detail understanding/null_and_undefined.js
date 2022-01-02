// Note : Both null and undefined means the variable doesn't have value.

// Generally undefined yesto bela aaucha jati bela timle kunai variable lai declare tw garyau but tesma value ahile samma initialize or define vako chaina... yesto case ma tyo variable ko value undefined aaucha.



// Example of undefined :
let a
console.log(a)

if (a === undefined)
{   
    console.log('value of a is undefined. so setting the value of a to 47.')
    a = 47
    console.log(a)
}
else
{
    console.log(a)
}




// Example of null :
var saveButton = document.getElementById("save");               // yesto Id hamro HTML dom ma chadai chaina so tei vayera vetdaina... so null return huncha and saveButton vanni variable ma gayera bascha .
console.log(saveButton)

if (saveButton === null)                                        // kunai varibale ko value null cha ki nai vanera check garni tarika
    alert('Save button does not exists.')












