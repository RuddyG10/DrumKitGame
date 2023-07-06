var buttons = document.querySelectorAll(".drum");

buttons.forEach(function(button)
{
    button.addEventListener("click", function(){
        
        // if(button.classList.contains("w")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3');
            
        // }
        // else if(button.classList.contains("a")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3');
        // }
        // else if(button.classList.contains("s")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3');
        // }
        // else if(button.classList.contains("d")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3');
        // }
        // else if(button.classList.contains("j")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3');
        // }
        // else if(button.classList.contains("k")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3');
        // }
        // else if(button.classList.contains("l")){
        //     audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3');
        // }
        var buttonInnerHTML = this.innerHTML;
        playDrumSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
    
});

//Event listener that detects the key and play the sound if the key is one of the buttons
document.addEventListener("keydown",function(e){
    playDrumSound(e.key);

    //Calls the animation button
    buttonAnimation(e.key);
});

/*
* This function receive the letter of the respective button as a parameter and then plays the sound.
*/
function playDrumSound(drum){

    var audio;

    switch (drum){
        case "w":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            audio = new Audio('/DrumKit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            break;
        default:
            
    }
    
}

//This function active the animation function adding the style class pressed.
function buttonAnimation(button){
    var activeButton = document.querySelector("."+button);
    activeButton.classList.add("pressed");

    //remove the class after 100 milisecs
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}