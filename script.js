var timeEl = document.querySelector(".time");
var secondsLeft = 61;
var score = 0
var question1 = document.getElementById("main");
var question2 = document.getElementById("main2");
var question3 = document.getElementById("main3");
var question4 = document.getElementById("main4");
var question5 = document.getElementById("main5");
var question6 = document.getElementById("main6");
var question7 = document.getElementById("main7");
var question8 = document.getElementById("main8");
var optionA = document.getElementById("option-A");
var optionB = document.getElementById("option-B");
var optionC = document.getElementById("option-C");
var optionD = document.getElementById("option-D");
var optionA2 = document.getElementById("option-A2");
var optionB2 = document.getElementById("option-B2");
var optionC2 = document.getElementById("option-C2");
var optionD2 = document.getElementById("option-D2");
var optionA3 = document.getElementById("option-A3");
var optionB3 = document.getElementById("option-B3");
var optionC3 = document.getElementById("option-C3");
var optionD3 = document.getElementById("option-D3");
var optionA4 = document.getElementById("option-A4");
var optionB4 = document.getElementById("option-B4");
var optionC4 = document.getElementById("option-C4");
var optionD4 = document.getElementById("option-D4");
var optionA5 = document.getElementById("option-A5");
var optionB5 = document.getElementById("option-B5");
var optionC5 = document.getElementById("option-C5");
var optionD5 = document.getElementById("option-D5");
var optionA6 = document.getElementById("option-A6");
var optionB6 = document.getElementById("option-B6");
var optionC6 = document.getElementById("option-C6");
var optionD6 = document.getElementById("option-D6");
var optionA7 = document.getElementById("option-A7");
var optionB7 = document.getElementById("option-B7");
var optionC7 = document.getElementById("option-C7");
var optionD7 = document.getElementById("option-D7");
var optionA8 = document.getElementById("option-A8");
var optionB8 = document.getElementById("option-B8");
var optionC8 = document.getElementById("option-C8");
var optionD8 = document.getElementById("option-D8");
function totalScore() {
    score +1;
}

function sendMessage() {
  timeEl.textContent = "Finished!! You got " + totalScore() + " out of 8 questions right!!";
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until finished!!";
    questionOne();
    questionTwo();
    questionThree();
    questionFour();
    questionFive();
    questionSix();
    questionSeven();
    questionEight();

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
}, 1000);
function questionOne() {
  question1.textContent = "1. Arrays can be used to store:"
  optionA.textContent = "A) Numbers"
  optionB.textContent = "B) Strings"
  optionC.textContent = "C) Booleans"
  optionD.textContent = "D) All of the above"

  optionA.addEventListener("click", function() {
    optionA.style.backgroundColor = "red";
    optionA.textContent = "Incorrect!!";
  })
  optionB.addEventListener("click", function() {
    optionB.style.backgroundColor = "red";
    optionB.textContent = "Incorrect!!";
  })
  optionC.addEventListener("click", function() {
    optionC.style.backgroundColor = "red";
    optionC.textContent = "Incorrect!!";
  })
  optionD.addEventListener("click", function() {
    optionD.style.backgroundColor = "green";
    optionD.textContent = "Correct!!";
    totalScore();
  })
}

function questionTwo() {
  question2.textContent = "2. JSON stands for:"
  optionA2.textContent = "A) It's just a fancy way to spell Jason"
  optionB2.textContent = "B) JavaScript Object Notation"
  optionC2.textContent = "C) JavaScript Orientation Notation"
  optionD2.textContent = "D) Just Standard Occupation Notation"

  optionB2.addEventListener("click", function() {
    optionB2.style.backgroundColor = "green";
    optionB2.textContent = "Correct!!";
    totalScore();
  })
  optionA2.addEventListener("click", function() {
    optionA2.style.backgroundColor = "red";
    optionA2.textContent = "Incorrect!!";
  })
  optionD2.addEventListener("click", function() {
    optionD2.style.backgroundColor = "red";
    optionD2.textContent = "Incorrect!!";
  })
  optionC2.addEventListener("click", function() {
    optionC2.style.backgroundColor = "red";
    optionC2.textContent = "Incorrect!!";
  })
}

function questionThree() {
  question3.textContent = "3. What does the '!' operator do?"
  optionA3.textContent = "A) Makes the function associated with it execute first"
  optionB3.textContent = "B) Makes the function associated with it execute last"
  optionC3.textContent = "C) Reverses the logic"
  optionD3.textContent = "D) None of the above"

  optionC3.addEventListener("click", function() {
    optionC3.style.backgroundColor = "green";
    optionC3.textContent = "Correct!!";
    totalScore();
  })
  optionA3.addEventListener("click", function() {
    optionA3.style.backgroundColor = "red";
    optionA3.textContent = "Incorrect!!";
  })
  optionD3.addEventListener("click", function() {
    optionD3.style.backgroundColor = "red";
    optionD3.textContent = "Incorrect!!";
  })
  optionB3.addEventListener("click", function() {
    optionB3.style.backgroundColor = "red";
    optionB3.textContent = "Incorrect!!";
  })
}

