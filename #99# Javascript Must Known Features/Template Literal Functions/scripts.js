// About Template Literal Functions


// Example : use of Template literal functions

// yo bold vanni chai template literal function ho, jun hami aafaile banako ho.
function bold(strings, ...values)               // yo line ko ...values spread operator vannale khas array type ko huncha
{
    return values.reduce((finalString, value, index) => {
        return `${finalString} <b>${value}</b> ${strings[index + 1]}`
    }, strings[0])

}


const firstName = "Agent 47"
const hobby = "Programming"


var text = bold `My Name is ${firstName} and i love ${hobby}`               // yesari back tick ko agadi template literal function lai call garna sakincha.
document.getElementById('bold_text').innerHTML = text


// console.log(bold `My Name is ${firstName} and i love ${hobby}`)
