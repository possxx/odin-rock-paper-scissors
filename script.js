function getComputerChoice() {
    const computerChoice = Math.floor((Math.random() * 3));
    if (computerChoice < 1) {
        return "rock";
    } else if (computerChoice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();

    switch(playerChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                playerScore++;
                result.innerText = "You win! Rock beats Scissors";
            } else if (computerChoice == "paper") {
                computerScore++;
                result.innerText = "You lose! Paper beats Rock";
            } else {
                result.innerText = "It's a tie!";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                playerScore++;
                result.innerText = "You win! Paper beats Rock";
            } else if (computerChoice == "scissors") {
                computerScore++;
                result.innerText = "You lose! Scissors beats Paper";
            } else {
                result.innerText = "It's a tie!";
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                playerScore++;
                result.innerText = "You win! Scissors beats Paper";
            } else if (computerChoice == "rock") {
                computerScore++;
                result.innerText = "You lose! Rock beats Scissors";
            } else {
                result.innerText = "It's a tie!";
            }   
            break;           
    };

    playerScoreText.innerText = `Your score: ${playerScore}`;
    computerScoreText.innerText = `Computer score: ${computerScore}`;

    if (playerScore == 5) {
        result.innerText = "You win the game! Click one of the buttons to play again";
    } else if (computerScore == 5) {
        result.innerText = "You lose the game! Click one of the buttons to play again";
    }
};

const buttonRock = document.createElement("button");
const buttonScissors = document.createElement("button");
const buttonPaper = document.createElement("button");

buttonRock.innerText = "Rock";
buttonScissors.innerText = "Scissors";
buttonPaper.innerText = "Paper";

const gameContainer = document.createElement("div");
const heading = document.createElement("h1");
heading.innerText = "Welcome to Rock-Paper-Scissors (Best-Of-Nine)";
const buttonContainer = document.createElement("div");
const scoreContainer = document.createElement("div");
const resultContainer = document.createElement("div");
let result = document.createElement("p");
const playerScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");

document.body.appendChild(gameContainer);

gameContainer.appendChild(heading);
gameContainer.appendChild(buttonContainer);
gameContainer.appendChild(resultContainer);
gameContainer.appendChild(scoreContainer);

buttonContainer.appendChild(buttonRock);
buttonContainer.appendChild(buttonPaper);
buttonContainer.appendChild(buttonScissors);

resultContainer.appendChild(result);

scoreContainer.appendChild(playerScoreText);
scoreContainer.appendChild(computerScoreText);

gameContainer.style.maxWidth = "600px";
gameContainer.style.minWidth = "370px";

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#0c9932";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

heading.style.textAlign = "center";
heading.style.color = "#fff";

buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.gap = "20px";
buttonContainer.style.flexWrap = "wrap";

resultContainer.style.textAlign = "center";
resultContainer.style.color = "white";
resultContainer.style.fontSize = "16px";

result.innerText = "Click one of the buttons to make your choice!";
result.style.margin = "24px 0 16px";

scoreContainer.style.display = "flex";
scoreContainer.style.justifyContent = "center";
scoreContainer.style.gap = "50px";

playerScoreText.innerText = `Your score: ${playerScore}`;
playerScoreText.style.margin = "8px 0";
playerScoreText.style.color = "white";
playerScoreText.style.fontWeight = "bold";

computerScoreText.innerText = `Computer score: ${computerScore}`;
computerScoreText.style.margin = "8px 0";
computerScoreText.style.color = "white";
computerScoreText.style.fontWeight = "bold";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#0f5e24";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#0fba3d"
    });
    button.style.backgroundColor = "#0fba3d";
    button.style.border = "2px solid white";
    button.style.fontSize = "16px";
    button.style.padding = "8px 24px";
    button.style.borderRadius = "24px";
    button.style.color = "white";
});

buttonRock.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
        location.reload();
    } else {
        playGame("rock");
    }
});
buttonPaper.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
        location.reload();
    } else {
        playGame("paper");
    }
});

buttonScissors.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
        location.reload();
    } else {
        playGame("scissors");
    }
});

