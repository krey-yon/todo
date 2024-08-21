const inpTask = document.getElementById("input");
const btnAdd = document.getElementById("add");
const updateTask = document.querySelector(".task");

let id = 1; // Move the id outside the event listener so it increments properly

btnAdd.addEventListener("click", function() {
    const task = inpTask.value;
    
    updateTask.innerHTML += `
    <div class="list" id="todo${id}">
        <div style="display: flex; gap: 10px;">
            <input type="checkbox" id="inpCheckBox${id}">
            <h3 class="linethru" id="task${id}">${task}</h3>
        </div>
        <button>Delete</button>
    </div>
    `;
    
    // Add an event listener to the specific checkbox
    const checkbox = document.getElementById(`inpCheckBox${id}`);
    checkbox.addEventListener("click", function() {
        const list = document.getElementById(`task${id}`);

        if(checkbox.checked) {
            list.style.textDecoration = "line-through";
        } else {
            list.style.textDecoration = "none";
        }
    });
    
    id++; // Increment id to ensure each task has a unique ID
});
