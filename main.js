const inpTask = document.getElementById("input");
const btnAdd = document.getElementById("add");
const updateTask = document.querySelector(".task");

btnAdd.addEventListener("click", function() {
    const task = inpTask.value;
    let id = 1;
    
    updateTask.innerHTML += `
    <div class="list" id=todo${id}>
    <div style="display: flex; gap: 10px;">
    <input type="checkbox" id="inpCheckBox" >
    <h3 class="linethru">${task}</h3>
    </div>
    <button>Delete</button>
    </div>
    `;
    
    const todoid = document.querySelector(".list");
    console.log(todoid)
    
    
    const checkbox = document.getElementById("inpCheckBox");
    checkbox.addEventListener("click", function() {
        const list = document.querySelector(".linethru");

        if(checkbox.checked) {
            list.style.textDecoration = "line-through";
        } else {
            list.style.textDecoration = "none";
        }
        // console.log(list)
    })
    id++;
})
