// // forEach Method: 

// forEach() method doesn't return anything.
// forEach() method works like for loop but instead it takes callback function .

const items = [                                 // yo items vanni auta array ho
    { name: 'Bike', price:100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
    { name: 'Computer', price: 1050 }
]


items.forEach((item) => {    

        if(item.name === 'Computer')
        {
            console.log('Price = ', item.price)
        }
      
})



console.log(items)      // forEach() doesn't change the original array.


