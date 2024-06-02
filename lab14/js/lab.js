// index.js - Debugging Lab 8
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: 5/31/24


//Creation of the array
var anArray = [1, 3, 22 , 14, 9, 6]

//Making a function to add 3 to a number and passing through the value of anArray
function addNumber(x) { 
    return (x+3);
}

let addResults = anArray.map(addNumber); 

anArray.map(addNumber);
var mapResults = anArray.map(addNumber);
console.log("Here are the results of anArray passing the addNumber function: " + anArray.map(addNumber));

//Making an anonymous function to subtract by 3 and pass through the value of anArray
 var minusResults = anArray.map(function(x) {
    return (x-3);
})

 // Use jQuery to select the element by its ID and set the HTML content
 $("#old").append(anArray).append(addResults).append(minusResults);
 $("#output1").append(anArray.join(", "));
 $("#output2").append(addResults.join(", "));
 $("#output3").append(minusResults.join(", "));

