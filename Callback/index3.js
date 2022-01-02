// About Callbacks


// Example 1 :
setTimeout(()=> {                   // setTimeout() function le auta callback function lincha.

    console.log("Waited 1 second.")

}, 1000);                           // 1000 milliseconds vaneko 1 second ho.





// Example 2 : Nested setTimeout() creates the callback hell scenario.
setTimeout(() => {
    console.log('Waited 1 second')
    setTimeout(() => {
        console.log('Waited 2 seconds.')
        setTimeout(() => {
            console.log('Waited 3 seconds.')
        }, 1000);
    }, 1000);
}, 1000);





// Example 3 : Callback inside event handler
$(document).ready(function() {

    // var btn = document.getElementById('btn');
    // btn.addEventListener('click', () => {
    //     console.log('Button is being clicked .')
    // })


    // Alternative one liner code
    document.getElementById('btn').addEventListener('click', () => console.log('Button is being clicked .'))

});









