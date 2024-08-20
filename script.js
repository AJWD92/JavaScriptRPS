const options = ["ROCK", "PAPER", "SCISSORS"]; // Array to store available options

const messages = {
    tie: "Yawn, it's a tie!",
    won: "Yay, you won!",
    lost: "Aww, you lost!"
}; // Object to store messages based on the game outcome

const gameHistory = new Set(); // Set to store unique game outcomes
const gameCounter = {}; // Object to store the count of each game outcome

function decideWinner(userChoice, computerChoice) {
    console.log(`You selected: ${userChoice}`);
    console.log(`Computer selected: ${computerChoice}`);

    let outcome;
    if (userChoice === computerChoice) {
        console.log(messages.tie); // Display tie message
        outcome = "tie";
    } else if (
        (userChoice === options[0] && computerChoice === options[2]) || // User: ROCK, Computer: SCISSORS
        (userChoice === options[1] && computerChoice === options[0]) || // User: PAPER, Computer: ROCK
        (userChoice === options[2] && computerChoice === options[1])    // User: SCISSORS, Computer: PAPER
    ) {
        console.log(messages.won); // User wins
        outcome = "win";
    } else {
        console.log(messages.lost); // User loses
        outcome = "lose";
    }

    return outcome;
}


function playRPS() {
    let userWins = 0;
    let userLosses = 0;
    let userDraws = 0;
    let computerWin = 0
    let computerLosses = 0;
    let computerDraws = 0;
    let playAgain = true;

    while (playAgain) {
        const userChoice = prompt("Enter Rock, Paper, or Scissors: ").toUpperCase(); // Prompting user for input

        const computerChoice = options[Math.floor(Math.random() * options.length)]; // Randomly selecting computer choice

        const outcome = decideWinner(userChoice, computerChoice); // Calling the decideWinner function

        if (outcome === "win") {
            userWins++, computerLosses ++; // Incrementing the user's win counter
        } else if (outcome === "lose") {
            userLosses++, computerWin++; // Incrementing the user's loss counter
        } else if (outcome === 'tie'){
            userDraws++, computerDraws++; // Incrementing the user's draw counter
        }

        console.log(`Player Wins: ${userWins}, Player Losses: ${userLosses}, Player Draws: ${userDraws}, Computer Win: ${computerWin}, Computer Losses: ${computerLosses}, Computer Draws: ${computerDraws}`); // Displaying user's & computer's stats

        gameHistory.add(outcome); // Adding the outcome to the game history set

        if (gameCounter[outcome]) {
            gameCounter[outcome]++; // Incrementing the count of the outcome
        } else {
            gameCounter[outcome] = 1; // Adding the outcome with a count of 1
        }

        const playAgainInput = prompt("Do you want to play again? (yes/no): ").toLowerCase(); // Asking if user wants to play again
        playAgain = playAgainInput === "yes"; // Checking if the user wants to play again
    }

    console.log(`Game History: ${[...gameHistory].join(", ")}`); // Displaying game history
    console.log("Game Counter:", gameCounter); // Displaying the count of each outcome
    console.log("Thanks for playing!"); // Closing message
}

playRPS(); // Starting the game