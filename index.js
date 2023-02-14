"use strict";

let animals = [
  { name: "dog", emoji: "🐶", species: "Mammal" },
  { name: "cat", emoji: "🐱", species: "Mammal" },
  { name: "mouse", emoji: "🐭", species: "Mammal" },
  { name: "squid", emoji: "🦑", species: "Cephalopoda" },
  { name: "frog", emoji: "🐸", species: "Amphibian" },
  { name: "fox", emoji: "🦊", species: "Mammal" },
  { name: "cow", emoji: "🐄", species: "Mammal" },
  { name: "bee", emoji: "🐝", species: "Insect" },
  { name: "dinosaur", emoji: "🦕", species: "Mammal" },
  { name: "fish", emoji: "🐟", species: "Fish" },
];

const secretAnimal = animals[Math.floor(Math.random() * animals.length)].name;
let score = 10;
let highScore = 0;
// document.querySelector(".animal").textContent = secretAnimal;

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
    document.querySelector("body").style.backgrousndColor = "green"; //1 When the player wins the game, the background color changes
    document.querySelector(".animal").textContent = "GAME OVER! You win🏆";
    document.querySelector(".animal").textContent = secretAnimal;
    // Add Highscore
    if(score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is wrong
  } else if (guess !== secretAnimal) {
      if (score > 1) {
        const secretAnimalObj = animals.find((animal) => animal.name === secretAnimal);
        const secretAnimalCategory = secretAnimalObj.emoji;
        const secretAnimalSpecies = secretAnimalObj.species;
        document.querySelector(".message").innerHTML = `<span style="color: red;font-size: 25px;">Here's a hint</span> 🐾 <br> It's animal group is <span style="color: red;">${secretAnimalSpecies}</span>. Maybe this emoji can help    <span onmouseover="this.style.fontSize='40px';" onmouseout="this.style.fontSize='25px';">${secretAnimalCategory}</span>`;
        score--;
        document.querySelector(".score").textContent = score;
      }
     else {
      document.querySelector(".animal").style.width = "70rem";
      document.querySelector(".animal").textContent = "GAME OVER!";
      document.querySelector(".message").textContent = "The game is over!";
      document.querySelector(".score").textContent = 0;

    }
  }
});

document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    document.querySelector(".check").click();
  }
});
