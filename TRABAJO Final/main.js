const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Función para añadir una tarea a la lista
function addTask() {   
    if (inputBox.value === '') {  //si envían una tarea vacía sale una alerta en el navegador
        alert('Introduzca una tarea!'); //este es el mensaje que saltaría
    }
    else{
        let li = document.createElement("li"); //crea el elemente de lista
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //muestra la X como botón de eliminar
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //almacena los datos de la lista para que no se borre cuando se cierre el navegador
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){  //si clicamos en <li>, aparecerá como marcado
        e.target.classList.toggle("checked");
        saveData(); //guardar los cambios
    }
    else if(e.target.tagName === "SPAN"){ //y si clicamos en <span> (la X), se desmarcará
        e.target.parentElement.remove();
        saveData(); //guardar los cambios
    }
}, false);

function saveData(){ //función del almacenaje de los datos y cambios actualizados
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){ //al refrescar el navegador
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();