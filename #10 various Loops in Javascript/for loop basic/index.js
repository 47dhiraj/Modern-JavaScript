// Understanding For loop loops in javascript

// Example 1:
for(let i=0; i<100;i++)
{
    console.log(i);
}


// Example 2 :
let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) 
{
    const element = arr[i];
    console.log(element)
}


// Example 3 :
let array1 = [1, 2, 3, 4, 'agent', 47, 'hitman']

for (let i = 0; i < array1.length; i++) 
{


    // // Condition only for accessing numbers from array
    // if (typeof array1[i] !== "number") 
    // {
    //     // break        // yedi string aaune bittikai for loop batw bahira niskina cha vani yo logic use garna sakincha
    //     continue        // yedi string aayo vani yo string lai ignore garera nest array index lai check garna cha vani continue ko use garincha
    // }
    // const element = array1[i]
    // console.log(element)



    // Conditional logic only for accessing string values from array
    if (typeof array1[i] !== "string") 
    {
        // break        // yedi number aaune bittikai for loop batw bahira niskina cha vani yo logic use garna sakincha
        continue        // yedi number aayo vani yo tyo number lai ignore garera nest array index lai check garna cha vani continue ko use garincha
    }
    const element = array1[i]
    console.log(element)



    // continue             // for loop vitra last line ma continue lekhnu ko khasai matlab hudaina... nalekhe jhai ho   
}







