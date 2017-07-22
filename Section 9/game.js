var secretNumber = 7

var guess = Number(prompt("Guess the number"))

if (guess == secretNumber) {
  alert("You got it right")
} else if (secretNumber > guess) {
  alert("The number is Larger")
} else {
  alert("The number is smaller")
}
