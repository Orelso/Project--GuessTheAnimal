"use strict";

let animals = [
  { name: "dog", emoji: "đļ", species: "Mammal" },
  { name: "cat", emoji: "đą", species: "Mammal" },
  { name: "mouse", emoji: "đ­", species: "Mammal" },
  { name: "squid", emoji: "đĻ", species: "Cephalopoda" },
  { name: "frog", emoji: "đ¸", species: "Amphibian" },
  { name: "fox", emoji: "đĻ", species: "Mammal" },
  { name: "cow", emoji: "đ", species: "Mammal" },
  { name: "bee", emoji: "đ", species: "Insect" },
  { name: "dinosaur", emoji: "đĻ", species: "Mammal" },
  { name: "fish", emoji: "đ", species: "Fish" },
  { name: "horse", emoji: "đ´", species: "Mammal" },
  { name: "panda", emoji: "đŧ", species: "Mammal" },
  { name: "lion", emoji: "đĻ", species: "Mammal" },
  { name: "tiger", emoji: "đ¯", species: "Mammal" },
  { name: "elephant", emoji: "đ", species: "Mammal" },
  { name: "giraffe", emoji: "đĻ", species: "Mammal" },
  { name: "penguin", emoji: "đ§", species: "Bird" },
  { name: "koala", emoji: "đ¨", species: "Mammal" },
  { name: "monkey", emoji: "đ", species: "Mammal" },
  { name: "otter", emoji: "đĻĻ", species: "Mammal" },
  { name: "crocodile", emoji: "đ", species: "Reptile" },
  { name: "whale", emoji: "đŗ", species: "Mammal" },
  { name: "shark", emoji: "đĻ", species: "Fish" },
  { name: "octopus", emoji: "đ", species: "Cephalopoda" },
  { name: "owl", emoji: "đĻ", species: "Bird" },
  { name: "bat", emoji: "đĻ", species: "Mammal" },
  { name: "deer", emoji: "đĻ", species: "Mammal" },
  { name: "snake", emoji: "đ", species: "Reptile" },
  { name: "kangaroo", emoji: "đĻ", species: "Mammal" },
  { name: "rhinoceros", emoji: "đĻ", species: "Mammal" },
  { name: "gorilla", emoji: "đĻ", species: "Mammal" },
  { name: "zebra", emoji: "đĻ", species: "Mammal" },
  { name: "Sloth", emoji: "đĻĨ", species: "Mammal" },
  { name: "Badger", emoji: "đĻĄ", species: "Mammal" },
  { name: "Beaver", emoji: "đĻĢ", species: "Mammal" },
  { name: "Raccoon", emoji: "đĻ", species: "Mammal" },
  { name: "Wolf", emoji: "đē", species: "Mammal" },
  { name: "Polar bear", emoji: "đģââī¸", species: "Mammal" },
  { name: "Camel", emoji: "đĢ", species: "Mammal" },
  { name: "Llama", emoji: "đĻ", species: "Mammal" },
  { name: "Turkey", emoji: "đĻ", species: "Bird" },
  { name: "Crab", emoji: "đĻ", species: "Crustacean" },
  { name: "Lobster", emoji: "đĻ", species: "Crustacean" },
  { name: "Shrimp", emoji: "đĻ", species: "Crustacean" },
  { name: "Butterfly", emoji: "đĻ", species: "Insect" },
  { name: "Ladybug", emoji: "đ", species: "Insect" },
  { name: "Spider", emoji: "đˇī¸", species: "Arachnid" },
  { name: "Scorpion", emoji: "đĻ", species: "Arachnid" },
];

let secretAnimalObject = animals[Math.floor(Math.random() * animals.length)];
let score = 0;
let highScore = 0;
let alreadyWon = false;
document.querySelector(".animal").textContent = secretAnimalObject.emoji;

/*Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯Ë¯*/
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value.toLowerCase();
  // When there is no input
  if (!guess) {
    if (guess === "") {
      document.querySelector(".message").textContent = "You need to type something";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // When the player wins
  } else if (
    guess.trim().toLowerCase() === secretAnimalObject.name.trim().toLowerCase()
  ) {
    if (!alreadyWon) {
      score++;
      document.querySelector(".score").textContent = score;
    }
    document.querySelector(".message").textContent = "You got it dude đ.";
    document.querySelector(".play-again").textContent = "Click the Play again button for more points! or press 1";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".animal").style.width = "62rem";
    document.querySelector(".animal").textContent = secretAnimalObject.name.slice(0, 1).toUpperCase() + secretAnimalObject.name.slice(1).toLowerCase() + secretAnimalObject.emoji;
    document.querySelector(".header").textContent = "Game Over! You win đ";
    // When the guess is wrong
  } else if (guess !== secretAnimalObject.name) {
    if (guess !== secretAnimalObject.name) {
      secretAnimalObject;
      const secretAnimalSpecies = secretAnimalObject.species;
      document.querySelector(".message").innerHTML = `<span style="color: red;font-size: 25px;">Here's a hint</span> đž <br> It's animal group is <span style="color: red;">${secretAnimalSpecies}</span>.`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".animal").style.width = "70rem";
      document.querySelector(".animal").textContent = "GAME OVER!";
      document.querySelector(".message").textContent = "The game is over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
/* -------------------------------------------------------------------------------------------------------------------------------------------(Restart the game)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector(".again").addEventListener("click", function () {
  secretAnimalObject = animals[Math.floor(Math.random() * animals.length)];
  document.querySelector(".animal").textContent = secretAnimalObject.emoji 
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".animal").style.width = "";
  document.querySelector("body").style.backgroundColor = "#0F1626";
  document.querySelector(".play-again").textContent = "";

  alreadyWon;
});
/*Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°Ë°*/
document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    document.querySelector(".check").click();
  }
});
document.addEventListener("keyup", function (event) {
  if (event.key === "1") {
    document.querySelector(".again").click();
  }
});
