// This is the arrary of letters for the computer to choose from.
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The variables below are created to store wins and losses.
var wins = 0;
var losses = 0;

// The variable below shows how many guess are left (starting w/ 9), then decreases by 1 each time the users makes a guess.
// This will also need to reset back to 9 after each win or loss.
var guessesLeft = 9;

// This variable is used to store the user's guesses.
var playerGuessesSoFar = [];

// This functions will determine which key is pressed.
document.onkeyup = function(event) {

    // This variable is to store the player's guess and also to convert it to lower case.
    var playerGuess = event.key.toLowerCase();

    // This variable is to store the random letter chosen by the computer.
    var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];

    // I created another letter array because my if/else logic below would not work with the 1st array (letterChoices).
    var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // This function will search if playerGuess is in the letterChoices array, so only letter guess will be accepted.
    if (letterOptions.indexOf(playerGuess) > -1) {
    
    // This logic is to determine the wins, losses and guesses left.
        if (playerGuess === computerChoice) {
            wins++;
            guessesLeft = 9;
            playerGuessesSoFar = [];

        }   else {
            guessesLeft--;
            playerGuessesSoFar.push(playerGuess);
        }

        if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        playerGuessesSoFar = [];
        }
             
        // Displays the HTML content on the screen and updates the values after each player guess.
        var html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess which letter I'm thinking of!</p>" +
        "<p>Wins: "+ wins + "<p>" +
        "<p>Losses: " + losses + "<p>" +
        "<p>Guess Left: " + guessesLeft + "<p>" +
        "<p>Your Guesses So Far: " + playerGuessesSoFar.join(", ") + "<p>";

        document.querySelector("#psychic-game").innerHTML = html;
        }

};