// Encontrar la tabla
let table = document.querySelector(".responsive-table");

// Agregar una columna con checkbox al inicio de cada fila
let rows = table.querySelectorAll("tbody tr");
for (let row of rows) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let td = document.createElement("td");
  td.appendChild(checkbox);
  row.insertBefore(td, row.firstChild);
}

// Agregar un botón filter
let filterButton = document.createElement("button");
filterButton.innerHTML = "Filter";
filterButton.onclick = function() {
let filteredRows = [];
for (let row of rows) {
  let checkbox = row.querySelector("input[type='checkbox']");
  if (!checkbox.checked) {
    filteredRows.push(row);
  }
}
for (let row of filteredRows) {
  row.style.display = "none";
}
issuesCount = rows.length - filteredRows.length;
itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.';

};

// Agregar un botón Clear
let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
clearButton.onclick = function() {
  for (let row of rows) {
    let checkbox = row.querySelector("input[type='checkbox']");
    checkbox.checked = false;
    row.style.display = "table-row";
  }
  // Actualizar el número de elementos y el contenido del elemento itemsAmount
  issuesCount = rows.length;
  itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.';
};

// Agregar contenedor para los botones y fijarlos al principio de la tabla
let buttonContainer = document.createElement("div");
buttonContainer.appendChild(filterButton);
buttonContainer.appendChild(clearButton);
table.parentNode.insertBefore(buttonContainer, table);

// Ocultar el elemento de paginación
let paginationDiv = table.nextElementSibling;
if (paginationDiv && paginationDiv.classList.contains("responsive-table-pagination")) {
  paginationDiv.style.display = "none";
}

// Agregar un elemento para mostrar la cantidad de elementos que se están mostrando
let issuesCount = rows.length;
let selectedComp = "Selected Component";
let itemsAmount = document.createElement("p");
itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.';
buttonContainer.insertBefore(itemsAmount, buttonContainer.firstChild);
