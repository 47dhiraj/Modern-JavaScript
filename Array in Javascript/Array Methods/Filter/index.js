// Array example from github repo ( Link of github repo ==> https://github.com/jamesqquick/javascript-array-functions-practice )

const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];





// // 1)  Filter Method        ==> The filter() method is a pure function and does not change the original array instead it will return a new array that satisfies the condition .
                              //  NOTE : Javascript filter() does not execute the function for array elements without any values.
   
                              
// Example 1:
const items = [                                             // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

const filterdItems = items.filter((item) => {              // khas ma filter() method le auta functin lincha,,, yaha function ko naam diyeko chaina just parameter pass gariyeko cha ( i.e (item)  )
    return item.price <= 100                             // yo condition batw each array element ko lagi Boolean value return hunxa i.e TRUE or FALSE, yedi True return vayo vani tyo array element chai naya array element ma bascha, yedi False return vayo vani tyo array element chai naya array element ma basdaina.
})

console.log(items)                          // filter() method le previous array lai kei chaina gardaina.. jasta ko testai original kei nagari rakhi rako huncha
console.log(filterdItems)                   // filter() vayera aayeko naya array



// Example 2:
var ages = [32, 33, 12, 40];            // ages vanni auta array ho

function checkAdult(age)                // ages vanni array batw value aaucha one by one
{
  return age >= document.getElementById("ageToCheck").value;        //yedi array ko age value greater than minimun age, then return that array value
}

function myFunction()           // Try it button click garda yo method call huncha
{
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);              // filter() method le checkAdult() vanni method call garcha & automatically yo method ma ages vanni array ko values one by one as a paramter ko rup ma pathaucha
}




// Example 3: Filter ==> Github Repo practice 

// example 3.1: Get characters with mass greater than 100
const greaterthan100characters = characters.filter((character) => {
  return character.mass > 100
});
console.log(greaterthan100characters)

// // Alternative one liner arrow function of above arrow function
// const greaterthan100characters = characters.filter((character) => character.mass > 100 );
// console.log(greaterthan100characters)


// example 3.2: Get characters with height less than 200
const lessthan200characters = characters.filter((character) => {
  return character.height < 200
});
console.log(lessthan200characters)


// example 3.3: Get all male characters
const malecharacters = characters.filter((character) => {
  return character.gender === 'male'
});
console.log(malecharacters)


// example 3.4:  Get all female characters
const femalecharacters = characters.filter((character) => {
  return character.gender === 'female'
});
console.log(femalecharacters)


