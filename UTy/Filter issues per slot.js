// Version 1.0

// Filter Layout
const targetElement = document.querySelector("#issueListTitle");
const newItem = document.createElement("div");
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling;

let selectComponent = null;
var index;

newItem.id = "select-filter-script-issues-slot";
newItem.style.padding = "1em";
newItem.style.outline = "rgb(6, 107, 177) 1px solid";

// Layout set and adding to DOM
  let obtenerDato = document.getElementsByTagName("a");
  var resultfinal = [];
  var busqueda = [];

  for (var index = 0; index < obtenerDato.length; index++) {
	if (obtenerDato[index].getAttribute("ng-if") ==="!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)") {
	  var result = obtenerDato[index].firstChild.textContent;
	  var element = result.split(":");
	  busqueda.push(element[1]);
	  var lowerCaseElement = element[1].trim().toLowerCase();
	  if (!resultfinal[lowerCaseElement]) {
		resultfinal[lowerCaseElement] = element[1].trim();
	  }
	}
  }

  var sinDuplicados = Object.values(resultfinal);
  var selectHTML ='<select id="select-component"><option disabled selected>Select a component</option>';
  for (let component of sinDuplicados) {
	selectHTML += '<option>' + component + '</option>';
  }
  selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button>';
  newItem.innerHTML = selectHTML;
  console.log(newItem.innerHTML);
  targetElement.insertAdjacentElement("afterend", newItem);


setTimeout(() => {
  selectComponent = document.querySelector("#select-component");
  clearButton = document.querySelector("#clear-button");
  removeButton = document.querySelector("#remove-button");
  checkbox = document.querySelector("#bold-text-checkbox");
  
/// Filter Layout
const targetElement = document.querySelector("#issueListTitle");
const newItem = document.createElement("div");
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling;

let selectComponent = null;
var index;

newItem.id = "select-filter-script-issues-slot";
newItem.style.padding = "1em";
newItem.style.outline = "rgb(6, 107, 177) 1px solid";

// Layout set and adding to DOM
let obtenerDato = document.getElementsByTagName("a");
var resultfinal = {};
var busqueda = [];
var element = [];

for (var index = 0; index < obtenerDato.length; index++) {
  if (obtenerDato[index].getAttribute("ng-if") === "!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)") {
    var result = obtenerDato[index].firstChild.textContent;
    var element = result.split(":");
    busqueda.push(element[1].trim());
          
    var lowerCaseElement = element[1].trim().toLowerCase();
    if (!resultfinal[lowerCaseElement]) {
      resultfinal[lowerCaseElement] = element[1].trim();
    } else {
      var existingElement = resultfinal[lowerCaseElement];
      if (existingElement.length < element[1].trim().length && element[1].trim().includes(existingElement)) {
        resultfinal[lowerCaseElement] = element[1].trim();
      }
    }
  }
}

var sinDuplicados = Object.values(resultfinal);
const agrupados = eliminarDuplicados(sinDuplicados);
function eliminarDuplicados(arr) {
  let result = [];
  let palabraCandidata, palabraActual;
  let palabrasComparadas = {};

  for (let i = 0; i < arr.length; i++) {
    palabraCandidata = arr[i];

    for (let j = 0; j < result.length; j++) {
      palabraActual = result[j];

      if (palabrasComparadas[palabraCandidata + '-' + palabraActual]) {
        continue;
      }

      let palabrasCandidata = palabraCandidata.toLowerCase().split(' ');
      let palabrasActual = palabraActual.toLowerCase().split(' ');

      for (let k = 0; k < palabrasCandidata.length; k++) {
        for (let l = 0; l < palabrasActual.length; l++) {
          if (palabrasCandidata[k] === palabrasActual[l]) {
            let coincidencias = 0;
            for (let m = 0; m < palabrasCandidata.length; m++) {
              if (palabrasActual.includes(palabrasCandidata[m])) {
                coincidencias++;
              }
            }

            for (let m = 0; m < palabrasActual.length; m++) {
              if (palabrasCandidata.includes(palabrasActual[m])) {
                coincidencias++;
              }
            }

            if (coincidencias >= 2) {
              if (palabraCandidata.length > palabraActual.length) {
                result.splice(j, 1, palabraCandidata);
              }
              palabrasComparadas[palabraCandidata + '-' + palabraActual] = true;
            }
          }
        }
      }
    }

    result.push(palabraCandidata);
  }

  return result;
}
var mostrandoselect = agrupados.filter((valor, indice, arr) => {
  return arr.indexOf(valor) === indice;
});
console.log(mostrandoselect);
var selectHTML ='<select id="select-component"><option disabled selected>Select a component</option>';
for (let component of mostrandoselect) {
  selectHTML += '<option>' + component + '</option>';
}

  selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button>';
  newItem.innerHTML = selectHTML;
  targetElement.insertAdjacentElement("afterend", newItem);


setTimeout(() => {
  selectComponent = document.querySelector("#select-component");
  clearButton = document.querySelector("#clear-button");
  removeButton = document.querySelector("#remove-button");
  checkbox = document.querySelector("#bold-text-checkbox");
        
// Filter by components
selectComponent.addEventListener("change", (event) => {
const tableRows = document.querySelectorAll("tr");
for (let i = 1; i < tableRows.length; i++) {
tableRows[i].style.display = "table-row";
}

const selectElement = event.target;
const selectedValue = selectElement.value.toLowerCase().trim();
let issuesCount = 0;

for (let i = 1; i < tableRows.length; i++) {
const title = tableRows[i].children[1].children[0].children[0].innerText;
const lowerCaseTitle = title.toLowerCase().trim();

if (selectedValue === "deals page" && (lowerCaseTitle.includes("deal page") || lowerCaseTitle.includes("dealpage"))) {
issuesCount++;
} else if (lowerCaseTitle.includes(selectedValue)) {
issuesCount++;
} else {
const titleWords = lowerCaseTitle.split(" ");
let matchFound = false;
for (let j = 0; j < titleWords.length; j++) {
if (titleWords[j].includes(selectedValue)) {
  matchFound = true;
  break;
}
}
if (!matchFound) {
tableRows[i].style.display = "none";
}
}
}

itemsAmount.innerHTML = issuesCount + ' component(s) found';
});

// Display issues per selected component
const tableRows = document.querySelectorAll("tr");
clearButton.addEventListener('click',(event)=>{
for (index = 1; index < tableRows.length; index++ ){
tableRows[index].style.display = 'table-row'
}

const selectElement = document.querySelector("#select-component")
let selectedComp = selectElement.options[selectElement.selectedIndex].text
let selectedValue = selectElement.value
let issuesCount = 0
let title = null
console.log(selectComponent);

for (index = 1; index < tableRows.length; index++ ){
  title = tableRows[index].children[1].children[0].children[0].innerText
  if(title.includes(selectedValue)) {
  tableRows[index].style.display = 'none'
  } else
  issuesCount++;
}
itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all components except '+ selectedComp + '</b>.'
})
removeButton.addEventListener('click', (event) => {
for (index = 1; index < tableRows.length; index++) {
  tableRows[index].style.display = 'table-row';
}
selectComponent.selectedIndex = 0;
itemsAmount.innerHTML = 'Showing ' +(tableRows.length-1)+ ' for all components.';
})

});

})