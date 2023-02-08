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
  for (let row of rows) {
    let checkbox = row.querySelector("input[type='checkbox']");
    if (!checkbox.checked) {
      row.style.display = "none";
    } else {
      row.style.display = "table-row";
    }
  }
};
table.parentNode.insertBefore(filterButton, table.nextSibling);

// Agregar un botón Clear
let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
clearButton.onclick = function() {
  for (let row of rows) {
    let checkbox = row.querySelector("input[type='checkbox']");
    checkbox.checked = false;
    row.style.display = "table-row";
  }
};
table.parentNode.insertBefore(clearButton, filterButton.nextSibling);
