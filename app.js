var numSquares = 6;

var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay =  document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var messageDisplay = document.getElementById("message");
var pickedColor = randomColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function() {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");

	numSquares = 3;

	colors = generateRandomColor(numSquares);

	pickedColor = randomColor();
	this.style.background = "steelblue";
	this.style.color = "white";
	hardBtn.style.background = "white";
	hardBtn.style.color = "steelblue";

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click",function() {
	easyBtn.classList.remove("selected");
	this.classList.add("selected");


	numSquares = 6;
	colors = generateRandomColor(numSquares);

	pickedColor = randomColor();
	this.style.background = "steelblue";
	this.style.color = "white";
	easyBtn.style.background = "white";
	easyBtn.style.color = "steelblue";

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});	

resetButton.addEventListener("click",function(){
	colors = generateRandomColor(numSquares);

	pickedColor = randomColor();

	colorDisplay.textContent = pickedColor; 
	resetButton.textContent = "New Color";
	correct.textContent = "";


	for (var i = 0;i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function (){

		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			correct.textContent = "Correct";
			messageDisplay.style.display = 'none';
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again";
		}else{
			correct.textContent = "Wroooog";
			messageDisplay.textContent = "Try Again";
			this.style.background = "#232323";
		}
	});
}

function changeColor(color) {
	for (var i = 0;i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function randomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(colorQu());
	}

	return arr;


}

function colorQu(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

