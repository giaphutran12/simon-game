
let gamePattern=[];
let buttonColours=["red","green","blue","yellow"];
let userClickedPattern=[];

function nextSequence(){
let randomNumber=getRandomInt(4);
let randomChosenColour=buttonColours[randomNumber];
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
// $("body").click(function(){nextSequence()});
$(".btn").click(function(){
let userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
console.log(userClickedPattern);
$('#'+userChosenColor).fadeOut(100).fadeIn(100);
playAudio(userChosenColor);
});
