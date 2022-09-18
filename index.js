

var drum_buttons = document.querySelectorAll(".drum").length; // No. of buttons

function buttonAnimation(currentKey){
  var active_button = document.querySelector("." + currentKey);

  active_button.classList.add("pressed");

  setTimeout(function(){
    active_button.classList.remove("pressed");
  }, 100);
}

function make_sound(key){ //function to play sound with keyboard input
  switch(key){
    case 'w':
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
    case 'a':
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
    case 's':
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
    case 'd':
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
    case 'j':
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;
    case 'k':
        var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;
    case 'l':
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;

    default:
        console.log(this.innerHTML)
  }
}

//Event listener to all the buttons
for(var i = 0 ; i < drum_buttons ; i++ ){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML; //get the clicked innerHTML
    make_sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });


}


document.addEventListener("keydown", function(event){
  var key = event.key;
  make_sound(key);
  buttonAnimation(key);
  console.log(key);
});
