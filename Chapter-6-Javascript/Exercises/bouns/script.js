// Variables to keep track of game state
let correctColor; // The correct RGB color the player needs to guess
let lives = 3; // Number of lives the player has
let score = 0; // Player's current score

// Function to generate a random RGB color
function generateColor() {
  // Generating random values for red, green, and blue components
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Returning the RGB color string
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to display colors for the game
function displayColors() {
  // Generating a new correct color for the player to guess
  correctColor = generateColor();
  // Displaying the correct RGB value for the player to see
  document.getElementById('rgbValue').textContent = correctColor;
  // Selecting the container for color options
  const colorOptions = document.getElementById('colorOptions');
  // Clearing previous color options
  colorOptions.innerHTML = '';
  // Array to store color options
  const options = [];
  // Adding the correct color to the options
  options.push(correctColor);
  // Adding two more random colors to the options
  for (let i = 0; i < 2; i++) {
    let option = generateColor();
    // Ensuring no duplicate options
    while (options.includes(option)) {
      option = generateColor();
    }
    options.push(option);
  }
  // Shuffling the options for random order
  options.sort(() => Math.random() - 0.5);
  // Creating HTML elements for each color option
  options.forEach(color => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.style.backgroundColor = color;
    // Adding event listener to check answer when clicked
    div.addEventListener('click', () => checkAnswer(color));
    colorOptions.appendChild(div);
  });
}

// Function to check player's answer
function checkAnswer(color) {
  // If player's guess matches the correct color
  if (color === correctColor) {
    // Increase score
    score++;
    // Display correct message
    document.getElementById('message').textContent = 'Correct!';
  } else {
    // Decrease lives
    lives--;
    // If no lives left, end game
    if (lives === 0) {
      gameOver();
    } else {
      // Display incorrect message with remaining lives
      document.getElementById('message').textContent = `Incorrect! Lives left: ${lives}`;
    }
  }
  // Update score display
  updateScore();
  // Display new set of colors
  displayColors();
}

// Function to update score display
function updateScore() {
  // Update displayed score with current score value
  document.getElementById('score').textContent = `Score: ${score}`;
}

// Function to handle game over scenario
function gameOver() {
  // Display game over message with final score
  document.getElementById('message').textContent = 'Game over! Final score: ' + score;
  // Remove event listeners from color options
  document.querySelectorAll('.option').forEach(option => {
    option.removeEventListener('click', checkAnswer);
  });
  // Display restart button
  document.getElementById('restartButton').style.display = 'block';
}

// Event listener for restart button click
document.getElementById('restartButton').addEventListener('click', () => {
  // Reset lives and score
  lives = 3;
  score = 0;
  // Update score display
  updateScore();
  // Display new set of colors
  displayColors();
  // Reset message display
  document.getElementById('message').textContent = '';
  // Hide restart button
  document.getElementById('restartButton').style.display = 'none';
});

// Event listener for start button click
document.getElementById('startButton').addEventListener('click', startGame);

// Function to start the game
function startGame() {
  // Hide start button
  document.getElementById('startButton').style.display = 'none';
  // Display game content
  document.getElementById('gameContent').style.display = 'block';
  // Initialize score display
  updateScore();
  // Display initial set of colors
  displayColors();
}
