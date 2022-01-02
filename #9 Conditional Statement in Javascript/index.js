const age = 100;
const agee = '100';

const doesDrive = false;
// const vari = 34;

if(age == 100)  // double == comparison operator checks only value.
{
console.log('Age is 100') 
}
else if(age === 100)  // triple === comparison operator checks both value & their Data Types.
{
console.log('Age is 100')
}
else if(agee === '100')  
{
console.log('Age is 100')
}
else
{
    console.log('Age is not equla to 100')
}


// if (age!=19){
//     console.log('Age is not 19')
// }

// if(age !== 65){
//     console.log('Age is not 65')
// }

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) 
{
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;
    
    case 100:
        console.log("You are of Century");
        break;

    default:
        console.log("You are unknown age");
        break;
}  