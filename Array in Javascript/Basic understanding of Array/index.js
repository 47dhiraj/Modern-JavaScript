// Syntax for creating array

// 1st way of creating array in javascript
let marks = [34, 23, 24, 93 ,73, 25];                       //number typeko ko array
console.log(marks);

const fruits = ['Orange', 'Apple', 'Pineapple'];            //string type ko array
console.log(fruits)
console.log(fruits[1])                                      // Accessing array value by indexing the array

const mixed = ['str', 89, [3, 5]];                          // Nested array with mixed type of data ==> array vitra pani array xa yaha [... [3, 5]]
console.log(mixed)

// 2nd way of crating array in javascript using  new Array()
const arr = new Array(23,123,21, 'Orange');
console.log(arr)
console.log(arr.length)                                     // .length property ko help batw array ko length nikalna sakincha





// Checking if it's array or not
console.log(Array.isArray(arr));                            // .isArray() method le array ho ki nai check garxa 


// changing or modifying array value
arr[0] = 'Mango';                                           
console.log(arr)


//Getting the index position of array element
let index_value = fruits.indexOf('Pineapple');              // indexOf le  array ma vayeko value ko index position dinxa
console.log(index_value)


// forming the array using .from() method of array
console.log(Array.from("Hitman"))







// Mutating or Modifying arrays temporarily using some simple array methods

marks.push(88);                                      // push le array ko last(end) ma lagera add garxa naya value
marks.pop()                                          // pop le array ko end batw auta value or element lai hatauxa



marks.shift()                                        // shift le array ko start batw auta value or element lai hatauxa
marks.unshift(1009);                                 // unshhift le array ko starting ma lagera halxa 


marks.reverse()                                      // array ko sabbai value lai reverse garxa i.e tini haru ko index positon nai reverse garxa


sliced_marks = marks.slice(0, 4)                     // array ko certain portion of elements or values nikalna ko lagi slice method ko use garincha
console.log(sliced_marks)
sliced_marks2 = marks.slice(-2)
console.log(sliced_marks2)


marks.splice(0, 1, 33);                                  // this mean start from index position  0 and remove array element upto range 1 (i.e index position 0) & insert value 33 in that specific index position
console.log(marks)





