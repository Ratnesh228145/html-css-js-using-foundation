document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");
    const addItemButton = document.getElementById("addItemButton");

    // Pre-existing array of list items
    const itemsArray = [
        "Item 1",
        "Item 2",
        "Item 3",
        // Add more items as needed
    ];

    let currentIndex = 0;

    // Function to add a new list item
    function addListItem() {
        if (currentIndex < itemsArray.length) {
            const newItem = document.createElement("li");
            newItem.textContent = itemsArray[currentIndex];
            list.appendChild(newItem);
            currentIndex++;
        } else {
            alert("All items have been added.");
        }
    }

    // Event listener for the button click
    addItemButton.addEventListener("click", addListItem);

    // Initial list item addition
    addListItem();
});


