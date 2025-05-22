let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  let randomNumber = Math.random() * 3;
  let computerChoice;

  if (randomNumber <= 1) computerChoice = "Bat";
  else if (randomNumber <= 2) computerChoice = "Ball";
  else computerChoice = "Stump";

  let message = "";

  if (userChoice === "Bat") {
    if (computerChoice === "Ball") {
      userScore++;
      message = "User won!";
    } else if (computerChoice === "Stump") {
      computerScore++;
      message = "Computer won!";
    } else {
      message = "It's a tie!";
    }
  }

  if (userChoice === "Ball") {
    if (computerChoice === "Stump") {
      userScore++;
      message = "User won!";
    } else if (computerChoice === "Bat") {
      computerScore++;
      message = "Computer won!";
    } else {
      message = "It's a tie!";
    }
  }

  if (userChoice === "Stump") {
    if (computerChoice === "Bat") {
      userScore++;
      message = "User won!";
    } else if (computerChoice === "Ball") {
      computerScore++;
      message = "Computer won!";
    } else {
      message = "It's a tie!";
    }
  }

  document.getElementById("userscore").textContent = userScore;
  document.getElementById("computerscore").textContent = computerScore;

  document.getElementById("result-message").textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${message}`;
}

document.querySelector(".bat").onclick = function () {
  play("Bat");
};

document.querySelector(".ball").onclick = function () {
  play("Ball");
};

document.querySelector(".stump").onclick = function () {
  play("Stump");
};
