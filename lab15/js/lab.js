// index.js - Debugging Lab 8
// Author: Franchesca Boongaling and Ruby Hirsch
// Date: 6/2/24

// const url = "https://yesno.wtf/api"; 

const URL = "https://yesno.wtf/api";

$("#activate").click(function(){
    let question = $("#input").val();
    console.log(question);
    $("#the-question").html("<p>Your Question: " + question + "</p>")

    $.ajax({
        url: URL,
        type: "GET"
    })
    .done(function(data) {

        let yN =  data.answer;
        $("#output").html("<p>Your Answer: <span class='bold'>" + yN + "</span></p>" + "<img class='center' src=" + 
        data.image + ">");
    });
})