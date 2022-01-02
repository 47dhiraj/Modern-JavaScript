// About Async Await in Javascript



// Example 1 : Use of Promises with Async Await 

function makeRequest(location) {

    return new Promise((resolve, reject) => {

        console.log(`Making request to ${location}`)

        if (location === 'Google') 
        {
            resolve(`Google Says hi`)
        } 
        else 
        {
            reject(`We can only talk to Google`)
        }

    })

}



async function doWork() {
    try{

        const response = await makeRequest('Google')                
        // const response = await makeRequest('Facebook')
        console.log(response)

    } 
    catch (err) {

        console.log(err)

    }
}


doWork()                        // calling doWork() asynchronous method










