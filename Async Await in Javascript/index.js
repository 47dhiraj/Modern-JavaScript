// About Async Await in Javascript

// Promises ko problem lai solve garna ko lagi async await aako ho.
// async_await ma fetch API call kasari garna sakincha vanera pani sikaiyeko cha.



// Example 1 : 
async function user()                               // yo user vanni function lai asynchronously background ma run garauna ko lagi async keyword lekheko ho // yo line ko async le k garcha vanda, yo user() vanni function le return garne kura chai promise ko rup na banaucha (i.e async function enable us to write promise based code)
{
    console.log('Inside user function');           // 3rd ma yo line execute huncha

    // await le pani auta promise return garcha
    const response = await fetch('https://api.github.com/users');       // 4th ma yo await line execute huna khojcha but execute hudaina, await le k vancha vanda, mero kaam na time lagcha so ma last ma execute hunchu.. function batw return vaye jasto gar (i.e function bahira gayera js file ko sabbai statement execution sakera matra feri async function ma aayera malai(i.e await lai) execute gar vancha)
    // await le aafno promise return garcha & response vanni kunai auta variable banayera store gareko
    
    console.log('before response');         // 8th ma yo line execute huncha

    const users = await response.json();    // 9th ma yo line execute huncha, , since aba js file ko kunai remaing statement execute garna chaina... so yesailai nai wait garera bascha & complete execute garcha  // aayeko response lai pani json format ma laijancha

    console.log('users resolved')           // 10th ma yo line execute huncha

    return users;                           // 11th ma yaha batw users return huncha & finally yo async function ko kaam sakera yo async function batw nai return vayera .then() vanni method ma jancha

}


console.log("Before calling user function")         // 1st ma yo exectue huncha

let a = user();                                     // 2nd ma yo user vanni function call huncha

console.log("After calling user function")          // 5th ma yo execute huncha

console.log(a);                                     // 6th ma yo execute huncha but yo line ma a (i.e promise from async function user()) aai sakeko hudaina, so a ko value pending huncha,, so excute completely hudaina

a.then(data => console.log(data))                   // 12th i.e SABBAI VANDA LAST MA EXECUTE HUNCHA : since yo tw async function user() le promise resolve garepachi matra execute hune code (i.e savai vanda last ma execute hune line ho)

console.log("Last line of this js file")            // 7th ma yo line execute huncha  .. since js file ko sabai statement sakiyo execute garera ,, so aba remaining async function ko aginai dekhi wait gari rako await ma jancha








