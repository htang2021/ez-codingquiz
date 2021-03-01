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
var headerSection = document.querySelector(".top-row");
var introTitle = document.querySelector(".introTitle");
var intro = document.querySelector(".intro");
var writeUp = document.getElementById("intro-writeup");
var choiceContainer = document.getElementById("choiceContainer");
var quizQuestion = document.getElementById("quiz-question");
var initializeTimer = document.getElementById("countdown-timer");
var startButtonContainer = document.querySelector(".bottom-section");
var startButton = document.getElementById("start-button");
var bottomContainer = document.querySelector(".answerContainer");
var showResult = document.getElementById("result-response");
var answerChoicesContainer =document.querySelector(".answer-choices");
var numberOfQuestions = codingQuiz.length;
var olParentNode = document.getElementById("answers-list");
var quizForm = document.getElementById("quiz-form");
var currentQuestion = 0;
var timeAllowed = 0;
var timeLeft;
let score = 0;


//Check if countdown timer is still > 0
var stillTimeLeft = function(timeAllowed) {
    timeAllowed > 0? true : false;
}

//Landing Page to start/re-start Coding Quiz Challenge **************
var landingPage = function() {
    document.querySelector(".top-section").style.width = "60%";
    document.querySelector(".intro").style.width = "60%";
    document.querySelector(".bottom-section").style.width = "60%";
    introTitle.style.textAlign = "center";
    introTitle.textContent = "Coding Quiz Challenge";
    writeUp.textContent = introduction;
    initializeTimer.textContent = "Time: 0";
    startButtonContainer.innerHTML = "<button id='start-button'>Start Quiz</button>";
};

var checkAnswer = () => {

    let numOfChoices = codingQuiz[currentQuestion].choices.length;
    if (stillTimeLeft){
        for (let j=0; j<numOfChoices; j++) {

            //map j number of <button> elements with j index id attribute
            //and listen for click events for each of the <button> elements
            //through j loop
            var buttonClicked = document.getElementById("answer-choice"+[j]);
            buttonClicked.addEventListener("click", function() {
                startButtonContainer.innerHTML='';
                if(codingQuiz[currentQuestion].choices[j] === codingQuiz[currentQuestion].answer) {
                    bottomContainer.innerHTML = "<p id='result-response'>Correcto!</p>";
                } else {
                    bottomContainer.innerHTML = "<p id='result-response'>Wrong!</p>";
                    timeAllowed -= 60;
                }
                currentQuestion++;
                if (currentQuestion < codingQuiz.length) {
                    removeAnswerChoices(currentQuestion-1);
                    nextQuestion(currentQuestion);
                } else {
                    quizCompleted();
                }
                    
            }); 
        }
    } else {
        //clearInterval(timeLeft);
        quizCompleted();
    }
}

var nextQuestion = (currentQuestion) => {
    quizQuestion.textContent = codingQuiz[currentQuestion].question;
    let numOfChoices = codingQuiz[currentQuestion].choices.length;
    if (stillTimeLeft) {
        for (let j=0; j<numOfChoices; j++) {
            //dynamically create elements for each of the answer choices
            var answerChoicesEl = document.createElement("li");
            var answerChoicesButtonsEl = document.createElement("button");
            answerChoicesButtonsEl.className="btn";
            answerChoicesButtonsEl.id="answer-choice"+[j];
            answerChoicesButtonsEl.type="button";
            answerChoicesButtonsEl.textContent = codingQuiz[currentQuestion].choices[j];
            //appending created elements to the parent node - OL (ordered list)
            answerChoicesEl.appendChild(answerChoicesButtonsEl); //button to li
            olParentNode.appendChild(answerChoicesEl); //li to ol
        }
        checkAnswer();
    } else {
        //clearInterval(timeLeft);
        quizCompleted();
    }
}

// remove list of answer choices once answer is chosen
var removeAnswerChoices = (currentQuestion) => {
    let numOfChoices = codingQuiz[currentQuestion].choices.length;
    console.log(`current question is ${currentQuestion} and the length is ${numOfChoices}`);
    for (let j=0; j < numOfChoices; j++) {
        if (olParentNode.hasChildNodes()) {
            olParentNode.removeChild(olParentNode.childNodes[0]);
        }
    }
}

