// Create a function for countdown clock
// var dateNow = new Date().getDate();
// var monthNow = new Date().getMonth();
// var hoursNow = new Date().getHours();
// var dayNow = new Date().getDay();
// var minutesNow = new Date().getMinutes();
// var secondsNow = new Date().getSeconds();
// console.log(dateNow);
// console.log(monthNow);
// console.log(hoursNow);
// console.log(dayNow);
// console.log(minutesNow);
// console.log(secondsNow);

// Create a function to store list of questions & answers or objects
var questions = {
    one: "What number is a winning number?",
    two: "Which is considered last?"
}
var questionsChoices = {
    listOne: [1, 2, 3, 4],
    listTwo: [5, 6, 7, 8]
}
var answers = [1, 8];


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

var submitToSaveScore = document.getElementById("#place-holder");


// create a function to store scores 


// create a function to retrieve scores


