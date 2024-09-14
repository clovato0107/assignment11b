// Overview of tasks to finish the script:
// 1. Correct the logic in the checkForWinner function to properly check for winning combinations.
// 2. Add a call to the checkForWinner function after each move to determine if there's a winner or a tie.
// 3. Implement a way to reset the game after a win or a tie.
// 4. Improve the user interface to display the winner or tie message to the players.
// 5. Add comments to clarify the purpose of each section of the code.

// Initialize arrays to keep track of plays
let plays = [];
let Xplays = [];
let Oplays = [];
let currentPlayer = "X";

// Define the winning combinations
let winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Add event listeners to each square
for (let i = 1; i <= 9; i++) {
  let square = document.getElementById(i);
  square.addEventListener("click", function () {
    // Check if the square has already been played
    if (!plays.includes(i)) {
      // Update the square with the current player's symbol
      square.innerHTML = currentPlayer;
      // Add the play to the respective player's array
      currentPlayer === "X" ? Xplays.push(i) : Oplays.push(i);
      // Add the play to the general plays array
      plays.push(i);
      // Switch the current player
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      // Don't forget to add a call to the checkForWinner function
    }
  });
}

// Function to check for a winner
function checkForWinner() {
  // Check if the game is still ongoing
  if (plays.length != 9) {
    // Iterate through the winning combinations
    for (let i = 0; i < winningCombos.length; i++) {
      for (let x = 0; x < winningCombos[i].length; x++) {
        // Check if X has a winning combination
        if (
          Xplays.includes(winningCombos[i]) &&
          Xplays.includes(winningCombos[i + 1]) &&
          Xplays.includes(winningCombos[i + 2])
        ) {
          console.log("X wins");
          // Check if O has a winning combination
        } else if (
          Oplays.includes(winningCombos[i]) &&
          Oplays.includes(winningCombos[i + 1]) &&
          Oplays.includes(winningCombos[i + 2])
        ) {
          console.log("O wins");
        }
      }
    }
    // Check if the game is a tie
  } else if (plays.length === 9) {
    console.log("It's a tie");
  }

  checkForWinner();
}

let resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function () {
  reset();
});

function reset() {
  for (let i = 1; i <= 9; i++) {
    let square = document.getElementById(i);
    square.innerHTML = "";
  }
}
