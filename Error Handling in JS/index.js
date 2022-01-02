// Error Handling in JS

// Example 1 : handling error in javascript, using try catch block

try             // try block ko kaam vaneko kei task garney ho, and error aayo vani jun line ma error aaucha tyo vanda talako code execute navai siddai catch block ma jancha
{
    console.log("We are inside try block");

    // do something

    agent();               // yo agent() vanni function definition maile katai pani lekheko chaina so yo line le error generate garcha
    
} 
catch(error)            // catch block only catches error of try block.... catch ko kaam vaneko try block ma error aako cha vani yo catch block le error catch garne kaam garcha,, try block ko error matra catch le handle garcha anta ko error catch block le catch gardaina... 
{
    console.log(`Error Name:`,error.name ,` Error Message:`, error.message);

    // console.log(error)
  

    // do something
    
} 
finally        // jun language ma pani finally ko meaning tei ho     // error aawos ya error na aawos we will run finally block
{
    // do something

    console.log("Executing Finally Block. It will run whaterver happens.")
}