
const targetElement = document.querySelector("#issueListTitle")
const checkbox = document.createElement('input');

// Crea un elemento de etiqueta para el checkbox
const label = document.createElement('label');
label.htmlFor = ' bold-text-checkbox';
label.innerHTML = 'Hide Yours';

// Agrega el checkbox y la etiqueta al DOM
targetElement.appendChild(checkbox);
targetElement.appendChild(label);

// Estiliza el checkbox
checkbox.style.marginLeft = '10px';

checkbox.type = 'checkbox';
checkbox.id = 'bold-text-checkbox';

let isHidden = false;
checkbox.addEventListener('click', () => {
  // Obtiene todos los elementos que tienen el atributo ng-if con el valor 'row.testerId !== ctrl.parent.currentUser.id'
  let elements = document.querySelectorAll('[ng-if="row.testerId === ctrl.parent.currentUser.id"]');
  if (!isHidden) {
    // Oculta los elementos
    for (let element of elements) {
      element.parentNode.parentNode.style.display = 'none';
    }
  } else {
    // Muestra los elementos
    for (let element of elements) {
      element.parentNode.parentNode.style.display = '';
    }
  }
  isHidden = !isHidden;
});