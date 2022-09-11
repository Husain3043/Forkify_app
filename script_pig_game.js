'use strict';
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

//Initial conditions:
let curScore, curPlayer, scores, isPlaying;
const initGame = function() {
	curScore = 0;
	curPlayer = 0;
	isPlaying = true;
	scores = [0, 0];
	
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	
	diceEl.classList.add("hidden");
	document.querySelector(`.player--${curPlayer}`).classList.remove("player--winner");
	player0El.classList.add("player--active");
}
initGame();

const switchPlayer = function () {
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
	document.getElementById(`current--${curPlayer}`).textContent = 0;
	curPlayer = curPlayer === 0 ? 1 : 0;
	curScore = 0;
}
//Roll dice:
rollBtn.addEventListener("click", function () {
	if (isPlaying) {
		//generate random number
		const number = Math.trunc(Math.random() * 6) + 1;
		//check currently active player:
		if (player1El.classList.contains("player--active")) {
			curPlayer = 1;
		} else {
			curPlayer = 0;
		}
		//update dice image
		diceEl.classList.remove("hidden");
		diceEl.setAttribute("src", `dice-${number}.png`);
		//if number equals to 1, change player and update score
		if (number === 1) {
			switchPlayer();
		} else {
			curScore += number;
			document.getElementById(`current--${curPlayer}`).textContent = curScore;
		}
	}
});

//hold the score:
holdBtn.addEventListener("click", function () {
	if (isPlaying) {
		//Add current score to score of active player
		scores[curPlayer] += curScore;
		document.getElementById(`score--${curPlayer}`).textContent = scores[curPlayer];
		//check if score is >=100
		if (scores[curPlayer] >= 100) {
			//declare current player winner and finish the game
			isPlaying = false;
			document.querySelector(`.player--${curPlayer}`).classList.add("player--winner");
			document.querySelector(`.player--${curPlayer}`).classList.remove("player--active");
			diceEl.classList.add("hidden");
		} else {
			//change the player
			switchPlayer();
		}
	}
});

//Reset the game:
newBtn.addEventListener("click", function () {
	initGame();
});