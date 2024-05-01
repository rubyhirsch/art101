// index.js - Making functions
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: April 30, 2024

//Define function 
function getUserName() {
    const userName = window.prompt("Ye name?!");
    return userName.split('').sort().join('');
}

//Function Output
document.writeln("Ye NEW name: " , getUserName(),"<br>");