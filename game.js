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
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);

    // Play sound when clicked
    const audio = new Audio(`sounds/${userChosenColour}.mp3`);
    audio.play();

    checkAnswer(userChosenColour); //check answer after user clicked
  });

  $(`h1`).text(`Level ${++level}`); //Incementing levels

  // Play sound based on random number
  function playSound(name) {
    return $(`#${name}`).ready(() => {
      const audio = new Audio(`sounds/${name}.mp3`);
      audio.play();
    });
  }

  function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");
    return setTimeout(function () {
      $(`#${currentColour}`).removeClass("pressed");
    }, 100);
  }

  // checking answers
  function checkAnswer(currentLevel) {
    currentLevel = currentLevel.toString();
    let Level = userClickedPattern.lastIndexOf(currentLevel);

    if (gamePattern.indexOf(currentLevel) === gamePattern.length - 1) {
      console.log(`success`);
    } else {
      console.log(`wrong`);
    }
  }
}

// $("document").ready(function () {
//   const audio = new Audio("source.mp3");
//   audio.play();
// });
