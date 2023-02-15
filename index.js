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
    { name: "horse", emoji: "🐴", species: "Mammal" },
    { name: "panda", emoji: "🐼", species: "Mammal" },
    { name: "lion", emoji: "🦁", species: "Mammal" },
    { name: "tiger", emoji: "🐯", species: "Mammal" },
    { name: "elephant", emoji: "🐘", species: "Mammal" },
    { name: "giraffe", emoji: "🦒", species: "Mammal" },
    { name: "penguin", emoji: "🐧", species: "Bird" },
    { name: "koala", emoji: "🐨", species: "Mammal" },
    { name: "monkey", emoji: "🐒", species: "Mammal" },
    { name: "otter", emoji: "🦦", species: "Mammal" },
    { name: "crocodile", emoji: "🐊", species: "Reptile" },
    { name: "whale", emoji: "🐳", species: "Mammal" },
    { name: "shark", emoji: "🦈", species: "Fish" },
    { name: "octopus", emoji: "🐙", species: "Cephalopoda" },
    { name: "owl", emoji: "🦉", species: "Bird" },
    { name: "bat", emoji: "🦇", species: "Mammal" },
    { name: "deer", emoji: "🦌", species: "Mammal" },
    { name: "snake", emoji: "🐍", species: "Reptile" },
    { name: "kangaroo", emoji: "🦘", species: "Mammal" },
    { name: "rhinoceros", emoji: "🦏", species: "Mammal" },
    { name: "gorilla", emoji: "🦍", species: "Mammal" },
    { name: "zebra", emoji: "🦓", species: "Mammal" },
    { name: "Sloth", emoji: "🦥", species: "Mammal" },  
    { name: "Armadillo", emoji: "🦨", species: "Mammal" },  
    { name: "Badger", emoji: "🦡", species: "Mammal" },  
    { name: "Beaver", emoji: "🦫", species: "Mammal" },  
    { name: "Raccoon", emoji: "🦝", species: "Mammal" },  
    { name: "Wolf", emoji: "🐺", species: "Mammal" },  
    { name: "Polar bear", emoji: "🐻‍❄️", species: "Mammal" },  
    { name: "Camel", emoji: "🐫", species: "Mammal" },  
    { name: "Llama", emoji: "🦙", species: "Mammal" },  
    { name: "Turkey", emoji: "🦃", species: "Bird" },  
    { name: "Crab", emoji: "🦀", species: "Crustacean" },  
    { name: "Lobster", emoji: "🦞", species: "Crustacean" },  
    { name: "Shrimp", emoji: "🦐", species: "Crustacean" },  
    { name: "Butterfly", emoji: "🦋", species: "Insect" },  
    { name: "Ladybug", emoji: "🐞", species: "Insect" },  
    { name: "Spider", emoji: "🕷️", species: "Arachnid" },  
    { name: "Scorpion", emoji: "🦂", species: "Arachnid" }
]
  


let secretAnimalObject = animals[Math.floor(Math.random() * animals.length)];
let score = 0;
let highScore = 0;
let alreadyWon = false;
document.querySelector(".animal").textContent = secretAnimalObject.emoji

/*˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯˯*/
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value.toLowerCase();
  // When there is no input
  if (!guess) {
    if (guess === "") {
      document.querySelector(".message").textContent = "You need to type something";
      score--;
      document.querySelector(".score").textContent = score;
    } /* else {
      document.querySelector(".message").textContent = "Game over";
      score = 0;
    } */
    // When the player wins
  } else if (guess.trim().toLowerCase() === secretAnimalObject.name.trim().toLowerCase()) {
    if (!alreadyWon) {
        score++;
        document.querySelector(".score").textContent = score;

      }

    document.querySelector(".message").textContent = "You got it dude 👍";
    document.querySelector("body").style.backgroundColor = "green"; 
    document.querySelector(".animal").textContent = secretAnimalObject.name.slice(0,1).toUpperCase() + secretAnimalObject.name.slice(1).toLowerCase() + secretAnimalObject.emoji
    document.querySelector(".header").textContent = "Game Over! You win 🏆";
    // Add Highscore
    // if(score > highScore) {
    //     highScore = score
    //     document.querySelector('.highscore').textContent = highScore;
    // }
    // When the guess is wrong
  } else if (guess !== secretAnimalObject.name) {
      if (guess !== secretAnimalObject.name) {
        secretAnimalObject
        const secretAnimalSpecies = secretAnimalObject.species;
        document.querySelector(".message").innerHTML = `<span style="color: red;font-size: 25px;">Here's a hint</span> 🐾 <br> It's animal group is <span style="color: red;">${secretAnimalSpecies}</span>.`;
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
/* -------------------------------------------------------------------------------------------------------------------------------------------(Restart the game)------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.again').addEventListener('click', function () { 
    secretAnimalObject = animals[Math.floor(Math.random() * animals.length)];
    document.querySelector(".animal").textContent = secretAnimalObject.emoji + secretAnimalObject.name 
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    document.querySelector('.animal').style.width = '';
    document.querySelector('body').style.backgroundColor = "#0F1626";
    alreadyWon 


  });
/*˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰˰*/
document.querySelector(".guess").addEventListener("keyup", function (event) {
  if (event.key === "Enter" || event.key === "Return") {
    document.querySelector(".check").click();
  }
});


document.addEventListener("keyup", function(event) {
    if (event.key === "1") {
      document.querySelector(".again").click();
    }
  });
  
  