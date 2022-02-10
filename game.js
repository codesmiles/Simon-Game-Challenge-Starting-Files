const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4); //Random number between 0 and 3
  var randomChosenColour = buttonColours[randomNumber]; //randomChosenColour is the random color from the array of colours
  gamePattern.push(randomChosenColour); //  push the random colors generated into the gamePattern array
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100); // Pick random divs with random colours
  // Play sound
  $(`#${randomChosenColour}`).ready(function () {
    const audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    audio.play();
  }).click(function () { 
    let userChosenColour =   `clicked` ; //$(this).attr("id");
    return userChosenColour;
  });
 
}

// $("document").ready(function () {
//   const audio = new Audio("source.mp3");
//   audio.play();
// });
