// About in operator in JavaScript


// Example 1 : use of in operator in object for checking if the property exists or not.
const person = {                                    // person chai js object ho
    name: "Agent 47",
    age: 25,
}

console.log(person)


// For checking if the property exists or not
if ("name" in person)                               // person vanni object ma name vanni property cha ki chaina vanera check garna yesto gareko
{
    console.log("Has name property")
}


delete person.name                                  // object ko property nai yesari delete garincha

console.log(person)

if ("name" in person)                               // person vanni object ma name vanni property cha ki chaina vanera check garna yesto gareko
{
    console.log("Has name property")
}
else {
    console.log("Doesn't have name property.")
}







// Example 2 : use of in operator in array for checking if the index exists or not
const array1 = [2, 4, 6, 8]

console.log(array1)

if (3 in array1)                               
{
    console.log('array has index 3')
}
else {
    console.log('array does not have index 3')
}


array1.pop()

console.log(array1)

if (3 in array1)                               
{
    console.log('array has index 3')
}
else {
    console.log('array does not have index 3')
}