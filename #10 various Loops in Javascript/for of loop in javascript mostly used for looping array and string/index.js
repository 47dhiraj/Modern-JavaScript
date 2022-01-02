// Generally for of loop is used for looping arrays and string characters


// // Example 1 : Iterating through an array in Javascript using for of loop
mix_array = ["Ram", "Shyam", "Agent", "47", "Hitman"];
// console.log(mix_array)         // yedi actual array ko whole content herna cha vani yesari herna sakincha

for(let value of mix_array)         // yo line ko name ma chai array ko exact values haru aaucha
{
    console.log(value);
}




// // Example 2 : Iterating through an string in Javascript using for of loop
myString = "This is my string";
// console.log(myString)

for(let name of myString)           // yo line ko name ma chai string ma vayeko exact characters haru aaucha
{
    console.log(name);
}





// Most Important Object properties in Javascript
// 1. Object.keys(object)   =>  The Object.keys() method will return an array of keys. If you put this in a variable and put it in a console.log() you will see an array of the keys.
// 2. Object.entries(object)  => Object. entries() returns an array of key-value pairs found inside object


// Example 3 : we can also, iterate an object using for of loop (object lai loop garna ko lagi for of loop use gareko ramro chai manidaina):
let obj= {
    name: "Agent 47",
    language: {                             // yo language vanni chai yaha nested json ho
        "language1":"Python",
        "language2":"Javascript",
        "language3":"Java"
        },
    hobbies: "ML and DL"
}


//if you need both keys and values simultaneously using for of loop, then do the following:
for (let [key, value] of Object.entries(obj))               // Object.entries(objectname)  returns key value  pairs found in the object
{
    console.log(key, value);
}