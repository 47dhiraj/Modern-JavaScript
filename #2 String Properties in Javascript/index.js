let name = 'Agent 47 '
let greeting = ' Good Morning'
console.log(greeting + name)


today_greet = name.concat(greeting)
console.log(today_greet)



let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');        // concat le existing string ma aru user le jati string diye pani concat garxa
console.log(html);


// Talako sabai string properties le string object temporary matra kaam garcha (i.e original string object lai affect nagari kaam garcha)

console.log(html.length);                   // Finding the Length of string 


console.log(html.toLowerCase());            // lowercase of the string
console.log(html.toUpperCase());            // Uppercase of the string
console.log(html);                          // suru ko html jato thiyo testai xa vanera check garna ko lagi gareko


console.log(html[1]);                       // Indexing of the string object

console.log(html.indexOf('<'));          // string variable ko kunnai character ko first index position yestari herna sakinxa
console.log(html.lastIndexOf('<'));      // string variable ko kunnai character ko last index position yestari herna sakinxa
console.log(html.charAt(3));             // charAt le chai index postion batw kun character xa tei character lai display garxa

console.log(html.endsWith('str2'));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));       // total string vari search garxa kunnai word or character lai & xa vani tyo word "true" return garxa

console.log(html.substring(1,6));        // string ko range i.e 1 to 6 ma vayeko substring disply gareko ho

console.log(html.replace('this', 'it')); // string ko property replace le first occurence word lai matra replace garxa i.e yaha first occurence of this lai matra it le replace garxa

console.log(html.split('>'));            // split le string batw substring lai tukra tukra pare ra array banayera dinxa.. i.e jaha jaha user le diyeko symbol for eg: (ahile ko lagi '>') xa tyaha batw substring tukraune kaam garxa


// Understanding slice() method in string

// Example of slice :
console.log(html.slice(0, 4))               // slice ko kaam pani substring jastai ho.. yesle mathi ko jasari range diyera pani kaam garna sakxa & also negative number diyera pani last batw substring nikalera dina sakxa
console.log(html.slice(-4))                 // last ko 4 characters slice garcha



