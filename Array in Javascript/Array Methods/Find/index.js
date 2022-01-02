// // Find Method  ==>  allows you to find single matching element in an array.

// The find() method executes the function once for each element present in the array:
// 1.  If it finds an array element where the function returns a Boolean value(TRUE or FALSE), find() returns the value of that found array element (and does not check the remaining values)
// 2.  Otherwise it returns undefined.



const items = [                                     // yo items vanni auta array ho
        { name: 'Bike', price:100 },
        { name: 'TV', price: 200 },
        { name: 'Album', price: 10 },
        { name: 'Book', price: 5 },
        { name: 'Phone', price: 500 },
        { name: 'Computer', price: 1000 },
        { name: 'Keyboard', price: 25 },
        { name: 'Computer', price: 1050 },
]



// Example 1 :
const foundItem = items.find((item) => {                 
        return item.name === 'Computer'             // yedi item vetyo vani yaha batw boolean value (TRUE) return huncha & find() method batw suru ko matching item return huncha .
})

console.log(foundItem)


