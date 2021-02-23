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
        "What type of data is 'Hello World!'", 
        "To create a for loop, which expression is used to decrease your index value by 1?", 
        "How would you answer if you are asked about the quality of the UCB Coding Bootcamp?", 
        "To stage your code changes, what is the git command used?"
    ],
    answerChoices: [
        ["1. String", "2. Boolean", "3. Number", "4. Date"], 
        ["1. Element", "2. i++", "3. i--", "4. i += 4"], 
        ["1. Nice", "2. Very Nice", "3. Not Nice", "4. So So"], 
        ["1. git add", "git commit", "3. git push", "4. git clone"]
    ],
    answers: [1, 6, 12, 15]
};

var numberOfQuestions = codingQuiz.questions.length;
var ulParentNode = document.getElementById("answers-list");

// Create the listed answer choices for [i] question with [j] number of choices
var createAnswerChoices = function() {
    for (let i=0; i < 1; i++) {
        for (let j=0; j < 4; j++) {
            var answerChoicesEl = document.createElement("li");
            var answerChoicesButtonsEl = document.createElement("button");
            answerChoicesButtonsEl.id="answer-choice"+[j];
            answerChoicesButtonsEl.textContent = codingQuiz.answerChoices[i][j];
            answerChoicesEl.appendChild(answerChoicesButtonsEl);
            ulParentNode.appendChild(answerChoicesEl);
        }
    }
}

// remove list of answer choices once answer is chosen
var removeAnswerChoices = function(i, numAnswerChoices) {
    var removeListItem = document.getElementById("answers-list");
    for (let j=0; j < numAnswerChoices; j++) {
        removeListItem.removeChild(removeListItem.childNodes[0]);
    }
}

// Check to see if quiz question has been answered
var isQuestionAnswered = function() {

    //compare clicked answer versus actual to determine "Right" or "Wrong"

}

// Determining if question answered is correct or wrong!
var answeredCorrectOrWrong = function() {

}

//function to cycle through the list of questions that can be manipulated freely***********

var startQuiz = function() {
    var numberOfQuestions = codingQuiz.questions.length;
    //var answersChoicesEl = document.querySelector("#answers-list");
    for (let i=0; i < numberOfQuestions; i++) {
        document.getElementById("quiz-question").innerHTML = codingQuiz.questions[i];
        var numAnswerChoices = codingQuiz.answerChoices[i].length;

        var listChoice = document.getElementById("list-choice");
        for (let j=0; j < numAnswerChoices; j++){
            
            var addListItem = document.createElement("LI");
            addListItem.id = "listed-choices";
            var addBtnItem = document.createElement("button");
            document.getElementById("listed-choices").appendChild(addBtnItem);

            addListItem.innerHTML = codingQuiz.answerChoices[i][j];
            document.getElementById("answers-list").appendChild(addListItem);

            
            document.getElementById()
            //buttons.innerHTML = codingQuiz.answerChoices[i][j];

        }
        // if user answered to question, remove the list of choices and onto the next
        isQuestionAnswered ();
        var answered=true;
        if (answered) {
            removeAnswerChoices(i, numAnswerChoices);
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

