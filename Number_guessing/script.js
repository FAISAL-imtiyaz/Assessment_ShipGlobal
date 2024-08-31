// // script.js
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 5;

// document.getElementById("guess-button").addEventListener("click", function() {
//     const userGuess = parseInt(document.getElementById("guess-input").value);
//     const feedback = document.getElementById("feedback");
//     const chances = document.getElementById("chances");

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         feedback.textContent = "Please enter a number between 1 and 100";
//         return;
//     }

//     attempts--;
//     if (userGuess > randomNumber) {
//         feedback.textContent = "Your number is high";
//     } else if (userGuess < randomNumber) {
//         feedback.textContent = "Your number is low";
//     } else {
//         feedback.textContent = `Correct! The number was ${randomNumber}. It took you ${5 - attempts} attempts.`;
//         document.getElementById("guess-button").style.display = "none";
//         document.getElementById("restart-button").style.display = "inline-block";
//     }

//     if (attempts === 0 && userGuess !== randomNumber) {
//         feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
//         document.getElementById("guess-button").style.display = "none";
//         document.getElementById("restart-button").style.display = "inline-block";
//     }

//     chances.textContent = `You have ${attempts} Chances`;
// });

// document.getElementById("restart-button").addEventListener("click", function() {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     attempts = 5;
//     feedback.textContent = "Guess a number from 1 to 100";
//     document.getElementById("guess-input").value = "";
//     document.getElementById("chances").textContent = `You have 5 Chances`;
//     document.getElementById("guess-button").style.display = "inline-block";
//     document.getElementById("restart-button").style.display = "none";
// });


// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Set initial number of attempts
let attempts = 5;

// Add event listener to the "Check" button
document.getElementById("guess-button").addEventListener("click", function() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById("guess-input").value);
    // Get the feedback and chances elements
    const feedback = document.getElementById("feedback");
    const chances = document.getElementById("chances");

    // Check if the input is a valid number within the specified range
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100";
        return;
    }

    // Decrement the number of attempts
    attempts--;
    
    // Provide feedback based on the user's guess
    if (userGuess > randomNumber) {
        feedback.textContent = "Your number is high";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Your number is low";
    } else {
        // If the guess is correct, display a success message
        feedback.textContent = `Correct! The number was ${randomNumber}. It took you ${5 - attempts} attempts.`;
        // Hide the "Check" button and show the "Restart" button
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("restart-button").style.display = "inline-block";
    }

    // If the user runs out of attempts, end the game
    if (attempts === 0 && userGuess !== randomNumber) {
        feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById("guess-button").style.display = "none";
        document.getElementById("restart-button").style.display = "inline-block";
    }

    // Update the chances display
    chances.textContent = `You have ${attempts} Chances`;
});

// Add event listener to the "Restart" button
document.getElementById("restart-button").addEventListener("click", function() {
    // Reset the random number and attempts
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    // Reset the feedback and input field
    feedback.textContent = "Guess a number from 1 to 100";
    document.getElementById("guess-input").value = "";
    document.getElementById("chances").textContent = `You have 5 Chances`;
    // Show the "Check" button and hide the "Restart" button
    document.getElementById("guess-button").style.display = "inline-block";
    document.getElementById("restart-button").style.display = "none";
});
