 // Aquí tu código
let button = document.getElementById('agregar');
let list = document.getElementById('lista');


button.addEventListener('click', function() {
    let element = prompt('¿Qué elemento quieres añadir a la lista');
    if (element && element.trim() !== '') {
        const listElement = document.createElement('li');
        listElement.innerText = element;
        list.appendChild(listElement);
    }
})