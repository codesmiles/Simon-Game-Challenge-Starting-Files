const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;

// Starting the game
$(document).keypress(function (e) {
  $(this).unbind("keypress");
  nextSequence();
  $("h1").text(`Level ${level}`); // leveling up
});

// checking answers
function checkAnswer(currentLevel) {
  currentLevel = currentLevel.toString();

  if (currentLevel === gamePattern[gamePattern.length - 1]) { 
    console.log(
      "success",
      gamePattern,
      `Clicked pattern: ${userClickedPattern}`
    );
 
  }
  // if (gamePattern.indexOf(currentLevel) === gamePattern.length - 1) {
  //   console.log(
  //     `success`,
  //     `Clicked pattern: ${userClickedPattern}`,
  //     `gamePattern: ${gamePattern}`
  //   );
  // }
  // nextSequence();
  // if (nextSequence() === true) {
  //   setInterval(function () {

  //   }, 1000);
  // }
  // else {
  //   playSound("wrong");
  //   // nextSequence();
  // }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); //0 - 3
  var randomChosenColour = buttonColours[randomNumber]; //random color from the array of buttonColours
  gamePattern.push(randomChosenColour); //  push the random colors generated into the gamePattern array

  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100); // Pick random divs with random colours
  animatePress();

  // animate and play sound
  playSound(randomChosenColour).click(function () {
    // animate current colors when clicked
    $(this).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColour);
    let userChosenColour = $(this).attr("id");
    checkAnswer(userChosenColour); //check answer after user clicked
    userClickedPattern.push(userChosenColour);

    // Play sound when clicked
    const audio = new Audio(`sounds/${userChosenColour}.mp3`);
    audio.play();
  });

  $(`h1`).text(`Level ${++level}`); //Incementing levels
}

// To animate keys
function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  return setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

// Play sound based on random number
function playSound(name) {
  return $(`#${name}`).ready(() => {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
  });
}

// $("document").ready(function () {
//   const audio = new Audio("source.mp3");
//   audio.play();
// });
