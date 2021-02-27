// Array of objects to keep questions, choices and answers together ******

var codingQuiz = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

//Assiging elements to global variables **************

const introduction = "Try to answer the following code-related questions " +
    "within the time limit. Keep in mind that incorrect answers will " +
    "penalize your score/time by ten seconds!";
var introTitle = document.querySelector(".introTitle");
var intro = document.querySelector(".intro");
var writeUp = document.getElementById("intro-writeup");
var quizQuestion = document.getElementById("quiz-question");
var initializeTimer = document.getElementById("countdown-timer");
var startButtonContainer = document.querySelector(".bottom-section");
var startButton = document.getElementById("start-button");
var rightOrWrong = document.querySelector(".answerContainer");
var showResult = document.getElementById("result-response");
var answerChoicesContainer =document.querySelector(".answer-choices");
var numberOfQuestions = codingQuiz.length;
var olParentNode = document.getElementById("answers-list");
var quizForm = document.getElementById("quiz-form");

var timeAllowed;

//Landing Page to start/re-start Coding Quiz Challenge **************
var landingPage = function() {
    document.querySelector(".top-section").style.width = "60%";
    document.querySelector(".intro").style.width = "60%";
    document.querySelector(".bottom-section").style.width = "60%";
    introTitle.textContent = "Coding Quiz Challenge";
    writeUp.textContent = introduction;
    initializeTimer.textContent = "Time: 0";
    startButtonContainer.innerHTML = "<button id='start-button'>Start Quiz</button>";
    return;
};

// Check if answer is correct (return true) or wrong (return false)
// var checkAnswer = function(){
//     console.log(`Clicked ${codingQuiz[i].choices[j]}`);
//     return false;
// }

// remove list of answer choices once answer is chosen
var removeAnswerChoices = function() {
    for (let j=0; j < 4; j++) {
        if (ulParentNode.hasChildNodes()) {
            ulParentNode.removeChild(ulParentNode.childNodes[0]);
        }
    }
}

//Quiz has begun! *****************************************

function quizStarted() {
    //clear the content in the container
    intro.removeChild(writeUp);
    //startButtonContainer.removeChild(startButton);
    //Timer starts ***
    timeAllowed = 75;
    var timeLeft = setInterval(function() {
        if (timeAllowed < 0) {
            clearInterval(timeLeft);
        } else {
            document.getElementById("timer").innerHTML = "Time: " + timeAllowed;
        }
        timeAllowed -=1;
    }, 1000);

    // Loops thru questions in the codingQuiz array *********
    //while (timeAllowed > 0) {
        for (let i=0; i < codingQuiz.length; i++) {
            quizQuestion.textContent = codingQuiz[i].question;
            let numOfChoices = codingQuiz[i].choices.length;
            
            //loop thru and display the choices and listen for click based on ID
            for (let j=0; j<numOfChoices; j++) {
                //dynamically create elements for each of the answer choices
                var answerChoicesEl = document.createElement("li");
                var answerChoicesButtonsEl = document.createElement("button");
                answerChoicesButtonsEl.className="btn";
                answerChoicesButtonsEl.id="answer-choice"+[j];
                answerChoicesButtonsEl.type="button";
                answerChoicesButtonsEl.textContent = codingQuiz[i].choices[j];
                //appending created elements to the parent node - OL (ordered list)
                answerChoicesEl.appendChild(answerChoicesButtonsEl); //button to li
                olParentNode.appendChild(answerChoicesEl); //li to ol
                //answerChoicesContainer.appendChild(olParentNode); //ol to container

                var buttonClicked = document.getElementById("answer-choice"+[j]);
                buttonClicked.addEventListener("click", function() {
                    startButtonContainer.innerHTML='';
                    if(codingQuiz[i].choices[j] === codingQuiz[i].answer) {
                        rightOrWrong.innerHTML = "<p id='result-response'>Correcto!</p>";
                    } else {
                        rightOrWrong.innerHTML = "<p id='result-response'>Wrong!</p>";
                    }
                });
            }
            
            //removeAnswerChoices();
        }
    //}
    console.log("Time has run out");


}



//Click the button to start the quiz!!  ****************
var startingQuiz = function() {
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", quizStarted);

}

landingPage();
startingQuiz ();



// remove list of answer choices once answer is chosen
var removeAnswerChoices = function(i, numAnswerChoices) {
    var ulParentNode = document.getElementById("answers-list");
    for (let j=0; j < 4; j++) {
        if (ulParentNode.hasChildNodes()) {
            ulParentNode.removeChild(ulParentNode.childNodes[0]);
        }
    }
}


// Determining if question answered is correct or wrong!
var answeredCorrectOrWrong = function() {

}

//function to cycle through the list of questions that can be manipulated freely***********

var startQuiz = function() {
    var numberOfQuestions = codingQuiz.length;
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

//startQuiz();
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

