// index.js - Making functions
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: April 30, 2024

//Define function 
function getUserName() {
    //prompt to ask user their name 
    const userName = window.prompt("Ye name?!");
    //convert name into an array, join the array and turn into string 
    return userName.split('').sort().join('');
}

//Function Output
document.writeln("Ye NEW name: " , getUserName(),"<br>");