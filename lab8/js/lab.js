// index.js - Making Functions
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: May 5, 2024

//Creation of the array
var anArray = [1, 3, 22 , 14, 9, 6]

//Making a function to add 3 to a number and passing through the value of anArray
function addNumber(x) { 
    let results = (x + 3);
    return results; 
}
anArray.map(addNumber);
var mapResults = anArray.map(addNumber);
console.log("Here are the results of anArray passing the addNumber function: " + anArray.map(addNumber));

//Making an anonymous function to subtract by 3 and pass through the value of anArray
 var results = anArray.map(function(x) {
    return (x-3);
})

console.log("Here are the results of the anonymous function " + results);

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(results);
