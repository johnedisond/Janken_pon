const choice = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const comp = choice[Math.floor(Math.random() * 3)];
    console.log(`Computer: ${comp}`);
    return comp;
}



function getHumanChoice() {
    let inputValidation = false;
    while (inputValidation === false) {
        const user = prompt("Choose between 'rock', 'paper' or 'Scissor':").toLowerCase();
        if (user === null) {
            continue;
        }

        if (choice.includes(user)) {
            inputValidation = true;
            console.log(`User: ${user}`);
            return user;
        }
    }
}


// let humanScore = 0;
// let computerScore = 0;


function checkWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It is a Tie!';
    } else if ((humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')) {
        return 'Human';
    } else {
        return 'Computer';
    }
}



function playGame() {
    for (let i = 1; i <= 5; i++) {
        function playRound(humanChoice, computerChoice) {
            const result = checkWinner(humanChoice, computerChoice);
            if (result === 'It is a Tie!') {
                return 'It is a Tie!'
            } else if (result === 'Human') {
                return `You win! ${humanChoice} beats ${computerChoice}`
            } else {
                return `You lose! ${computerChoice} beats ${humanChoice}`
            }
        }
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }
}
playGame();