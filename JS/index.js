
/* ----------------- This is the algorithm for the assignment counter ------------------- */
let assignCount = 0; // Initialize the variable
let x = 1;
let z =1;
let achieveAudio1 = 0;
let achieveAudio2 = 0;
let achieveAudio3 = 0;
let achieveAudio4 = 0;
let achieveAudio5 = 0;
let finalMsg = 0;
let introMsg = 0;
function AssignCounter() {
 
    assignCount += x; // Increment the variable by 1
    document.getElementById("display").textContent = assignCount + " Complete Assignments"; // Display the variable in the HTML
    document.getElementById("display2").textContent = x + " assignments per second"; // Display the variable in the HTML
}

function achievements() {
    if (assignCount > 9) {
        // Displays achievement image when assignment count is 10
        let achievements = document.getElementById('achievement1').src = 'Images/achievement1.png';
        if (achieveAudio1===0){
            //if the achievement audio hasnt played before (it equals 0) then play the audio and then add one making it equal to 1 so it does not repeat 
        var sound = new  Audio("audio/achievement.wav");  
    sound.play();
    achieveAudio1 += z;
        }
    }
    if (assignCount  > 99) {

        // Displays achievement image when assignment count is 100 or over
        let achievements = document.getElementById('achievement2').src = 'Images/achievement2.png';
        if (achieveAudio2===0){
            //if the achievement audio hasnt played before (it equals 0) then play the audio and then add one making it equal to 1 so it does not repeat
            var sound = new  Audio("audio/achievement.wav");  
        sound.play();
        achieveAudio2 += z;
        }

    }
    if (assignCount > 999) {
        // Displays achievement image when assignment count is 1000 or over
        let achievements = document.getElementById('achievement3').src = 'Images/achievement3.png';
        if (achieveAudio3===0){
            //if the achievement audio hasnt played before (it equals 0) then play the audio and then add one making it equal to 1 so it does not repeat
            var sound = new  Audio("audio/achievement.wav");  
        sound.play();
        achieveAudio3 += z;
    }
}
    if (assignCount > 9999) {
        
        // Displays achievement image when assignment count is 10000 or over
        let achievements = document.getElementById('achievement4').src = 'Images/achievement4.png';
        if (achieveAudio4===0){
            //if the achievement audio hasnt played before (it equals 0) then play the audio and then add one making it equal to 1 so it does not repeat
            var sound = new  Audio("audio/achievement.wav");  
        sound.play();
        achieveAudio4 += z;
        }

    }
    if (assignCount > 499999) {
        // Displays achievement image when assignment count is 500000 or over
        let achievements = document.getElementById('achievement5').src = 'Images/achievementHalfway.png';
        if (achieveAudio5===0){
            //if the achievement audio hasnt played before (it equals 0) then play the audio and then add one making it equal to 1 so it does not repeat
            var sound = new  Audio("audio/achievement.wav");  
        sound.play();
        achieveAudio5 += z;

    }
}

}
function upgrades() {
    if (assignCount > 49 ) {
        // Make image change to colour when upgrade avaliable (count is 150) and when x=1 (the previous x value)
        let achievements = document.getElementById('upgrade1').src = 'Images/lancasterColour.png';

    }
    if (assignCount > 99 ) {
        // Make image change to colour when upgrade avaliable (count is 1000) and when x=1 (the previous x value)
        let achievements = document.getElementById('upgrade2').src = 'Images/josephColour.png';

    }
    if (assignCount > 49999 ) {
        // Make image change to colour when upgrade avaliable (count is 50000)
        let achievements = document.getElementById('upgrade3').src = 'Images/bluColour.png';

    }
    if (assignCount > 499999) {
        // Make image change to colour when upgrade avaliable (count is 500000)
        let achievements = document.getElementById('upgrade4').src = 'Images/caffeineColour.png';

    }
    

}
function upgrade1(){
    if(assignCount > 49){
        //if 150 or more assignments completed then allow upgrade to run making x=2 (doubling speed)
    x=20;
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
        x=5000;
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
        x=50000;
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
        x=100000;

        var sound = new  Audio("audio/DTTG_buttonClick.mp3");  
        //play button click sound
    sound.play();
        }
         else{
             //if not 500000 assignments reached tell them they dont have enough
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
 
// Add this function call to check the assignment count
 function checkForEndCut() {
    if (assignCount >= 1000000) { // Check if assignment count is 1 million or more
        if (finalMsg===0){
            //if the message hasnt been sent before (it equals 0) then send the message and making it equal to 1 so it does not repeat
            alert("Is this really the end? Did we really do it? I guess theres only one way to find out")
          finalMsg+= z;
    }
        document.body.classList.add('fade-out'); // Add the fade-out class to the body
        setTimeout(function() {
            window.location.href = "endCut.html"; // Redirect to the end cutscene after fade-out
        }, 100); // Wait for 1 second (1000 milliseconds) to complete the fade-out effect
    }
}
 
// Attach event listener to play/pause button
document.addEventListener('DOMContentLoaded', function() {
    var playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.addEventListener('click', togglePlayPause);
});

function instructions(){
    if (assignCount===1 && introMsg === 0)
        {
            alert("Hello, I didn't see you there")
            alert("Are you also stuck here?")
            alert("Don't worry we have a plan to get out")
            alert("Mr Lancaster's system is only able to store 1000000 assignments each")
            alert("So if we reach that then we'll be free!")
            alert("Shh, he's coming. Type as quickly as you can and get the upgrades as they appear")
            alert("Last thing before I go, the only music Mr Lancaster allows is this weird boppy music which you can find in the corner")
            alert("Good luck, see you on the other side!")
            introMsg += z;
        }
}

setInterval(AssignCounter, 1000)
setInterval(achievements, 1)
setInterval(instructions, 1)
setInterval(upgrades, 1)
setInterval(checkForEndCut, 1000); // Check every second if player reached 1 million
//starts the different functions that need to run


