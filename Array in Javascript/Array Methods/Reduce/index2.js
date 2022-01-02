// Reduce method does some operations on all the array elements and return the result of the operation as combine result.




// Example 1 : 

const items = [
    {name: "Rice", price: 5},
    {name: "Book", price: 20},
    {name: "Chicken", price: 10},
    {name: "Monitor", price: 100}
]


// // Without using reduce method (Just by using forEach() method)
// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price
// })
// console.log(totalPrice)



// Using reduce() method
const total = items.reduce((currentTotal, item, index, array) => {     // harek iteration ma currentTotal ko value ma item ko price add vai rakhya huncha
    
    console.log(`Iteration:${index+1}  Current Total: ${currentTotal}`)
    console.log(`Iteration:${index+1}  Current Item Price: ${item.price}`)
    
    return currentTotal + item.price                    // harek iteration ma yaha batw return vako value feri ghumera tei mathi ko reduce method ko currentTotal ma jancha                    

}, 0)                                                   // currentTotal ko starting value 0 hos vanna ko lagi 0 lekheko.

console.log('Total Value:',total)





// Example 2 : Using reduce() for the use of group by
const people = [
    { name: 'Agent 47', age:30 },
    { name: 'Hitman', age:30 },
    { name: 'Thor', age:32 },
    { name: 'Hulk', age:32 },
]

const result = people.reduce((groupdedPeople, person) => {

    const age = person.age

    if (groupdedPeople[age] === undefined) groupdedPeople[age] = []

    groupdedPeople[age].push(person)
    return groupdedPeople

}, {})                      // yo line ko {} vannale groupedPeople lai empty object le initialize gareko.

console.log(result)





// Example 3 : 
const numbers = [4, 7, 5, 8, 4, 6]

const sum = numbers.reduce((total, number, index) => {

    console.log(`Iteration:${index+1} Current-Total:${total}`)
    console.log(`Current number:${number}`)
    return total + number

}, 0)

console.log('Total sum of Numbers:', sum)



