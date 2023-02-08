
const targetElement = document.querySelector("#issueListTitle")
const checkbox = document.createElement('input');

// Crea un elemento de etiqueta para el checkbox
const label = document.createElement('label');
label.htmlFor = ' bold-text-checkbox';
label.innerHTML = 'Hiden Others';

// Agrega el checkbox y la etiqueta al DOM
targetElement.appendChild(checkbox);
targetElement.appendChild(label);

// Estiliza el checkbox
checkbox.style.marginLeft = '10px';

checkbox.type = 'checkbox';
checkbox.id = 'bold-text-checkbox';

// Agrega un evento de click al checkbox
checkbox.addEventListener('click', () => {
  // Obtiene todos los elementos que tienen el atributo ng-if con el valor 'row.testerId !== ctrl.parent.currentUser.id'
  let elements = document.querySelectorAll('[ng-if="row.testerId !== ctrl.parent.currentUser.id"]');
  
  // Si el checkbox está marcado
  if (checkbox.checked) {
    // Oculta los elementos
    for (let element of elements) {
      element.parentNode.parentNode.setAttribute('style', 'display:none');
    }
  } else {
    // Muestra los elementos
    for (let element of elements) {
      element.parentNode.parentNode.removeAttribute('style');
    }
  }
});

