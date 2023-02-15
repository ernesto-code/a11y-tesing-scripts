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
  
// Filter by components
  selectComponent.addEventListener("change", (event) => {
	const tableRows = document.querySelectorAll("tr");
	for (index = 1; index < tableRows.length; index++) {
	  tableRows[index].style.display = "table-row";
	}

	const selectElement = event.target;
	let comps = [];
	let title = null;
	let comp = null;
	let issuesCount = 0;
	let selectedComp = selectElement.options[selectElement.selectedIndex].text;
	let selectedValue = selectElement.value.toLowerCase().trim();
	console.log(selectComponent);

	for (index = 1; index < tableRows.length; index++) {
	  title = tableRows[index].children[1].children[0].children[0].innerText;
	  let lowerCaseTitle = title.toLowerCase().trim();
	  if (!lowerCaseTitle.includes(selectedValue)) {
		tableRows[index].style.display = "none";
	  } else issuesCount++;
	}
	itemsAmount.innerHTML = issuesCount + ' component(s) found';
  })

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

})