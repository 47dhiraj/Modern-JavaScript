let a= 30


// a++ vannale postfix increment (pachi chai value increment hune)  ==> Postfix increment operator means the expression is evaluated first using the original value of the variable and then the variable is incremented(increased).
let b= a++          // b ko value evalution chai a ko original value le garcha & only the value of a is increased by 1 (i.e a = a+1 = 31) 

// ++a vananle prefix increment (agi nai value increment hune) ==>  The prefix increment operator (++) adds one to its operand; this incremented value is the result of the expression
let c= ++a          // ++a le initial a ko value lai override garcha i.e a = a + 1 i.e result of a = 32 & then only value of a is transferred to c

console.log(a,b,c)




