const inpTask = document.getElementById("input");
const btnAdd = document.getElementById("add");
const updateTask = document.querySelector(".task");

btnAdd.addEventListener("click", function() {
    const task = inpTask.value;
    
    // Create a new div for the task
    const taskDiv = document.createElement("div");
    taskDiv.className = "list";

    taskDiv.innerHTML = `
    <div style="display: flex; gap: 10px;">
        <input type="checkbox" class="inpCheckBox">
        <h3 class="linethru">${task}</h3>
        <input type="text" class="edit-input" style="display:none;">
    </div>
    <button class="delete-btn">Delete</button>
    `;

    // Append the new task to the task container
    updateTask.appendChild(taskDiv);

    const checkbox = taskDiv.querySelector(".inpCheckBox");
    const taskText = taskDiv.querySelector(".linethru");
    const editInput = taskDiv.querySelector(".edit-input");

    // Checkbox: Line-through when checked
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    });

    // Double-click: Edit task text
    taskText.addEventListener("dblclick", function() {
        editInput.value = taskText.textContent;
        taskText.style.display = "none";
        editInput.style.display = "block";
        editInput.focus();
    });

    // Save edited text on blur or Enter key press
    editInput.addEventListener("blur", function() {
        saveEditedText(taskText, editInput);
    });

    editInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            saveEditedText(taskText, editInput);
        }
    });

    // Delete button functionality
    const deleteBtn = taskDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        updateTask.removeChild(taskDiv);
    });
});

// Function to save edited text
function saveEditedText(taskText, editInput) {
    taskText.textContent = editInput.value.trim() || taskText.textContent;
    editInput.style.display = "none";
    taskText.style.display = "block";
}



