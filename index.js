"use strict";

let animals = [
    { name: "dog", emoji: "🐶", species: "Mammal" },
    { name: "cat", emoji: "🐱", species: "Mammal" },
    { name: "mouse", emoji: "🐭", species: "Mammal" },
    { name: "squid", emoji: "🦑", species: "Cephalopoda" },
    { name: "frog", emoji: "🐸", species: "Amphibians" },
    { name: "fox", emoji: "🦊", species: "Mammal" },
    { name: "cow", emoji: "🐄", species: "Mammal" },
    { name: "bee", emoji: "🐝", species: "Insect" },
    { name: "dinosaur", emoji: "🦕", species: "Mammal" },
    { name: "fish", emoji: "🐟", species: "Fish" },
  ];

const secretAnimal = animals[Math.floor(Math.random() * animals.length)].name;
let score = 100;
let highScore = 0;
let incorrectGuesses = 0;
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
    if (guess !== secretAnimal) {
      incorrectGuesses++;
      if (incorrectGuesses === 1) {
        const secretAnimalObj = animals.find((animal) => animal.name === secretAnimal);
        const secretAnimalCategory = secretAnimalObj.emoji;
        const secretAnimalSpecies = secretAnimalObj.species;
        document.querySelector(".message").textContent = `<span style="color: red;">That's not the right animal!</span> 🐾  It's also a ${secretAnimalSpecies}`;      
        score--;
        document.querySelector(".score").textContent = score;
    } 
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
