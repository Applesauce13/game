
/* ----------------- This is the algorithm for the assignment counter ------------------- */
let assignCount = 1000000; // Initialize the variable
let x = 1;
let z =1;
let achieveAudio1 = 0;
let achieveAudio2 = 0;
let achieveAudio3 = 0;
let achieveAudio4 = 0;
let achieveAudio5 = 0;
function AssignCounter() {
 
    assignCount += x; // Increment the variable by 1
    document.getElementById("display").textContent = assignCount + " Complete Assignments"; // Display the variable in the HTML
    document.getElementById("display2").textContent = x + " assignments per second"; // Display the variable in the HTML
}

function achievements() {
    //display all achievements without sound
    if (assignCount > 9) {
        let achievements = document.getElementById('achievement1').src = 'Images/achievement1.png';
    }
    if (assignCount  > 99) {
        let achievements = document.getElementById('achievement2').src = 'Images/achievement2.png';
    }
    if (assignCount > 999) {
        let achievements = document.getElementById('achievement3').src = 'Images/achievement3.png';
}
    if (assignCount > 9999) {
        let achievements = document.getElementById('achievement4').src = 'Images/achievement4.png';
    }
    if (assignCount > 49999) {
     let achievements = document.getElementById('achievement5').src = 'Images/achievementHalfway.png';
     }
}

function upgrades() {
    if (assignCount > 49) {
        
        let achievements = document.getElementById('upgrade1').src = 'Images/lancasterColour.png';

    }
    if (assignCount > 99 ) {
       
        let achievements = document.getElementById('upgrade2').src = 'Images/josephColour.png';

    }
    if (assignCount > 49999 ) {
       
        let achievements = document.getElementById('upgrade3').src = 'Images/bluColour.png';

    }
    if (assignCount > 499999 ) {
        let achievements = document.getElementById('upgrade4').src = 'Images/caffeineColour.png';

    }
    

}
function upgrade1(){
    if(assignCount > 49){
        //if 150 or more assignments completed then allow upgrade to run making x=2 (doubling speed)
    x=2;
    var sound = new  Audio("audio/DTTG_buttonClick.mp3"); 
    //play button click sound 
    sound.play();
    }
     else{
        //if not 150 assignments reached tell them they dont have enough
        alert("You do not have enough completed assignments yet")
    }

}
function upgrade2(){
    if(assignCount > 99){
        //if 1000 or more assignments completed then allow upgrade to run making x=10
        x=1000;
        var sound = new  Audio("audio/DTTG_buttonClick.mp3");  
        //play button click sound
    sound.play();
        }
         else{
            //if not 1000 assignments reached tell them they dont have enough
            alert("You do not have enough completed assignments yet")
        }
}
function upgrade3(){
    if(assignCount > 49999){
         //if 50000 or more assignments completed then allow upgrade to run making x=25
        x=10000;
        var sound = new  Audio("audio/DTTG_buttonClick.mp3");  
        //play button click sound
    sound.play();
        }
         else{
            //if not 50000 assignments reached tell them they dont have enough
            alert("You do not have enough completed assignments yet")
        }
}
function upgrade4(){
    if(assignCount > 499999){
        //if 500000 or more assignments completed then allow upgrade to run making x=50
        x=50000;
        var sound = new  Audio("audio/DTTG_buttonClick.mp3");  
        //play button click sound
    sound.play();
        }
         else{
    
            alert("You do not have enough completed assignments yet")
        }
}
document.addEventListener('keydown', function () {
    assignCount += 1; // Increment when any key is pressed
    document.getElementById("display").textContent = assignCount + " Complete Assignments"; // Update the display immediately
});

function togglePlayPause() {
    var audio = document.getElementById('myAudio');
    var playPauseButton = document.getElementById('playPauseButton');
    
    if (audio.paused) {
        audio.play().then(() => {
            playPauseButton.textContent = 'Pause Music';
        }).catch(function(error) {
            // Handle any errors, such as autoplay restrictions
            console.log('Autoplay was prevented. User must interact with the page first.');
        });
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play Music';
    }
}
 
// Attach event listener to play/pause button
document.addEventListener('DOMContentLoaded', function() {
    var playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.addEventListener('click', togglePlayPause);
});

setInterval(AssignCounter, 1000)
setInterval(achievements, 1)
setInterval(upgrades, 1)
//starts the different functions that need to run