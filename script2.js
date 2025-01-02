// Initialize scores for user and computer
let uScore = 0; // User's score
let cScore = 0; // Computer's score

// Select HTML elements for interaction and updates
const choices = document.querySelectorAll('.choice'); // Buttons for user to pick ROCK, PAPER, or SCISSORS
const msg = document.querySelector("#msg"); // Message display area
const uScoreDisplay = document.querySelector("#u-score"); // User score display element
const cScoreDisplay = document.querySelector("#c-score"); // Computer score display element

// Function to generate computer's choice randomly
const getcChoice = () => {
    const opt = ["ROCK", "PAPER", "SCISSORS"]; // Possible choices
    const ridx = Math.floor(Math.random() * 3); // Random index (0, 1, or 2)
    // Use the random index to select ROCK, PAPER, or SCISSORS
    return opt[ridx];
}

// Function to display the winner and update scores
const showWinner = (uWin, uChoice, cChoice) => {
    if (uWin) { // If user wins
        console.log("YOU WIN!");
        uScore++; // Increment user score
        uScoreDisplay.innerText = uScore; // Update user score display
        msg.innerText = `|  YOU WIN!  |\n|  ${uChoice} beats ${cChoice}  |`; // Show win message
        msg.style.backgroundColor = "green"; // Change message background to green
    } else { // If user loses
        console.log("YOU LOSE!");
        cScore++; // Increment computer score
        cScoreDisplay.innerText = cScore; // Update computer score display
        msg.innerText = `|  YOU LOSE!  |\n|  ${cChoice} beats ${uChoice}  |`; // Show lose message
        msg.style.backgroundColor = "red"; // Change message background to red
    }
}

// Function to handle a draw
const draw = () => {
    console.log("GAME - DRAW");
    msg.innerText = "|  GAME - DRAW  |"; // Display draw message
    msg.style.backgroundColor = "#16467e"; // Change message background to blue
}

// Main function to handle gameplay
const play = (uChoice) => {
    console.log("USER Choice", uChoice); // Log user's choice
    const cChoice = getcChoice(); // Generate computer's choice
    console.log("Computer Choice", cChoice); // Log computer's choice

    if (uChoice === cChoice) { // If choices are the same, it's a draw
        draw();
    } else {
        let uWin = true; // Assume user wins initially
        if (uChoice === "ROCK") {
            uWin = cChoice === "PAPER" ? false : true; // Rock loses to Paper
        } else if (uChoice === "PAPER") {
            uWin = cChoice === "SCISSORS" ? false : true; // Paper loses to Scissors
        } else {
            uWin = cChoice === "ROCK" ? false : true; // Scissors lose to Rock
        }
        showWinner(uWin, uChoice, cChoice); // Display result
    }
}

// Add event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let uChoice = choice.getAttribute("id"); // Get the ID (ROCK, PAPER, SCISSORS) of the clicked button
        play(uChoice); // Play the game with user's choice
    });
});
