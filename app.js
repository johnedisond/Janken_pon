

//         function playRound(choice, computerChoice) {
//             const result = checkWinner(choice, computerChoice);
//             if (result === 'It is a Tie!') {
//                 return 'It is a Tie!'

//             } else if (result === "User") {
//                 return `You win! ${choice} beats ${computerChoice}`

//             } else {
//                 return `You lose! ${computerChoice} beats ${choice}`
//             }
//         }
//         const humanChoice = getHumanChoice;
//         const computerChoice = getComputerChoice();
//         console.log(playRound(humanChoice, computerChoice));
//         console.log('--------------------------------------');
//         if (checkWinner(humanChoice, computerChoice) === 'Human') {
//             humanScore++;
//         } else if (checkWinner(humanChoice, computerChoice) === 'Computer') {
//             computerScore++;
//         }
//     }
//     console.log("Game Over.")
//     if (humanScore > computerScore) {
//         console.log("You win this round!");
//     } else if (humanScore < computerScore) {
//         console.log('Computer wins this round!');
//     } else {
//         console.log('It is a tie!');
//     }
// }


// ------------------------------------------------------------------------------------

const humanChoices = document.querySelectorAll(".select");
const choices = ["rock", "paper", "scissor"];

for (let yourChoice of humanChoices) {
    yourChoice.addEventListener("click", () => {
        const choice = yourChoice.id;
        makeChoice(choice);
    })
};

function getComputerChoice() {
    const comp = choices[Math.floor(Math.random() * 3)];
    return comp;
};

function makeChoice(choice) {
    const computerChoice = getComputerChoice();
    const isWinner = playRound(choice, computerChoice);
    console.log(`User: ${choice}`);
    console.log(`Computer: ${computerChoice}`);
    console.log(isWinner);
};

// let humanScore = 0;
// let computerScore = 0;

function checkWinner(choice, computerChoice) {
    if (choice === computerChoice) {
        return "Tie";

    } else if ((choice === "rock" && computerChoice === "scissor") ||
        (choice === "paper" && computerChoice === "rock") ||
        (choice === "scissor" && computerChoice === "paper")) {
        return "User";

    } else {
        return "Computer";
    }
};

function playRound(choice, computerChoice) {
    const result = checkWinner(choice, computerChoice);
    if (result === "Tie") {
        return 'A Draw!';

    } else if (result === "User") {
        return `You win! ${choice} beats ${computerChoice}.`;

    } else {
        return `You lose! ${computerChoice} beats ${choice}.`;
    }
};
