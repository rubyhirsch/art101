// index.js - Loops
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/27/24

for (let i=1; i<=200; i++) { 
    let str=""; 
    if (i%3 == 0) { 
        str += "Fizz"; 
    } 
    if (i%5 == 0) { 
        str += "Buzz"; 
    } 
    if (i%7 == 0) { 
        str += "Boom"; 
    } 

    if (str == "") {
        $(".output").append("<p class='num'>" + i + "</p>");
    } else {
        $(".output").append("<p class='text'>" + str + "!" + "</p>");

    }
}