function questionFour() {
  question4.textContent = "4. What does 'truthy' mean?"
  optionA4.textContent = "A) The result is correct"
  optionB4.textContent = "B) The result is empty"
  optionC4.textContent = "C) The result contains a negative"
  optionD4.textContent = "D) The result contains something (String, numbers, true, etc)"

  optionD4.addEventListener("click", function() {
    optionD4.style.backgroundColor = "green";
    optionD4.textContent = "Correct!!";
    totalScore();
  })
  optionA4.addEventListener("click", function() {
    optionA4.style.backgroundColor = "red";
    optionA4.textContent = "Incorrect!!";
  })
  optionB4.addEventListener("click", function() {
    optionB4.style.backgroundColor = "red";
    optionB4.textContent = "Incorrect!!";
  })
  optionC4.addEventListener("click", function() {
    optionC4.style.backgroundColor = "red";
    optionC4.textContent = "Incorrect!!";
  })
}

function questionFive() {
  question5.textContent = "5. What does a function expression do?"
  optionA5.textContent = "A) Defines the function without calling it"
  optionB5.textContent = "B) Defines and calls the function"
  optionC5.textContent = "C) Calls the function without defining it"
  optionD5.textContent = "D) None of the above"

  optionA5.addEventListener("click", function() {
    optionA5.style.backgroundColor = "green";
    optionA5.textContent = "Correct!!";
    totalScore();
  })
  optionB5.addEventListener("click", function() {
    optionB5.style.backgroundColor = "red";
    optionB5.textContent = "Incorrect!!";
  })
  optionC5.addEventListener("click", function() {
    optionC5.style.backgroundColor = "red";
    optionC5.textContent = "Incorrect!!";
  })
  optionD5.addEventListener("click", function() {
    optionD5.style.backgroundColor = "red";
    optionD5.textContent = "Incorrect!!";
  })
}

function questionSix() {
  question6.textContent = "6. What does CSS stand for?"
  optionA6.textContent = "A) Central Server Sheet"
  optionB6.textContent = "B) Cascading Style Sheet"
  optionC6.textContent = "C) Concatenated Style Sheet"
  optionD6.textContent = "D) Constellation Star Sunflower"

  optionB6.addEventListener("click", function() {
    optionB6.style.backgroundColor = "green";
    optionB6.textContent = "Correct!!";
    totalScore();
  })
  optionA6.addEventListener("click", function() {
    optionA6.style.backgroundColor = "red";
    optionA6.textContent = "Incorrect!!";
  })
  optionC6.addEventListener("click", function() {
    optionC6.style.backgroundColor = "red";
    optionC6.textContent = "Incorrect!!";
  })
  optionD6.addEventListener("click", function() {
    optionD6.style.backgroundColor = "red";
    optionD6.textContent = "Incorrect!!";
  })
}

function questionSeven() {
  question7.textContent = "7. What does HTML stand for?"
  optionA7.textContent = "A) Hyper-Text Markup Language"
  optionB7.textContent = "B) Hyper-Tenative Markdown Language"
  optionC7.textContent = "C) Half-Time Makeup "
  optionD7.textContent = "D) None of the above"

  optionA7.addEventListener("click", function() {
    optionA7.style.backgroundColor = "green";
    optionA7.textContent = "Correct!!";
    totalScore();
  })
  optionB7.addEventListener("click", function() {
    optionB7.style.backgroundColor = "red";
    optionB7.textContent = "Incorrect!!";
  })
  optionC7.addEventListener("click", function() {
    optionC7.style.backgroundColor = "red";
    optionC7.textContent = "Incorrect!!";
  })
  optionD7.addEventListener("click", function() {
    optionD7.style.backgroundColor = "red";
    optionD7.textContent = "Incorrect!!";
  })
}

function questionEight() {
  question8.textContent = "8. What does the .addEventListener() function do?"
  optionA8.textContent = "A) Adds an ear to listen to the code"
  optionB8.textContent = "B) Executes code when a person loads the page"
  optionC8.textContent = "C) Grabs information from local storage for the user"
  optionD8.textContent = "D) Creates a callback function to execute when the user interacts with the site"

  optionD8.addEventListener("click", function() {
    optionD8.style.backgroundColor = "green";
    optionD8.textContent = "Correct!!";
    totalScore();
    clearInterval(timerInterval)
    sendMessage()
  })
  optionB8.addEventListener("click", function() {
    optionB8.style.backgroundColor = "red";
    optionB8.textContent = "Incorrect!!";
    clearInterval(timerInterval)
    sendMessage()
  })
  optionC8.addEventListener("click", function() {
    optionC8.style.backgroundColor = "red";
    optionC8.textContent = "Incorrect!!";
    clearInterval(timerInterval)
    sendMessage()
  })
  optionA8.addEventListener("click", function() {
    optionA8.style.backgroundColor = "red";
    optionA8.textContent = "Incorrect!!";
    clearInterval(timerInterval)
    sendMessage()
  })
}
}

  setTime()