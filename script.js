let count = 0; // Initialize count

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

clickButton.addEventListener('click', function() {
    count++; // Increment count
    clickCountDisplay.innerText = count; // Display new count
});