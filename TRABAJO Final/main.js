const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Función para añadir una tarea
function addTask() {
    const taskText = taskInput.value.trim(); // Obtener y limpiar el texto del input
   
    if (taskText === '') {
        alert('Introduzca una tarea!');
        return;
    }

    // Crear un elemento <li> para la tarea
    const li = document.createElement('li');
    li.textContent = taskText;

    // Botón Eliminar!
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    // Añadir un evento al botón para eliminar la tarea
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Añadir el botón al <li> y luego agregar el <li> al <ul>
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
}

// Añadir tarea al presionar botón "Añadir"
addTaskBtn.addEventListener('click', addTask);

// Permitir añadir tareas al presionar Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
