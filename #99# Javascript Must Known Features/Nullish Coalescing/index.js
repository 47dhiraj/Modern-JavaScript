// About Nullish Coalescing  ==> kehi kura calculate garna vanda pahila null or undefined cha ki nai vanera check garne kaam.
// Use  ??  (double questio mark) for checking null & undefined value, yesailai nullish Coalescing vanincha.


// Example  of Nullish Coalescing
function calculatePrice(price, taxes, description) 
{
    taxes = taxes ?? .05                                // ??  mean, yedi taxes ma value cha vani taxes ko value lincha, yedi null or undefined cha vani chai 0.05 value lincha.
    // // Alternative Code :
    // if (taxes === null || taxes === undefined)
    // {
    //     taxes = .05
    // }

    description = description ?? "Default Item"
    // // Alternative Code :
    // if (description === null || description === undefined)
    // {
    //     description = "Default Item"
    // }


    const total = price * ( 1 + taxes )                 // OR,  const total =  price + (price * taxes)
    console.log(`${description} with Tax : $${total}`)
}


calculatePrice(100, 0.07, "My Team")
calculatePrice(100, 0, "Another Team")
calculatePrice(100, undefined, "")
calculatePrice(100, undefined, undefined)








