// index.js - Arrays & Objects
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 4/26/24

// Define Variables
const myTransport = ["legs", "car", "bus"]

// Create an object for my main ride
const myCar = {
  make: "Honda",
  model: "Civic",
  color: "Silver",
  year: 2008,
  age: function() {
    return 2024 - this.year;
  }
}

// Don't exactly know what lines 21 and 22 mean, but we are following it from Task 2 step #7
document.writeln("Getting around: ", myTransport, "<br>");
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "<pre>");