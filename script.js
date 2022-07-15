// Player Input Value Logic

var logic = (value) => {
  let playerImg = document.getElementById("playerImg");
  let computerImg = document.getElementById("computerImg");
  playerImg.src = `images/rock.png`;
  computerImg.src = `images/rock.png`;
  playerImg.classList.add("anim");
  computerImg.classList.add("anim");
  setTimeout(() => {
    let computerValue = randVal();
    let playerValue = value;
    playerImg.src = `images/${playerValue}.png`;
    computerImg.src = `images/${computerValue}.png`;
    document.getElementById("displayMessage").innerHTML = winCheck(
      playerValue,
      computerValue
    );
    playerImg.classList.remove("anim");
    computerImg.classList.remove("anim");
  }, 1500);
};

// Computer Value Generator

var randVal = () => {
  let val = Math.floor(Math.random() * 3);
  let value;
  if (val === 2) {
    value = "rock";
  } else if (val === 1) {
    value = "paper";
  } else {
    value = "scissors";
  }
  return value;
};

// check for winner

var winCheck = (player, computer) => {
  let playerScore = parseInt(document.getElementById("playerScore").innerHTML);
  let computerScore = parseInt(
    document.getElementById("computerScore").innerHTML
  );
  if (player === computer) {
    return `<span class="text-warning">IT'S A DRAW</span>`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    document.getElementById("playerScore").innerHTML = playerScore + 1;
    return `<span class="text-success">PLAYER WINS!</span>`;
  } else {
    document.getElementById("computerScore").innerHTML = computerScore + 1;
    return `<span class="text-danger">COMPUTER WINS!</span>`;
  }
};
