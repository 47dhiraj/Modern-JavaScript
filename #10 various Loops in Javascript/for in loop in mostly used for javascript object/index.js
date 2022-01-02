
// Most Important Object properties in Javascript
// 1. Object.keys(object)   =>  The Object.keys() method will return an array of keys. If you put this in a variable and put it in a console.log() you will see an array of the keys.
// 2. Object.entries(object)  => Object. entries() returns an array of key-value pairs found inside object


let obj= {
    name: "Agent 47",
    language: {                             // yo language vanni chai yaha nested json ho
        "language1":"Python",
        "language2":"Javascript",
        "language3":"Java"
        },
    hobbies: "ML and DL"
}


// JSON object ko keys & value lai sajillai access garna ko lagi yo talako syntax imp cha
console.log(obj);                       // yo obj vanni object ko key and value both dekhaucha as a key value pair format

console.log(obj.name);                  // obj vanni object ko name vanni key ma vayeko sabbai values lai display garcha

console.log(obj.language);              // obj vanni object ko language vanni key ma vayeko sabbai values lai display garcha... yedi value chai again auta json object ho vani tyo purai json object nai display garcha  

console.log(obj.hobbies);               // obj vanni object ko hobbies vanni key ma vayeko sabbai values lai display garcha

console.log(Object.keys(obj));          // yo obj vanni object ko keys haru matra dekhaucha

console.log(Object.values(obj));        // yo obj vanni object ko values haru dekhaucha

console.log(Object.keys(obj).length);   // yo obj vanni object ma jati ota major keys cha tesko length or number dekhaucha



// 1.1 Iterating an object using Traditional for loop:

for (let index = 0; index < Object.keys(obj).length; index++) 
{
    const element = obj[Object.keys(obj)[index]];           // obj[Object.keys(obj)[index]]  vannale yo obj vanni object ko keys haru ko indexing ho i.e obj object ko key haru lai palai palo access garna ko lagi indexing yesari dincha
    console.log(element);   

    console.log(Object.values(element));                 // yedi mathi element ko rupma aayeko value ma json object ko format huncha sakcha(i.e nested json ko cas huna sakcha)  so, tesko pani values haru tanna paryo vani yesari tanna sakincha
}






// **********For in loop*******     :: NOTE ==> For in loop iterates over all  keys of an object, index position of an array or string

// 1.2 Iterating an object using for-in loop:
for (let key in obj)
{
    console.log(key)             // yedi object ko keys haru matra chaiyeko cha vani yesari yessari garna sakincha
    
    const val = obj[key]         // yedi object ko value, object ko actual string key ko indexing garera chaiyeko cha vani yesto garna sakincha  =>  obj[key]
    console.log(val)
   
}



for (key in obj.language)              // yaha language cha nested json object ho... but major object ko lagi chai auta key ho // JSON nested object cha vani yesari for in loop lagauna sakincha yedi tmlai tyo nested json ko key name tha cha vani
{   
    var x = ""

    // console.log(key)

    x += obj.language[key];
    console.log(x)
}




//  Most Important Concept : Yedi tmlai keys and value simultaneously chaiyeko cha vani yesto pani garna sakchau
for (let key in obj) 
{
    console.log(key, obj[key]);
}




// Important Concept
for (let key in obj)                  // Yedi tmlai nested json object haru ko all values haru chaiyeko cha vani yesari access garna sakincha...
{    
    if (key == "language")            // Yedi tmlai nested json object ko name or key name tha cha vani yesari value nikalna sakincha
    {
        for (key in obj.language)               
        {   
            console.log(obj.language[key])

            // var x = ""
            // x += obj.language[key];
            // console.log(x)
        }

    }
    else                              // yo else le chai only for major json object ko lagi kaam garcha
    {
        console.log(obj[key]); 
    }
    
}





// 1.3 Iterating a string using for-in loop:
// We can use for in loop with strings to loop through all the characters (even space is also count as a character)

myString = "This is my string";

for (let char in myString)
{
    console.log(myString[char]);
}