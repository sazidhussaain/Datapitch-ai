document.addEventListener('DOMContentLoaded', () => {
    // Grab our button and the place where the score will show up
    const calcButton = document.querySelector('.calc-button');
    const scoreDisplay = document.querySelector('.score-number');

    calcButton.addEventListener('click', () => {
        // 1. Set the "loading" state
        calcButton.textContent = "Analyzing Pipeline Data...";
        calcButton.style.opacity = "0.7";
        calcButton.disabled = true; // Prevents spam clicking

        // 2. Simulate a slight delay so it feels like the AI is "thinking"
        setTimeout(() => {
            // Generate a random "Predictive Score" between 75 and 99
            const finalScore = Math.floor(Math.random() * (99 - 75 + 1)) + 75;
            let currentNumber = 0;

            // 3. Animate the number counting up
            const animationInterval = setInterval(() => {
                currentNumber += 3; // Counts up by 3s to make it fast

                if (currentNumber >= finalScore) {
                    currentNumber = finalScore; // Cap it exactly at the final score
                    clearInterval(animationInterval); // Stop the animation
                    
                    // Reset the button back to normal
                    calcButton.textContent = "Generate AI Lead Score";
                    calcButton.style.opacity = "1";
                    calcButton.disabled = false;
                }

                // Update the text on the screen
                scoreDisplay.textContent = currentNumber;
            }, 30); // Speed of the counting animation (30 milliseconds)

        }, 800); // 800ms artificial delay
    });
});