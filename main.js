//Variables
var mal = 'Ya no se usa'
let bien = 'Variable con contexto ok'
const bienTb = 'Valor que nunca se modifica'


//Bloques
let myObject = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',
    propiedad3: 'valor3'
}


//Listas
let myList = ['un string', 4, myObject]
//myList.pop()


//Funciones
let myFunction =  function() {
    console.log('Ejecuto la función anónima') //preferible
}

function myNamedFunction(){
    console.log('Ejecuto la función con nombre')
}

myFunction()
myNamedFunction()


//Ejercicio
const HELLO = 'Hello, '
let messageElement = document.getElementById('message')
let inputElement = document.getElementById('name')
let buttonElement = document.getElementById('sendButton')

const sendHandler = function() {
    messageElement.innerHTML = HELLO + inputElement.value
}

buttonElement.onclick = sendHandler


/*//Código
console.log(myObject)
let messageElement = document.getElementById('message')
//console.log(messageElement);
messageElement.innerHTML += 'Clase' //no me reconoce el innerHTML!
*/

