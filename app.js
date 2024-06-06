const playerSelection = document.querySelectorAll(".selection");
const displayPlayerChoice = document.querySelector(".displayPlayerChoice");
const displayComputerChoice = document.querySelector(".displayComputerChoice");
const displayGameResult = document.querySelector(".displayGameResult");
const displayPlayerScore = document.querySelector(".displayPlayerScore");
const displayComputerScore = document.querySelector(".displayComputerScore");
const displayWinnerResult = document.querySelector(".displayWinnerResult");


const choices = ["rock", "paper", "scissor"];


let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;

const buttonDisabled = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    rock.classList.remove("selection");
    paper.classList.remove("selection");
    scissor.classList.remove("selection");
}

for (let playerSelect of playerSelection) {
    playerSelect.addEventListener("click", () => {
        const playerChoice = playerSelect.id;
        console.log(playerChoice);
        playRound(playerChoice);
    })
}

function playRound(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.querySelector(`.${computerChoice}`).classList.add("active");
    setTimeout(() => {
        document.querySelector(`.${computerChoice}`).classList.remove("active");
    }, 1500);



    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a TIE!";

    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        result = "YOU WIN!";

    } else {
        result = "YOU LOSE!";
    }


    if (!isGameOver && result === "YOU WIN!") {
        playerScore += 1;
        if (playerScore === winningScore) {
            isGameOver = true;
        }
        displayPlayerScore.textContent = playerScore;
    }

    if (!isGameOver && result === "YOU LOSE!") {
        computerScore += 1;
        if (computerScore === winningScore) {
            isGameOver = true;
        }
        displayComputerScore.textContent = computerScore;
    }

    displayGameResult.classList.remove("winColor", "loseColor");


    displayPlayerChoice.textContent = `you: ${playerChoice.toUpperCase()}`;
    displayComputerChoice.textContent = `computer: ${computerChoice.toUpperCase()}`;
    displayGameResult.textContent = result;


    if (result === "YOU WIN!") {
        displayGameResult.classList.add("winColor");

    } else if (result === "YOU LOSE!") {
        displayGameResult.classList.add("loseColor");
    }

    if (playerScore === winningScore) {
        displayPlayerScore.classList.add("winColor");
        displayComputerScore.classList.add("loseColor");
        displayWinnerResult.classList.add("winColor");
        displayWinnerResult.textContent = "Game Over! YOU win this round!";
        buttonDisabled();

    } else if (computerScore === winningScore) {
        displayPlayerScore.classList.add("loseColor");
        displayComputerScore.classList.add("winColor");
        displayWinnerResult.classList.add("loseColor");
        displayWinnerResult.textContent = "Game Over! COMPUTER wins this round!";
        buttonDisabled();
    }
}
