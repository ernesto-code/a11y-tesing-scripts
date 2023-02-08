// Filter Layout
const targetElement = document.querySelector("#issueListTitle")
const newItem = document.createElement("div")
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

let checkbox = null
let selectComponent = null
var index;

newItem.id = "select-filter-script"
newItem.style.padding = "1em"
newItem.style.outline = "rgb(6, 107, 177) 1px solid"

// Layout set and adding to DOM
let obtenerDato = document.getElementsByTagName("a");
var resultfinal = []

for (var index = 0; index < obtenerDato.length; index++ ){  
    if(obtenerDato[index].getAttribute('ng-if')==='!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)'){
        var result = obtenerDato[index].firstChild.textContent
        var element = result.split('/');
        resultfinal.push(element[0])
    }  
}
var unicos = [... new Set(resultfinal)];
var unicoscoincidencia = []

for (index = 0; index < unicos.length; index++ ){
    unicoscoincidencia[index] = []
    valor = unicos[index];
    valor2 = valor.split(' ');
    for (index1 = index+1; index1 < unicos.length; ){
        valorlist = unicos[index1];
        valorlist2 = valorlist.split(' ');
        if(valor2[0] === valorlist2[0]){
        if(valor.length > valorlist.length) {
                unicoscoincidencia[index].push(valorlist)
                unicos = unicos.filter((item) => item !== valorlist);
        }
        else{
                unicoscoincidencia[index].push(valor)
                unicos = unicos.filter((item) => item !== valor);
        }
        } else {
            index1++;
        }
    }
}


var selectHTML = '<select id="select-component"><option disabled selected>Select a component</option>'
    
for (let component of unicos) {
    selectHTML += 
    `<option>`+component+`</option>`   
    }

selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button><label style="display:inline;margin-left:3em;"><input type="checkbox" id="bold-text-checkbox" style="display:inline;"> Bolded titles</label>'
newItem.innerHTML = selectHTML         
console.log(newItem.innerHTML);
targetElement.insertAdjacentElement("afterend",newItem)

// Event listeners adding
setTimeout(()=>{
    checkbox = document.querySelector("#bold-text-checkbox")
    selectComponent = document.querySelector("#select-component")
    clearButton = document.querySelector("#clear-button")
    removeButton = document.querySelector("#remove-button")

    let obtenerDato = document.getElementsByTagName("td");
    let tableRows =   document.getElementsByTagName("tr");
    var tdArray = Array.prototype.slice.call(document.getElementsByTagName("td"))

    // Bolded text
    checkbox.addEventListener('click',()=>{
        var first;
        var second;
        let title = ''
        let titleDesc =''
        let arrTitle =[]
        for (index = 0; index < obtenerDato.length; index++ ){    
                if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
                    first= obtenerDato[index].childNodes;    
                    second = first[3].childNodes; 
                    title = second[2].innerHTML
                    arrTitle = title.split('/')
                    if(checkbox.checked)
                        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
                    else
                        titleDesc = arrTitle[arrTitle.length -1]
                    arrTitle.pop()
                    arrTitle.push(titleDesc)
                    second[2].innerHTML = arrTitle.join('/')
                }
        }
        
    })

    // Display issues per selected component
    clearButton.addEventListener('click',()=>{
        // Showing all issues
        let issuesCount = 0
        console.log('showing ....')
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
            issuesCount++
        }
        selectComponent.selectedIndex = 0;
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ tableRows.length + '</b> component.'
    })

    // Display issues of all components except selected component
    removeButton.addEventListener('click',()=>{
        const selectElement = document.querySelector("#select-component")
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if (title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC]))
                        encontrado = true; 
                }
                if (encontrado)
                    tableRows[index].style.display = 'none'
                else {
                    tableRows[index].style.display = 'table-row'
                    issuesCount++
                }
            } else 
                tableRows[index].style.display = 'none'
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ selectedComp + '</b> component.'

    })
    
    // Filter by components
    selectComponent.addEventListener('change',(event)=>{
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
        }
        
        const selectElement = event.target
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if(title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC])) {
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) 
                    tableRows[index].style.display = 'none'
                else
                    issuesCount++;
            } else 
                issuesCount++
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'
    })
})