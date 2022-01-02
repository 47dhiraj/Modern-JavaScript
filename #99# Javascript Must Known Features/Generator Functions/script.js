// About Generator Functions 



// Example 1 : Real world example for unique id generator
function* idGenerator() 
{

    // Advance id Generator logic
    while (true) 
    {
        const existingIDs = [];

        const getRandomLetters = (length = 1) => Array(length).fill().map(e => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
        const getRandomDigits = (length = 1) => Array(length).fill().map(e => Math.floor(Math.random() * 10)).join('');
        
        let id = getRandomLetters(2) + getRandomDigits(4);

        while (existingIDs.includes(id))                    // yedi ahile generate garna lageko id pahilai cha ki nai vanera check gareko.
        {
            id = getRandomLetters(2) + getRandomDigits(4);  // yedi pahilai tyo id generate vako cha vani yo line of code le feri naya id generate garcha.
        }

        yield id                        // yeild keyword just return keyword jastai kaam garcha,, except yield keyword doesn't exit from generator function rather it just return value without exiting from generator function .                  
    }


    // // Simple incremental id generator
    // let id = 1

    // while (true) {
    //     yield id                    // yeild keyword just return keyword jastai kaam garcha,, except yield keyword doesn't exit from generator function rather it just return value without exiting from generator function .
    //     id++
    // }


}


const generator = idGenerator()     // generator naam ko object create gareko

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())       // jati bela man lagyo teti bela tei autai function call garera current state or values lai access garna sakincha.



