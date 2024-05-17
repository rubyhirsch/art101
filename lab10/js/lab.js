//index.js 
//Lab 10 - Javascript for the Web
//Authors - Ruby Hirsch, Franchesca Boongaling 
//May 16, 2024

function generateRandomText() {
    const text = "Sally sells sea shells by the sea shore. But are you shore? I could be lying to you. Why don't you look in the mirror and examine what truths I have told and what your reality even means? Does it even matter what I tell you or where you are?";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  $("#make-combo").click(function(){
    console.log("test");
    const newText = generateRandomText(); 
    $("#output").append('<div class = "text"><p>'+ newText + '</p></div>');
  });