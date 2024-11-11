let taskList = []

const createTask = function(text){
    return {
        done: false,
        text: text,
        create: new Date()
    }
}

const addTask = function(){
    let task = createTask(taskElement.value)
    taskList.push(task)
    console.log(taskList)
}

const taskElement = document.getElementById('task')
const addButtonE1 = document.getElementById('addButton')
addButtonE1.onclick = addTask



console.log('----------------')
let input = prompt('inserte un número')
let max = 20

if(input > max){
    console.log("la entrada no puede ser mayor que 20")
}else{
    console.log("tu valor es: " + input)
}

let msg = (input > max) ? ("la entrada no puede ser mayor que 20") : ("tu valor es: " + input)
console.log (msg)


console.log('----------------')

let lista = [1,2,3,4,5]
for (let i=0; i<lista.length; i++){
    let[head, ...tail] = lista.slice(i)
    console.log('actual: ', head)
    console.log('rest: ', tail)
}