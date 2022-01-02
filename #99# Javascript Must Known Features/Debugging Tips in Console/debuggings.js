// Debugging Tips in Console



// Current state or right at the moment ko kura lai debug garna sakincha using debugger keyword
debugger                    // execution lai pause garera debug garne facility provide garcha yo debugger keyword le

// Note : ctrl+ shift + I  hane pachi sources tab ma chai Debugging facility huncha... tya Scope vanni huncha tes vitra Script vanni huncha tyaha currnt state or value k cha herna sakincha


// For checking the execution time or performance of the code
console.time('Time Taken')
// Your code
console.timeEnd('Time Taken')



// Console assertion checking
const code = 47
console.assert(code === 46, "Get lost! U are not Agent.")



// complex data strucutre lai console ma ramro sanga herna garo parcha
// so use of console.table() is more helpful
const people = [

    {name: "Agent 47", age:30 },
    {name: "Jack", age:26 },
    {name: "Jill", age:24 },

]

console.table(people)