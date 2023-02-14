"use strict";

let animals = [
  { name: "Aardvark", category: "Mammal" },
  { name: "Albatross", category: "Bird" },
  { name: "Alligator", category: "Reptile" },
  { name: "Alpaca", category: "Mammal" },
  { name: "Ant", category: "Insect" },
  { name: "Anteater", category: "Mammal" },
  { name: "Antelope", category: "Mammal" },
  { name: "Ape", category: "Mammal" },
];

const secretAnimal = animals[Math.floor(Math.random() * animals.length)].name;
let score = 100;
let highScore = 0;
document.querySelector(".animal").textContent = secretAnimal;

/*˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯*/
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  // When there is no input
  if (!guess) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "You need to type something";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game over";
      score = 0;
    }
    // When the player wins
  } else if (guess === secretAnimal) {
    document.querySelector(".message").textContent = "You got it dude 👍";
    document.querySelector("body").style.backgroundColor = "green"; //1 When the player wins the game, the background color changes
    document.querySelector(".number").textContent = "GAME OVER! You win🏆";
    document.querySelector(".number").textContent = secretNumber;
    // Add Highscore
    // if(score > highScore) {
    //     highScore = score
    //     document.querySelector('.highscore').textContent = highScore;
    // }
  } else if (guess !== secretAnimal) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess !== secretAnimal
          ? "That number is too high 🔋"
          : "That number is too low 🪫";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".number").style.width = "70rem";
      document.querySelector(".number").textContent = "GAME OVER!";
    }
  }
});

document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    document.querySelector(".check").click();
  }
});
