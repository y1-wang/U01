const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Función para añadir una tarea
function addTask() {   
    if (inputBox.value === '') {
        alert('Introduzca una tarea!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
