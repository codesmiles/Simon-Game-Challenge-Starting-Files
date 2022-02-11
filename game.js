const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;

// Starting the game
$(document).keypress(function (e) {
  $(this).unbind("keypress");
  nextSequence();
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); //0 - 3
  var randomChosenColour = buttonColours[randomNumber]; //random color from the array of buttonColours
  gamePattern.push(randomChosenColour); //  push the random colors generated into the gamePattern array
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100); // Pick random divs with random colours
  animatePress();

  // animate and play sound
  playSound().click(function () {
    // animate current colors when clicked
    $(this).fadeOut(100).fadeIn(100);
    animatePress();
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Play sound when clicked
    const audio = new Audio(`sounds/${userChosenColour}.mp3`);
    audio.play();
  });

  // Play sound based on random number
  function playSound(name) {
    return $(`#${randomChosenColour}`).ready(() => {
      const audio = new Audio(`sounds/${randomChosenColour}.mp3`);
      audio.play();
    });
  }

  function animatePress(currentColour) {
    $(`#${randomChosenColour}`).addClass("pressed");
    return setTimeout(function () {
      $(`#${randomChosenColour}`).removeClass("pressed");
    }, 100);
  }
}

// $("document").ready(function () {
//   const audio = new Audio("source.mp3");
//   audio.play();
// });
