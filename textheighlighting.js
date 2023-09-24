// Get the paragraph element by its ID
const paragraph = document.getElementById("paragraph");

// Split the paragraph text into words
const words = paragraph.textContent.split(/\s+/);

// Loop through each word and highlight if it's longer than 8 characters
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 8) {
        // Create a span element for the highlighted word
        const span = document.createElement("span");
        span.textContent = words[i];
        span.style.backgroundColor = "yellow";
        
        // Replace the original word with the highlighted span
        words[i] = span.outerHTML;
    }
}

// Join the modified words back together and set it as the paragraph's HTML
paragraph.innerHTML = words.join(" ");