var quizCompleted = () => {
    clearInterval(timeLeft);
    score = timeLeft; 
    quizQuestion.textContent = "";
    choiceContainer.textContent = "";
    bottomContainer.textContent = "";
    quizQuestion.textContent = "All Done!";
    choiceContainer.innerHTML = `<p>Your final score is ${timeAllowed}.
    <br>
    <form id="submit-form">Enter Initials: 
    <input type="text" id="txtInitials" name="txtInitials">
    <input type="button" id="btnSubmit" value="Submit">
    </form>`;

    // var userInitialsInputForm = document.createElement("form");
    // userInitialsInputForm.id = "submit-form";

    // var userInitialInputField = document.createElement("input");
    // userInitialInputField.type = "text";
    // userInitialInputField.id = "initials";
    // userInitialInputField.name = "initials";

    // var userInitialsSubmitButton = document.createElement("button");
    // userInitialsSubmitButton.type = "submit";
    // userInitialsSubmitButton.value = "Submit";

    // userInitialsInputField.appendChild(userInitialsSubmitButton);
    // userInitialsInputForm.appendChild(userInitialInputField);

    //submitInitialsAndScore();
    var initialSubmit = document.getElementById("submit-form");
    var btnSubmit = document.getElementById("btnSubmit");
    var txtInitials = document.getElementById("txtInitials");
    //txtInitials.value = "HT_AutoAssign";
    //var userInitials = document.querySelector("input[name='initials']").value;
    //var userInitials = document.querySelector("#initials").value;
    btnSubmit.addEventListener("click", (function(txtInitials) {
        headerSection.style.visibility = "hidden";
        quizQuestion.textContent = "";
        choiceContainer.textContent = "";
        bottomContainer.textContent = "";

        quizQuestion.textContent = "High Scores";
        //var userInitials = document.querySelector("input[name='initials']").value;
        var localtxtInitials = document.getElementById("txtInitials");
        var userInitials = txtInitials.value;
        choiceContainer.innerHTML = `<li>${userInitials} - ${timeAllowed+1}</li><br>
            <button type="button" value="goBack" id="goBack">Go Back</button>
            <button type="button" value="clearScore" id="clearScore">Clear High Scores</button>`;
    })(txtInitials));
    //storeScore();
    window.onload = function() {
        var goBackButton = document.getElementById("goBack");
        var clearScore = document.getElementById("clearScore");
        goBackButton.addEventListener("click", landingPage);// {
            // quizQuestion.textContent = "";
            // choiceContainer.textContent = "";
            // bottomContainer.textContent = "";
        //     landingPage();
        // });
        clearScore.addEventListener("click", function() {
            quizQuestion.textContent = "";
            choiceContainer.textContent = "";
            bottomContainer.textContent = "";
            quizQuestion.textContent = "High Scores";
        choiceContainer.innerHTML = `<li>${userInitials}</li>`;
        });
    }
}

// var storeScore = function() {
//     var goBackButton = document.getElementById("goBackButton");
//     var clearScore = document.getElementById("clearScore");
//     goBackButton.addEventListener("click", landingPage);// {
//         // quizQuestion.textContent = "";
//         // choiceContainer.textContent = "";
//         // bottomContainer.textContent = "";
//     //     landingPage();
//     // });
//     clearScore.addEventListener("click", function() {
//         quizQuestion.textContent = "";
//         choiceContainer.textContent = "";
//         bottomContainer.textContent = "";
//         quizQuestion.textContent = "High Scores";
//     choiceContainer.innerHTML = `<li>${userInitials}</li>`;
//     });
// }


// var storeScore = function() {
//     quizQuestion.textContent = "";
//     choiceContainer.textContent = "";
//     bottomContainer.textContent = "";
//     quizQuestion.textContent = "High Scores";
//     choiceContainer.innerHTML = "<li>userInitials</li>"
// }

// //Check if countdown timer is still > 0
// var stillTimeLeft = function(timeAllowed) {
//     timeAllowed > 0? true : false;
// }

//Counting down from 75 seconds
var countDownClock = function() {
    timeAllowed = 3000;
    var timeLeft = setInterval(function() {
        if (timeAllowed < 0) {
            clearInterval(timeLeft);
            timeAllowed = 0;
            quizCompleted();
            //clearInterval(timeLeft);
        } else {
            document.getElementById("timer").innerHTML = "Time: " + timeAllowed;
        }
        timeAllowed -=1;
        stillTimeLeft(timeAllowed);
    }, 1000);
}

//Quiz has begun! *****************************************

function quizStarted() {
    //clear the content in the container
    intro.removeChild(writeUp);
    startButtonContainer.innerHTML='';
    //Timer starts ***
    countDownClock();
    if (stillTimeLeft) {
        nextQuestion(currentQuestion);
    } else {
         console.log("Time has run out");
    };
}



//Click the button to start the quiz!!  ****************
var startingQuiz = function() {
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", quizStarted);

}

landingPage();
startingQuiz ();




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
