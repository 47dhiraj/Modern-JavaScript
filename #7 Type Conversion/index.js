// Type conversion  or Type casting in Javascript

let myVar;
myVar = 34;
console.log(myVar, (typeof myVar));                 // myVar ko actual value & tesko type lai console garera display gareko


myVar = String(34);                                 // number type lai string type ma convert gareko.. i.e Type Conversion
console.log(myVar, (typeof myVar));


let boooleanVar = true;                             // boolean data type
console.log(boooleanVar, typeof(boooleanVar));


let booleanVar = String(true);                      // boolean datatype lai Type Conversion ko help batw string data type ma lageko
console.log(booleanVar, (typeof booleanVar));


let date = new Date();
console.log(date, typeof(date));                    // Date ko type chai object huncha javascript ma


let daate = String(new Date());
console.log(daate, (typeof daate));                 // ahile date ko type string ma convert gari sakiyo


let arr =  [1,2,3,4,5];
console.log(arr.length, arr, (typeof arr));         // array chai object ho javascript so tei vayera array ko type chai object nai huncha


let arrr =  String([1,2,3,4,5]);                    // mathi ko array object lai type conversion ko help batw string type ma convert gareko
console.log(arrr, arrr.length, (typeof arrr));      // string vai sake paxi length chai 9 hnxa,, i.e vitra ko comma pani ganinxa 
 

let i = 75;
console.log(i.toString(), String(i))                // yesari toString() method ko help batw chai temporary type convert matra huncha ,, String() method ko help batw chai permanent type convert huncha


let stri = Number("3434");
// stri = Number("343d4");
// stri = Number(false);
// stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));


let number = parseFloat('34.098');
console.log(number.toFixed(2), typeof(number))    // Javascript ma float value ko type pani number nai huncha

let number2 = parseInt(47.50)
console.log(number2, typeof(number2))                // Javascript ma integer value ko type pani number nai huncha

if (typeof(number2) === 'number')
    console.log("Yes type of number2 is number")
