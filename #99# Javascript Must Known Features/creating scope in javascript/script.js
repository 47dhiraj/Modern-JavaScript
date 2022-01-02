// Creating random scope in JS
// Generally for loop or function create gare pachi scope create huncha
// But in javascript, we can create scope simply using curly braces.



// Example of scope creating using curly braces :
{                                   

    const age = 25                            // yedi scope variable banaune ho vani let or const keyword ko use garnu (but var keyword use nagarnu because var keyword batw banako varibale scope vanda bahira pani access garna sakincha i.e global scope huncha)
    console.log('your age is:,', age)

}

// console.log(age)                             // we cannot access age outside the scope




// Example 2 : giving label ko random scope & using break statement also
scope1: {                                   

    let num = 47                            // yedi scope variable banaune ho vani let or const keyword ko use garnu
    console.log('value of num is,', num)

    break scope1

    console.log('Unrechable line of code')
}

// console.log(num)                            // cannot access the num outside the scope


