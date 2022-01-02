// Comparing both Fetch API  way &  Async Await  way


// Example 1 :  Both using fetch Api &  async await technique

// Using Fetch API Way (Not the Good way)

const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})




// Using Async Await way (Good way for asynchronous programming)
const LoadData1 = async () => {                  // async keyword enables to run LoadData1 function asynchronously.

    try {

        const url = 'https://jsonplaceholder.typicode.com/todos/1';

        const res = await fetch(url);                // await keyword enables to wait for dta to be fetched

        // console.log(res.status)                  // response ko status pani yesari check garna sakincha

        const data = await res.json();               // json response pathauna vanda pahila pani wait gareko cha

        return data;

    }catch (err) {

        console.log(err)

    }

}

LoadData1().then((data) => console.log(data))

// // we can use IIFE for Top Level Async Await
// ( async () => {

//     const data = await LoadData1();
//     console.log(data);

// })();






// Example 2 : Async Await with promise.all() (handling all the request parallely.. i.e manaully 3 ta url batw data fetch garda 3 seconds lagthyo vani yesari Promise.all() tarikale garda only 1 second nai lagcha)
const LoadData2 = async () => {                  

    try {

        const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
        const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
        const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

        const results = await Promise.all([                         // sabai fetch(url) lai array vitra rakheko
            fetch(url1),
            fetch(url2),
            fetch(url3),
        ])

        const finalData = await Promise.all(results.map(result => result.json()));

        return finalData;

    } catch (err) {

        console.log(err)

    }

}

// LoadData2().then((data) => console.log(data))


// we can use IIFE for Top Level Async Await
( async () => {

    const data = await LoadData2();
    console.log(data);

})();






