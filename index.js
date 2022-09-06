// LessonOne Assignment
var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
 var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName + " to Football quiz");
}

welcome();
console.log("--------------------")

// Function to check answers and update score
function checkAnswers(questions) {
  for (var i = 0; i < questionsList.length; i++) {
    var userAnswer = readlineSync.question(questions[i].question);
    if (userAnswer == questionsList[i].answer) {
      score++;
      console.log("--------------------");
    } else {
      console.log("--------------------");
    }
  }
}

// Objects of questions
var q1 = {
  question: "How many penalties are usually taken in a penalty shoot-out? ",
  answer: 5
};

var q2 = {
  question: "Which football club did David Beckham played for? ",
  answer: "Real Madrid"
};

var q3 = {
  question: "Who won the 1998 Football World Cup Final? ",
  answer: "France"
};

var q4 = {
  question: "What is the main color of Brazil's national team shirt? ",
  answer: "Yellow"
};

var q5 = {
  question: "How many minutes are usually played in a football match? ",
  answer: 90
};

// Array of questions
var questionsList = [q1, q2, q3, q4, q5];
checkAnswers(questionsList);

if (score == questionsList.length) {
  console.log("Your score is: " + score + "/" + questionsList.length);
  console.log("Congratulations! You've advanced to next level.");
  console.log("--------------------")

  var score = 0;
  checkAnswers(questionsListTwo);
  var totalQuestions = questionsList.length + questionsListTwo.length;
  var finalScore = questionsList.length + score;
  console.log("Your score is: " + finalScore + "/" + totalQuestions);

} else {
  console.log("Your score is: " + score + "/" + questionsList.length);
}