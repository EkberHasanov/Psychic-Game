var Random = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var win = 0;
var lose = 0;
var guessesLeft = 9;
var user_inputs = [];


var computerGuess = Random[Math.floor(Math.random() * Random.length)];
console.log(computerGuess);
function GuessLeft() {
	var guess = document.getElementById("guessesLeft").innerText = "Guesses Left: " + guessesLeft;
}

function UserGuesses() {
	document.getElementById("letter").innerText = "Your Guesses: " + user_inputs.join();
}

GuessLeft();

var restart = function() {
	guessesLeft = 9;
	user_inputs = [];
	computerGuess = Random[Math.floor(Math.random() * Random.length)];
	console.log(computerGuess);
}


document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	user_inputs.push(userGuess);
	GuessLeft();
	UserGuesses();

	if (userGuess === computerGuess){
		win++;
		document.getElementById("wins").innerText = "Wins: " + win;
		restart();
	} 
	else if (guessesLeft === 0) {
		lose++;
		document.getElementById("lose").innerText = "Loses: " + lose;
		restart();
	}
};

