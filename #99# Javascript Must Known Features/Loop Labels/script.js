// About Loop Labels in Javascript  ==> loops ma loop label ko use garincha
// Note : loop label ko name j rakhna parni sakincha (for eg:  loop1 or hitman1)
// inner loop ma certain condition check garera yedi condtion meet vayo vani outer loop ko one interation sajilai skip garna lai loop label ko use garna .

// we can use, continue and break statement with Loop Label



// Example of Loop Labels : 
loop1: for(let i = 0; i < 4; i++) {                 // yesari loop1: , chai loop label diyeko ho

    loop2: for (let j = 0; j < 3; j++) {            // loop2: , pani loop label diyeko ho
        
        if (i === 1 && j === 1)
        {
            continue loop1                          // continue statement ma yesari loop label ko use garna sakincha.
            // break loop1                          // break statement ma yesari loop label ko use garna sakincha.
        }
        
        console.log(`i=${i}, j=${j}`)

    }
}









