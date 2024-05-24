// index.js - Events & Forms
// Author: Franchesca Boongaling & Ruby Hirsch
// Date: 5/18/24

function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

// click listener for button
$("#sort").click(function(){
  const userName = $("#name").val();
  const colorName = $("#color").val();
  const aniName = $("#animal").val();

  userNameSorted = sortString(userName);
  colorNameSorted = sortString(colorName);
  aniNameSorted = sortString(aniName);

  $("#output").append('<p>' + userNameSorted + '</p>');
  $("#output").append('<p>' + colorNameSorted + '</p>');
  $("#output").append('<p>' + aniNameSorted + '</p>');
});



// Task X:
function anagram(inputString) {
  const charArray = inputString.split('')
   // Fisher-Yates (Knuth) shuffle algorithm that shuffles characters
 for (let i = charArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [charArray[i], charArray[j]] = [charArray[j], charArray[i]]; }
 const anagram = charArray.join('');
 return anagram;
}

$("#anagram").click(function(){
  const userName = $("#name").val();
  const colorName = $("#color").val();
  const aniName = $("#animal").val();
  
  userNameSorted = anagram(userName);
  colorNameSorted = anagram(colorName);
  aniNameSorted = anagram(aniName);
  
$("#output").append('<p>' + userNameSorted + '</p>');
$("#output").append('<p>' + colorNameSorted + '</p>');
$("#output").append('<p>' + aniNameSorted + '</p>');
});

 