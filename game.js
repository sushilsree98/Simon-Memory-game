var color=["green","blue","red","yellow"];
var questArray=[];
var answerArray=[];
var level=0;
var started =false;

$(document).keypress(function(){
  if(!started){
    $("h1").text("Level"+level);
      sequence();
      started=true;
    }
});

$("#start").click(function(){
    $("h1").text("Level"+level);

      sequence();
      started=true;

});

$(".btn").click(function(){
  var selectedColor=$(this).attr("id");
  answerArray.push(selectedColor);
  checkAnswer(answerArray.length-1);
});

function checkAnswer(currentlevel){
  if(answerArray[currentlevel]==questArray[currentlevel]){
    console.log("success");
    if(answerArray.length==questArray.length){
      setTimeout(function(){
        sequence();
      },1000);
    }
    }
    else{
    gameOver();
  }
}
function gameOver(){

  $("body").addClass("game-over");
  var wrongAudio= new Audio("sounds/wrong.mp3");
  wrongAudio.play();
  $("h1").text("press a key to start again");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  level=0;
  answerArray=[];
  questArray=[];
  started=false;
  $(".myButton").removeClass("visibleButton");

}

function sequence(){
  $(".myButton").addClass("visibleButton");
  answerArray=[];
  level++;
  $("h1").text("Level "+level);
  setTimeout(function(){
    var x = Math.floor(Math.random()*4);
    var xRandom=color[x];
    questArray.push(xRandom);
    select(x);
  },1000);


}



function select(x){
  switch(x){
    case 0:green();
            break;

    case 1:blue();
            break;

    case 2:red();
            break;

    case 3:yellow();
            break;
  }
}
$("#green").click(green);
$("#blue").click(blue);
$("#red").click(red);
$("#yellow").click(yellow);


//functions section
//greenAudio
function green()
  {
    $(".green").addClass("pressed");
    setTimeout(function(){
       $(".green").removeClass("pressed");
     }, 100);
     var greenAudio = new Audio("sounds/green.mp3");
     greenAudio.play();
  }

  //blueAudio
  function blue(){
    $(".blue").addClass("pressed");
    setTimeout(function(){
       $(".blue").removeClass("pressed");
     }, 100);
     var blueAudio = new Audio("sounds/blue.mp3");
     blueAudio.play();
  }

//redAudio
function red(){
  $(".red").addClass("pressed");
  setTimeout(function(){
     $(".red").removeClass("pressed");
   }, 100);
   var redAudio = new Audio("sounds/red.mp3");
   redAudio.play();
}

//yellowAudio
function yellow(){
  $(".yellow").addClass("pressed");
  setTimeout(function(){
     $(".yellow").removeClass("pressed");
   }, 100);
   var greenAudio = new Audio("sounds/yellow.mp3");
   greenAudio.play();
}
