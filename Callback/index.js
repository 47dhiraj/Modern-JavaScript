// Callback in Javascript ==> callback vanni bittikai auta function vitra arko function execute hune.


function watchTutorialCallback(callback, errorCallback) 
{
    let userLeft = false
    let userWatchingCatMeme = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } 
    else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'Agent < Cat' 
      })
    } 
    else {
      callback('Thumbs up and Subscribe')
    }

}


watchTutorialCallback(message => {
    console.log(message)
  }, error => {
    console.log(error.name + ' ' + error.message)
  })









