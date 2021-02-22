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

var codingQuiz = {
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

//function to cycle through the list of questions *************

var startQuiz = function() {
    var numberOfQuestions = codingQuiz.questions.length;
    //var answersChoicesEl = document.querySelector("#answers-list");
    for (let i=0; i < numberOfQuestions; i++) {
        document.getElementById("quiz-question").innerHTML = codingQuiz.questions[i];
        var numAnswerChoices = codingQuiz.answerChoices[i].length;

        var listChoice = document.getElementById("list-choice");
        for (let j=0; j < numAnswerChoices; j++){
            console.log("i is " + i + " and j is " + j);
            var addButton = document.createElement("LI");
            addButton.innerHTML = codingQuiz.answerChoices[i][j];
            document.getElementById("answers-list").appendChild(addButton);
            //buttons.innerHTML = codingQuiz.answerChoices[i][j];

        }
    }
}

startQuiz();
// create a function to check the answers


// create a function to cycle through the list of questions/objects

// var cyclingQuestions = function () {
//     // submit button is clicked, go to the next question
//     var clicked = true;
//     while (clicked) {
//         console.log("Next!");
//     }
//     return "Completed";
// }

// an object that stores user initials & scores

// var storeScoresObject = {
//     userInitials: [],
//     scores: []
// }

//function to store user initial & score into the object array

// var storeScores = function() {
//     var userScore = 83;
//     var initial = "HT";
//     var goOn = 1;
//     if (goOn === 1) {
//         storeScoresObject.scores.push(userScore);
//         storeScoresObject.userInitials.push(initial);
//     }
// }

// create a function that saves scores and user initials to localStorage

//localStorage.setItem(storeScoresObject);


//write to storage
//values stored in localStorage are of type string, thus need to convert to string

// var obj = {name: "Hung", age: 50, city: "Chicago"};
// var myJSON = JSON.stringify(obj);
// document.getElementById("#place-holder").innerHTML = myJSON;

// localStorage.setItem(scores);
// localStorage.setItem(userInitials);



// create a function to allow user to save score

//var submitToSaveScore = document.getElementById("submit-score");



// create a function to store scores 


// create a function to retrieve scores
//reads from storage

//localStorage.getItem(storeScoresObject);

