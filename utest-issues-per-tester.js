
// Especificando el TesterName con el nombre del auditor se ejecuta el script 
//y solo se muestran los issues reportados por el 

let testerName= 'Hamid Fateh'
const tds = Array.prototype.slice.call(document.getElementsByTagName('td'))
const tdsTester = []

tds.forEach(td => {
    if(td.getAttribute('data-column-title') == "Tester ")
    tdsTester.push(td)
})

tdsTester.forEach(td=>{
    if(td.children[0].innerText != testerName)
        td.parentElement.style.display = 'none'
})