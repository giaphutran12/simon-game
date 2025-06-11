let gamePattern = [];
let buttonColours = ["red", "green", "blue", "yellow"];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;


$("body").keydown(function () {
  if (!gameStarted) {
    startGame();
  }
});

function nextSequence() {
  levelUp();

  let randomColor=pickRandomColorForGamePattern();

  animatePressForNPC(randomColor);
  playAudio(randomColor);
}

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  animatePress(userChosenColor);
  playAudio(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $("#" + currentColor)
    .fadeOut(100)
    .fadeIn(100);
  addBackgroundFlash(currentColor);
}
function checkAnswer(currentIndex) {
  if (answerMatches(currentIndex)) {
    console.log("success");
    if (reachedEndOfSequence()) {
      moveOnToNextSequence();
    }
  } else {
    console.log("wrong");
    playAudio("wrong");   
    flashGameOverScreen();
    $("#level-title").text("Game over, press any key to restart");
    gameOver();
  }
}

function gameOver(){
  level=0;
  gamePattern=[];
  gameStarted=false;
}


//----------------------------------------------------------------------------
//END OF MAIN CODE
//----------------------------------------------------------------------------


//HELPER FUNCTIONS
function levelUp() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
}
function animatePressForNPC(colorToAnimmate) {
  $("#" + colorToAnimmate)
    .fadeOut(100)
    .fadeIn(100);
  
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function playAudio(colorToPlay) {
  let audio = new Audio("./sounds/" + colorToPlay + ".mp3");
  audio.play();
}

function addBackgroundFlash(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startGame() {
  $("#level-title").text("Level " + level);
  nextSequence();
  gameStarted = true;
}

function pickRandomColorForGamePattern() {
  let randomNumber = getRandomInt(4);
  let randomColor = buttonColours[randomNumber];
  gamePattern.push(randomColor);
  return randomColor;
}
function answerMatches(currentIndex) {
  return userClickedPattern[currentIndex] === gamePattern[currentIndex];
}
function reachedEndOfSequence() {
  return userClickedPattern.length === gamePattern.length;
}
function moveOnToNextSequence() {
  setTimeout(function () {
    nextSequence();
  }, 1000);
}

function flashGameOverScreen(){
 $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
}
