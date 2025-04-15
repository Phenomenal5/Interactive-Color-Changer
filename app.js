// Wait until the entire HTML document has been fully loaded and parsed
document.addEventListener('DOMContentLoaded', function() {

    // Select the color box and button elements from the DOM
    const colorBox = document.getElementById('color-box');
    const btn = document.getElementById('change-color-btn');

    // Function to generate a random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF'; // Define the characters used in hex color codes
        let color = '#'; // Start building the hex color code
        for (let i = 0; i < 6; i++) {
            // Add a random character from letters to build a 6-digit hex color
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color; // Return the complete random color string
    }

    // Add a click event listener to the button
    btn.addEventListener('click', function() {
        const newColor = getRandomColor(); // Generate a new random color
        colorBox.style.backgroundColor = newColor; // Change the background color of the color box
    });

});
