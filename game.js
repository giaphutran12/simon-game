let gamePattern = [];
let buttonColours = ["red", "green", "blue", "yellow"];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

function nextSequence(colorChosen) {
  gameStarted = true;
  gamePattern.push(colorChosen);
  $("#" + colorChosen)
    .fadeOut(100)
    .fadeIn(100);
  playAudio(colorChosen);
  if (gameStarted === true) {
    $("#level-title").text("Level " + level);
    level++;
  }
  userClickedPattern.push(colorChosen);
  animatePress(colorChosen);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function playAudio(colorToPlay) {
  let audio = new Audio("./sounds/" + colorToPlay + ".mp3");
  audio.play();
}
$("body").keydown(function () {
  if (gameStarted === false) nextSequence();
});
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  nextSequence(userChosenColor);
  console.log(userClickedPattern);
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
    
}