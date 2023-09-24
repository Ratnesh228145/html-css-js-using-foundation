// Get references to the image and container
const movingImage = document.getElementById("movingImage");
const container = document.querySelector(".container");

// Initial position of the image
let xPos = 50; // percentage from the left
let yPos = 50; // percentage from the top

// Function to update the image's position
function updateImagePosition() {
    movingImage.style.transform = `translate(${xPos}%, ${yPos}%)`;
}

// Event listener for arrow key presses
document.addEventListener("keydown", (event) => {
    const moveAmount = 5; // Adjust this value to control the speed of movement

    switch (event.key) {
        case "ArrowUp":
            yPos -= moveAmount;
            break;
        case "ArrowDown":
            yPos += moveAmount;
            break;
        case "ArrowLeft":
            xPos -= moveAmount;
            break;
        case "ArrowRight":
            xPos += moveAmount;
            break;
        default:
            return; // Ignore other key presses
    }

    // Ensure the image stays within the container boundaries
    xPos = Math.max(Math.min(xPos, 100), 0);
    yPos = Math.max(Math.min(yPos, 100), 0);

    // Update the image's position
    updateImagePosition();
});

// Initial position setup
updateImagePosition();