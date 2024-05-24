// index.js - Conditionals
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/24/24

//Returns the strings Gryffindor, Raavenclaw, Hufflepuff, or Slytherin
//Based on whether the vale of the modulo of the str length is 0, 1, 2, or 3
function sortingHat(str) {
    let indexOfHouses = str.length % 4;
    const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
    return houses[indexOfHouses];

    //I made an array of all the names because the values of the arrays 
    //equate to the modulo number the user's string will be. I changed the mod name so it was a little more descriptive to the array name.
    //I also deleted the variable len because I don't think I need the variable when I can just input str.length in the modulo.
    //Instead of the conditional, I let houses have the variable indexOfHouses (aka mod) to look find the number and give the string
    
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function (){
    //When I was debugging, I put console.log(name) and it got a weird HTML output name instead of the user input
    // So i just put the value property to the end of name
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>"
    document.getElementById("output").innerHTML = newText;
})  