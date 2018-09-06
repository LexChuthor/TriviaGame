var possibleQuestions = [
    {
        question: "How Many States Border the Gulf of Mexico?",
        answers: {
            a: "4",
            b: "5",
            c: "6",
            d: "7",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the size for a standard pair of headphones?",
        answers: {
            a: "2.5mm",
            b: "3mm",
            c: "3.5mm",
            d: "4mm",
        },
        correctAnswer: "c",
    },
    {
        question: "How wide is a queen mattress?",
        answers: {
            a: "40 inches",
            b: "50 inches",
            c: "60 inches",
            d: "70 inches",
        },
        correctAnswer: "c",
    },
    {
        question: "Which of the following US presidents served the shortest term in office?",
        answers: {
            a: "William Henry Harrison",
            b: "Zachary Taylor",
            c: "James A. Garfield",
            d: "Warren G. Harding",
        },
        correctAnswer: "a",
    },
    {
        question: "How many days are in an ancient Egyption year?",
        answers: {
            a: "270",
            b: "364",
            c: "365",
            d: "450",
        },
        correctAnswer: "c",
    },
    {
        question: "What direction does the Statue of Libery Face?",
        answers: {
            a: "Northeast",
            b: "Northwest",
            c: "Southeast",
            d: "Southwest",
        },
        correctAnswer: "c",
    },
    {
        question: "If you have vitricophobia, what should I bring in order to torture you?",
        answers: {
            a: "Stepmothers",
            b: "Stepbrothers",
            c: "Stepfathers",
            d: "Stepsisters",
        },
        correctAnswer: "c",
    },
    {
        question: "What planet has the hottest surface temperature?",
        answers: {
            a: "Mercury",
            b: "Mars",
            c: "Venus",
            d: "Saturn",
        },
        correctAnswer: "c",
    },
    {
        question: "In the google logo, which letter is green?",
        answers: {
            a: "G",
            b: "O",
            c: "L",
            d: "E",
        },
        correctAnswer: "c",
    },
    {
        question: "Which of the following Japanese Islands is largest?",
        answers: {
            a: "Hokkaido",
            b: "Honshu",
            c: "Shikoku",
            d: "Kyushu",
        },
        correctAnswer: "b",
    },
];
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("result");


//creates the quiz with buttons for answer choices, from a question bank defined by possibleQuestion object
function makeQuiz() {
    var output = [];
    possibleQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(`
                <label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}  
                    </label>`);
            }
            output.push(
                `<div class="question">${questionNumber+1 + ".  "}${currentQuestion.question}</div>
            <div class="answers"> ${answers.join('')}</div>
            <div> </div>
            <hr>`
            );
        }
    );
    quizContainer.innerHTML = (output.join(''));
}

makeQuiz();
//function to grade the quiz, and show a grade of correct/total questions
function gradeQuiz() {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var correctAnswers = 0;
    possibleQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var selected = (answerContainer.querySelector(selector) || {}).value;

            if (selected === currentQuestion.correctAnswer) {
                correctAnswers++;
            }
        });
        resultsContainer.innerHTML = (`${correctAnswers} out of ${possibleQuestions.length}`);
}

$("#submit").on("click", gradeQuiz);
setTimeout(gradeQuiz, 1000*60*8);

window.onload = function() {
  stopwatch.start();
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var stopwatch = {
  
    time: 480,
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time--;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#remainingTime").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };