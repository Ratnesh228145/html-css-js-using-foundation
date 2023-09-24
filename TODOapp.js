const todoinput = document.getElementById("todoinput");
const addtodobutton = document.getElementById("addtodo");
const todolist = document.getElementById("todolist");

addtodobutton.addEventListener("click", () => {
    const todotext = todoinput.value.trim(); 

    if (todotext !== "") {
        const listitem = document.createElement("li");
        listitem.innerHTML = `
            ${todotext}
            <button>Delete</button>`;
        todolist.appendChild(listitem); 

        // Clear the input field
        todoinput.value = "";

        // Add event listener to delete button
        const deletebutton = listitem.querySelector("button");
        deletebutton.addEventListener("click", () => {
            listitem.remove();
        });
    }
});