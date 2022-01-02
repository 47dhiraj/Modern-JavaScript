// Clear understanding of   ==   and   ===   equality operator in Javascript

var stringVariable = "10"
console.log(typeof stringVariable)             // Datatype checking garney tarika
console.log(stringVariable)


var intVariable = 10
console.log(typeof intVariable)                // Datatype checking garney tarika
console.log(intVariable)


var floatVariable = 10.00
console.log(typeof floatVariable)                // floatVariable lai pani number type nai vancha javascript ma
console.log(floatVariable)


// Examples of  ==  operator
console.log(" About == and != operator ")

// Example 1 : basic understanding example of == operator
if(10 == '10')
{
    console.log('10 and "10" are equal for == operator because it auto convert type.')
}


// Example 2 : Example of  ==  operator
if (intVariable == stringVariable)          // yo line ma == operator le kunai auta datatype lai automatice type conversion garcha. so tei vayera equal vani rako huncha.
{
    console.log('== operator clearly says 10 & "10" are equal.')
}


// Example 3 : using negation (!) with == operator (i.e  != ) 
if (intVariable != stringVariable)          
{
    console.log('Unrechable line of code')
}
else
{
    console.log('Even though 10 and "10" are technically not equal but negation of double equals operator(i.e !==)  does not care.')
}


// Example 4 : again example of == operator
if (intVariable == floatVariable)          
{
    console.log('In javascript there is no int or float type.. only number type is there to indicate int and float type. so they are equal for == operator')
}






// Examples of   ===   operators
console.log(" About ===  and !== operator")


// Example 1 : basic understanding example of === operator
if(10 === '10')
{
    console.log('Actually this line is unrechable code')
}
else
{
    console.log('10 and "10" are never equal for === operator because it never auto convert data types rather it checks both value and data type of the variable.')
}

// Example 2 : Example of  ===  operator
if (stringVariable === intVariable)          // yo line ma == operator le kunai auta datatype lai automatice type conversion garcha. so tei vayera equal vani rako huncha.
{
    console.log('Actually this line is unrechable code')
}
else
{
    console.log('=== operator clearly says 10 & "10" are never equal.')
}


// Example 3 : using negation (!) with === operator (i.e  !== ) 
if (intVariable !== stringVariable)          
{
    console.log('10 and "10" are technically not equal , so we can say !== care about datatypes.')
}
else
{
    console.log('Unrechable line of code')
}


// Example 4 : again example of == operator
if (intVariable === floatVariable)          
{
    console.log('In javascript there is no int or float type.. only number type is there to indicate int and float type.so they are equal for === operator')
}