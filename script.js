console.log( "Welcome to a game of Rock-Paper-Scissors - Best of 5" );

function getHumanChoice() {
    const humanChoice = prompt("Choose between Rock, Paper or Scissors", "").toLowerCase();
    return humanChoice;
}

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getWinner(humanChoice, computerChoice) {
        switch(humanChoice) {
            case "rock" :
                if (computerChoice == "scissors") {
                    humanScore++;
                    console.log( "You win! Rock beats scissors" );
                } else if (computerChoice == "paper") {
                    computerScore++;
                    console.log( "You lose! Paper beats rock" );
                } else {
                    console.log( "It's a tie" );
                }
                break;
            case "paper" :
                if (computerChoice == "rock") {
                    humanScore++;
                    console.log( "You win! Paper beats rock" );
                } else if (computerChoice == "scissors") {
                    computerScore++;
                    console.log( "You lose! Scissors beats paper" );
                } else {
                    console.log( "It's a tie" );
                }
                break;
            case "scissors" :
                if (computerChoice == "paper") {
                    humanScore++;
                    console.log( "You win! Scissors beats paper" );
                } else if (computerChoice == "rock") {
                    computerScore++;
                    console.log( "You lose! Rock beats scissors" );
                } else {
                    console.log( "It's a tie" );
                }
                break;
            default :
            console.log( 'Only valid inputs are "Rock", "Paper" and "Scissors"' );
        }
    }

    for (let i = 0; i < 5; i++) {
        getWinner( getHumanChoice(), getComputerChoice() );
        console.log( `Your score: ${humanScore}, Computer score: ${computerScore}` ); 
    }

    if (humanScore > computerScore) {
        console.log( `Congratulations. You win with ${humanScore} to ${computerScore}` );
    } else if (humanScore < computerScore) {
        console.log( `Bad luck. You lose with ${humanScore} to ${computerScore}` );
    } else {
        console.log( `${humanScore} : ${computerScore} It's a tie!` );
    }
}

playGame();