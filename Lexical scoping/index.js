function init()
{
    var firstName = "Agent 47"

    function sayFirstName() 
    {
        console.log('Inside sayFirstName():', firstName)

        // console.log(this.firstName)                         // Note : this keyword inside regular function refers to the global object (i.e window object in browser) ... so init() function vanda bahira firstName lai chindaina, tei vayera yo line of code le undefined dincha.
    }

    sayFirstName()

    console.log('Inside init():', firstName)
}

init()
