//Lecture 5/14/24

console.log("Hello from JS");

//$("#my-button").click(function() {
   // let nameo = prompt("Name please:");
  //  return nameo;
//});



function getNameAndDisplay() {
    let nameo = prompt("Name Please:"); 
    $("#title").html("Hello, " + nameo);
}

// $("#my-button").click(function() { 
//     console.log("click me");
// })

    $("#my-button").click(getNameAndDisplay);
    console.log("click me");
//$("#title").html("Hello" + nameo);
