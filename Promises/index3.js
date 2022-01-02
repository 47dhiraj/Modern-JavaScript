// About Promises in Javascript


// Example 1 : Promises basic understanding
const myPromise = new Promise((resolve, reject) => {

    const rand = Math.floor(Math.random() * 2);

    if (rand === 0) {
        resolve()
    } else {
        reject()
    }


});

myPromise
.then(() => console.log('Successfully resolved.'))
.catch(() => console.log('Successfully rejected.'))




// Example 2 : Fetch API with Promises
fetch("https://yts.mx/api/v2/list_movies.json?query_term=Hitman")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))






