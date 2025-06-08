let gamePattern=[];
let buttonColours=["red","green","blue","yellow"];


function nextSequence(){
let ranndomNumber=getRandomInt(4);
let randomChosenColour=buttonColours[ranndomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
playAudio(randomChosenColour);
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function playAudio(colorToPlay){
let audio=new Audio("./sounds/"+colorToPlay+".mp3");
audio.play();
}
$("body").click(function(){nextSequence()});

