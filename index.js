// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the left <img> element
var leftDiceImage = document.querySelector(".img1");

// Set the src attribute to the corresponding dice image
leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var rightDiceImage = document.querySelector(".img2");

rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 wins!" ;
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 wins!" ;
} else {
    heading.textContent = "Draw!" ;
}