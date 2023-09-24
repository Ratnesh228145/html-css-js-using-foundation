// Array of colors
const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A1",
    "#33A1FF",
    "#A1FF33",
];

// Function to change the background color
function changeBackgroundColor() {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", changeBackgroundColor);