class Person 
{

    constructor(name)                                       // constructor in the javascript
    {
        this.name = name                                    // javascript ma this le instance or object janaucha
    }


    printNameArrow()
    {
        setTimeout((e) => {                                 // Arrow function jun thau ma define cha tei thau ko variable lai this keyword le reference garcha (i.e ahile class vitra arrow function define cha , so class vitra ko name vanni variable lai this keyword le reference gareko huncha)  // setTimeout chai javascript le provide gareko inbuilt time handler ho
            console.log('Arrow Function : ' + this.name)   // this.name le class vitra ko name variable lai refer gari rako huncha 
        }, 100)                                             // 100 millisecond
    }



    printNameFunction()
    {
        setTimeout(function(e)                              // nornal function jun thau ma define cha tes thau ko(i.e ahile class ko) variable lai this keyword le reference gardaina, rather, nornal function jaha batw call huncha tes thau ko variable lai this keyword le reference gari rakhya huncha
        {
            console.log('Nornal Function : ' + this.name)  // yo this.name lai Person class vanda bahira ko name vanni variable lai reference gari rakhya huncha   
        }, 100)
    }

}


var name = 'Hitman'


var person = new Person('Agent 47')
person.printNameArrow()
person.printNameFunction()
















