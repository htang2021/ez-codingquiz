// Create a function for countdown clock
//var countdownTimer = document.getElementById("timer");
var timeAllowed = 75;
var timeLeft = setInterval(function() {
    if (timeAllowed < 0) {
        clearInterval(timeLeft);
    } else {
        document.getElementById("timer").innerHTML = "Time: " + timeAllowed;
    }
    timeAllowed -=1;
}, 1000);


// Create a function to store list of questions & answers or objects

var myObj = {
    questions: [
        "winning number?", 
        "last number?", 
        "First name?", 
        "Last Name?"
    ],
    answerChoices: [
        [1, 2, 3, 4], 
        [5, 6, 7, 8], 
        [9, 10, 11, 12], 
        [13, 14, 15, 16]
    ],
    answers: [1, 6, 12, 15]
};

// create a function to check the answers


// create a function to cycle through the list of questions/objects
var cyclingQuestions = function () {
    // submit button is clicked, go to the next question
    var clicked = true;
    while (clicked) {
        console.log("Next!");
    }
    return "Completed";
}

// create a function to keep track of a score

var scores = [];
var userInitials = [];

var storeScores = function() {
    var userScore = 83;
    var initial = "HT";
    var goOn = 1;
    if (goOn === 1) {
        scores.push(userScore);
        userInitials.push(initial);
    }
}

// create a function that saves scores and user initials to localStorage

//write to storage
//values stored in localStorage are of type string, thus need to convert to string
var obj = {name: "Hung", age: 50, city: "Chicago"};
var myJSON = JSON.stringify(obj);
document.getElementById("#place-holder").innerHTML = myJSON;

localStorage.setItem(scores);
localStorage.setItem(userInitials);

//reads from storage
localStorage.getItem(scores);
localStorage.getItem(userInitials);



// create a function to allow user to save score

var submitToSaveScore = document.getElementById("submit-score");



// create a function to store scores 


// create a function to retrieve scores


