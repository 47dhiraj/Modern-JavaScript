// About Set object in javascript  ==> set oject only allow u to have unique values or elements

// Generally Set objects are for arrays .

// set object ma jahile pani unique elements huncha




// Example of Set object : 

const numbers = [2, 4, 2, 8, 6, 8]              // simple array create gareko

const UniqueSet = new Set(numbers)              // creating Set object              

console.log(UniqueSet)                          // automatically unique element matra huncha set ma

UniqueSet.add(10)                               // adding new value in set object

console.log(UniqueSet)

console.log(UniqueSet.has(10))                  // set object ma value or element cha ki nai vanera check gareko

UniqueSet.delete(10)                            // element lai delete gareko

UniqueSet.forEach((value, index) => {           // using for loop with set object

    console.log(index + ' = ' + value)
})                   






