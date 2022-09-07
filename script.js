'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highScore = 0;
const highScoreElement = document.querySelector(".highscore");
const scoreElement = document.querySelector(".score");
const message = document.querySelector(".message");
const correctNumber = document.querySelector(".number");

//Event listner on click:
document.querySelector(".check").addEventListener("click", function () {
    const guessNumber = Number(document.querySelector(".guess").value);
    if (!guessNumber) {
        message.textContent = "⛔ No Number.";
    } else if (guessNumber === secretNumber) {
        message.textContent = "🎉 Correct Number.";
        correctNumber.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60B347";
        correctNumber.style.color = "#EEEEEE";
        correctNumber.style.backgroundColor = "#333333";
        correctNumber.style.width = "30rem";
        if (scoreValue > highScore) {
            highScore = scoreValue;
            highScoreElement.textContent = highScore;
        }
        
    } else if (guessNumber !== secretNumber) {
        if (scoreValue > 1) {
            message.textContent = guessNumber > secretNumber ? "📈 Too High." : "📉 Too Low.";
            scoreValue--;
            scoreElement.textContent = scoreValue;
        } else {
            message.textContent = "🤯 You lost the game.";
            scoreElement.textContent = 0;
        }    
    }
});

//Game reset:
document.querySelector(".again").addEventListener("click", function () {
    message.textContent = "Start guessing...";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreElement.textContent = 20;
    correctNumber.textContent = "?";
    document.querySelector(".guess").value = "";
    if (scoreValue > 0) {
        document.querySelector("body").style.backgroundColor = "#222222";
        correctNumber.style.color = "#333333";
        correctNumber.style.backgroundColor = "#EEEEEE";
        correctNumber.style.width = "15rem";
    }
});
