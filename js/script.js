 // Aquí tu código
let button = document.getElementById('agregar');
let list = document.getElementById('lista');


button.addEventListener('click', function() {
        for (let i = 0;; i++) {
            let element = prompt('¿Qué elemento quieres añadir a la lista\n(Deja vacío o cancela para terminar)');
            if (!element || element.trim() === '') {
                break;
            }
            const listElement = document.createElement('li');
            listElement.innerText = element;
            list.appendChild(listElement);
        }
});

