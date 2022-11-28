// BOLD TITLES in platforms
var index;
var first;
var second;
let obtenerDato = document.getElementsByTagName("td");
let title = ''
let titleDesc =''
let arrTitle =[]

for (index = 0; index < obtenerDato.length; index++ ){    
    if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
    first= obtenerDato[index].childNodes;    
    second = first[3].childNodes; 
    title = second[2].innerHTML
    arrTitle = title.split('/')
    titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
    arrTitle.pop()
    arrTitle.push(titleDesc)
    second[2].innerHTML = arrTitle.join('/')
    }

}