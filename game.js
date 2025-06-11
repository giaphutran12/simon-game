let gamePattern = [];
let buttonColours = ["red", "green", "blue", "yellow"];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

function nextSequence() {

  
  userClickedPattern=[];
  level++;
  $('#level-title').text("Level "+level);
  let randomNumber=getRandomInt(4);
  let randomColor=buttonColours[randomNumber];
  gamePattern.push(randomColor);
  $("#" + randomColor)
    .fadeOut(100)
    .fadeIn(100);
  playAudio(randomColor);
  

  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function playAudio(colorToPlay) {
  let audio = new Audio("./sounds/" + colorToPlay + ".mp3");
  audio.play();
}
$("body").keydown(function () {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted=true;

  }
});
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor)
  
 
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
  console.log(userClickedPattern);
});

function animatePress(currentColor) {
   $("#" + currentColor)
    .fadeOut(100)
    .fadeIn(100);
  playAudio(currentColor);
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentIndex){
    if (userClickedPattern[currentIndex]===gamePattern[currentIndex]){
      console.log("success");
       if (userClickedPattern.length===gamePattern.length){
     
      setTimeout(function(){
        nextSequence();
      },1000)
    }
    }else{
      console.log ("wrong");
    }
   
}