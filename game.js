const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); //Random number between 0 and 3
  var randomChosenColour = buttonColours[randomNumber]; //randomChosenColour is the random color from the array of colours
  gamePattern.push(randomChosenColour); //  push the random colors generated into the gamePattern array
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100); // Pick random divs with random colours

 playSound().click(function () {
    // animate when the color is clicked
    $(this).fadeOut(100).fadeIn(100); // Pick random divs with random colours
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Play sound when clicked
    const audio = new Audio(`sounds/${userChosenColour}.mp3`);
    audio.play();
  })



  function playSound(name) {
    // Play sound based on random number
    return ($(`#${randomChosenColour}`).ready(function () {
      const audio = new Audio(`sounds/${randomChosenColour}.mp3`);
      audio.play();
    }));
  }
}





// $("document").ready(function () {
//   const audio = new Audio("source.mp3");
//   audio.play();
// });
