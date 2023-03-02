// Version 1.0

let obtenerDatos = document.getElementsByTagName("span");
var result;
var result2=[];
var mostrar;

for (index = 0; index < obtenerDatos.length; index++ ){
    result= obtenerDatos[index].innerText;
    if((obtenerDatos[index].getAttribute('class') !='bug-status status-11'||
       obtenerDatos[index].getAttribute('class') !='bug-status status-2' ||
       obtenerDatos[index].getAttribute('class') !='bug-status status-12'||
       obtenerDatos[index].getAttribute('class') !='bug-status status-3' || 
       obtenerDatos[index].getAttribute('class') =='bug-status status-1')  && 
       (obtenerDatos[index].getAttribute('ng-if') =='row.numberOfReproducers > 0' && (result == '1'))){
        mostrar = obtenerDatos[index].parentNode.parentNode;
        mostrar.setAttribute('style', 'display:none');
    }
    console.log(mostrar);
}
