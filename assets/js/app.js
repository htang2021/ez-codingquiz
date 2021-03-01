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

// Assiging elements to global variables **************************
const introduction = "Try to answer the following code-related questions " +
    "within the time limit. Keep in mind that incorrect answers will " +
    "penalize your score/time by ten seconds!";
var headerSection = document.querySelector(".top-row");
var introTitle = document.querySelector(".introTitle");
//var intro = document.getElementById("choiceContainer");
var writeUp = document.getElementById("intro-writeup");
var choiceContainer = document.getElementById("choiceContainer");
var quizQuestion = document.getElementById("quiz-question");
var initializeTimer = document.getElementById("countdown-timer");
var startButtonContainer = document.querySelector(".bottom-section");
var startButton = document.getElementById("start-button");
var bottomContainer = document.querySelector(".answerContainer");
//var showResult = document.getElementById("result-response");
//var answerChoicesContainer =document.querySelector(".answer-choices");
//var numberOfQuestions = codingQuiz.length;
var olParentNode = document.getElementById("answers-list");
//var quizForm = document.getElementById("quiz-form");
var currentQuestion = 0;
var timeAllowed = 0;
let scoreBoard=[];
let score = 0;
let scoreIndex = 0;

// Check if countdown timer is still > 0 *******************
var stillTimeLeft = function(timeAllowed) {
    timeAllowed > 0? true : false;
}

// Landing Page to start/re-start Coding Quiz Challenge **************
const codingQuizChallenge = function() {
    document.querySelector(".top-section").style.width = "60%";
    document.querySelector(".intro").style.width = "60%";
    document.querySelector(".bottom-section").style.width = "60%";
    introTitle.style.textAlign = "center";
    introTitle.textContent = "Coding Quiz Challenge";
    writeUp.textContent = introduction;
    initializeTimer.textContent = "Time: 0";
    startButtonContainer.innerHTML = "<button id='start-button'>Start Quiz</button>";
    startingQuiz ();
};

// Check if answer selected is correct ************************
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
                    timeAllowed -= 10;
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

// Cycle through list of questions in the ojbect array ******************
var nextQuestion = (currentQuestion) => {
    quizQuestion.textContent = codingQuiz[currentQuestion].question;
    let numOfChoices = codingQuiz[currentQuestion].choices.length;
    // introTitle.removeAttribute("style");
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

// remove list of answer choices once answer is chosen *******************
var removeAnswerChoices = (currentQuestion) => {
    let numOfChoices = codingQuiz[currentQuestion].choices.length;
    console.log(`current question is ${currentQuestion} and the length is ${numOfChoices}`);
    for (let j=0; j < numOfChoices; j++) {
        if (olParentNode.hasChildNodes()) {
            olParentNode.removeChild(olParentNode.childNodes[0]);
        }
    }
}

// Click which option, to restart or to clear score *****************
var goBackOrClear = function(goBackButton, clearScore) {

    goBackButton.addEventListener("click", function() {
        choiceContainer.textContent = ""
        // bottomContainer.textContent = "";
        // quizQuestion.textContent = "";
        headerSection.style.visibility = "visible";
        choiceContainer.innerHTML = "<p id='intro-writeup'></p>";
        codingQuizChallenge();
    });

    clearScore.addEventListener("click", function() {
        quizQuestion.textContent = "";
        choiceContainer.textContent = "";
        bottomContainer.textContent = "";
        quizQuestion.textContent = "High Scores";
        choiceContainer.innerHTML = `<li>${userInitials}</li>`;
    });
}

// Write userInitials & scores to array *************************
var writeUserInitialsAndScoreToArray = (userInitials, score) => {
    //var scoreBoard = [{}];
    scoreBoard.push({'storedInitial': userInitials, 'storedScore': score});
    // console.log(scoreBoard[scoreIndex]);
    // scoreIndex++;
    return;
}

// Initials and score handling *******************************
var initialAndScoreSubmissionHandler = (txtInitials) => {
        headerSection.style.visibility = "hidden";
        quizQuestion.textContent = "";
        choiceContainer.textContent = "";
        bottomContainer.textContent = "";

        quizQuestion.textContent = "High Scores";
        var userInitials = txtInitials.value;
        choiceContainer.innerHTML = `<li>${userInitials} - ${timeAllowed+1}</li><br>
            <button type="button" value="goBack" id="goBack">Go Back</button>
            <button type="button" value="clearScore" id="clearScore">Clear High Scores</button>`;
        
        // Call a function to write userInitials and timeAllowed to an Array
        writeUserInitialsAndScoreToArray(userInitials, timeAllowed+1);

        var goBackButton = document.getElementById("goBack");
        var clearScore = document.getElementById("clearScore");

        goBackOrClear(goBackButton, clearScore);
}

// Quiz completed or stopped ***************************
var quizCompleted = () => {
    countDownClock(0);
    quizQuestion.textContent = "";
    //choiceContainer.textContent = "";
    writeUp.textContent = "";
    bottomContainer.textContent = "";
    quizQuestion.textContent = "All Done!";
    choiceContainer.style.fontWeight = "bold";
    choiceContainer.innerHTML = `<p>Your final score is ${timeAllowed}.
    <br><br>
    <label for="txtInitials">Enter Initials: </label>
    <input type="text" id="txtInitials" name="txtInitials">
    <button type="button" id="btnSubmit" value="button">Submit</button>`;
 
    var btnSubmit = document.getElementById("btnSubmit");
    var txtInitials = document.getElementById("txtInitials");

    btnSubmit.addEventListener("click", function() {
        initialAndScoreSubmissionHandler(txtInitials);
    });
}

// Counting down from 75 seconds **************************
var countDownClock = function(goOrStop) {
    if (goOrStop === 1) {  //1 for go and anything else for stop
        timeAllowed = 75;
        var countDown = setInterval(startCounting, 1000);

        function startCounting () {
            if (timeAllowed < 0) {
                clearInterval(countDown);
                timeAllowed = 0;
                quizCompleted();
            } else {
                document.getElementById("timer").innerHTML = "Time: " + timeAllowed;
            }
            timeAllowed -=1;
            stillTimeLeft(timeAllowed);
        }
    } else {
        clearInterval(countDown);
    }
}

// Quiz has begun! *****************************************
function quizStarted() {
    //clear the content in the container
    //intro.removeChild(writeUp);
    writeUp.textContent = '';
    startButtonContainer.innerHTML='';
    currentQuestion = 0;
    //Timer starts ***
    countDownClock(1); //passing 1 to start countdown
    if (stillTimeLeft) {
        introTitle.removeAttribute("style");
        nextQuestion(currentQuestion);
    } else {
         console.log("Time has run out");
    };
}

//Click the button to start the quiz!!  **********************
var startingQuiz = function() {
    var startButton = document.getElementById("start-button");
    startButton.addEventListener("click", quizStarted);

}

codingQuizChallenge();


// create a function that saves scores and user initials to localStorage

//localStorage.setItem(storeScoresObject);


//write to storage
//values stored in localStorage are of type string, thus need to convert to string

// var obj = {name: "Hung", age: 50, city: "Chicago"};
// var myJSON = JSON.stringify(obj);
// document.getElementById("#place-holder").innerHTML = myJSON;

// localStorage.setItem(scores);
// localStorage.setItem(userInitials);



// create a function to retrieve scores
//reads from storage

//localStorage.getItem(storeScoresObject);

