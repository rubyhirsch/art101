//index.js 
//Lab 9 - Libraries and JQuery 
//Authors - Ruby Hirsch, Franchesca Boongaling 
//May 9, 2024

//Challenger Section 
/*
$("#challenger").append("<button id = 'cButton'>Make Special </button>");
//Click Listener 
$("#cButton").click(function() {
    $("#challenger").toggleClass("special");
});

$("#problemo").append("<button id = 'pButton'>Make Special </button>");
//Click Listener 
$("#pButton").click(function() {
    $("#problemo").toggleClass("smecial");
});

$("#reflecto").append("<button id = 'reflectButton'>Make Special </button>");
//Click Listener 
$("#reflectButton").click(function() {
    $("#reflecto").toggleClass("special");
});

$("#raResults").append("<button id = 'raButton'>Make Special </button>");
//Click Listener 
$("#raButton").click(function() {
    $("#raResults").toggleClass("smecial");
});
*/

$(".rSpecial").append("<button>Make Special</button>");
$(".rSpecial button").click(function() {
    $(this).parent().toggleClass("special");
});

$(".tSpecial").append("<button>Make Special</button>");
$(".tSpecial button").click(function() {
    $(this).parent().toggleClass("smecial");
});


