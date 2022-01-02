// About Promises in Javascript
// Jaba kunai kaam le dherai time lincha & we don't want to wait till it's completion,, yesto bela ma tyo kaam asynchronously background ma run hos vanna ko lagi promises ko use garincha.
// So we can say promises are mean to solve about callback (i.e callback ko kaam lai sajilo garauna ko lagi promises lyaiyeko ho)


// Example 1 : 
function watchTutorialPromise() 
{

let userLeft = false
let userWatchingCatMeme = false

return new Promise((resolve, reject) => {       // returning promise

    if (userLeft) {
    reject({
        name: 'User Left', 
        message: ':('
    })
    } 
    else if (userWatchingCatMeme) {
    reject({
        name: 'User Watching Cat Meme',
        message: 'Agent < Cat' 
    })
    } 
    else {
        resolve('Thumbs up and Subscribe')
    }
    })

}
  

  watchTutorialPromise()
  .then(message => {              // resolve() call vayo vani yo then() method call huncha
    console.log(message)
  })
  .catch(error => {               // reject() call vayo vani yo catch() method call huncha
    console.log(error.name + ' ' + error.message)
  })
  


  

// Example 2 : 
  const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([                           // .all() wait for every promises to complete.
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })
  
  Promise.race([                          // .race() doesn't wait for every promises to complete, jun promise suru ma complete huncha tei suruma return huncha.
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })







