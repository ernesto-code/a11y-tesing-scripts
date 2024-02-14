// este script marca en la platforma los issues que se les pasa en el array idsToFlagArray, estos ids son tratados como enteros, 
//o sea no tendrian las comillas a la hora de pasarlo.

const tds = Array.from(document.getElementsByTagName("td"))
const idsCells = tds.filter(elm => elm.getAttribute('data-column-title') == '#')
const idsToFlagArray = [6241390,
    6241644,
    6241478,
    6242588,
    6242579,
    6241505,
    6242608,
    6242631,
    6242624,
    6241522,
    6241558,
    6241460,
    6241488,
    6241550,
    6241605,
    6241624,
    6243856,
    6242695,
    6242792,
    6242803,
    6242812,
    6242823,
    6242835,
    6242846,
    6242863,
    6242874,
    6242907,
    6242927,
    6242982,
    6242919,
    6242887,
    6242868,
    6242842,
    6242827,
    6242593,
    6243879,
    6242621,
    6242641,
    6243385,
    6242675,
    6242685,
    6242696,
    6242706,
    6242740,
    6243101,
    6243116,
    6243116,
    6243362,
    6243898,
    6242790,
    6242736,
    6242756,
    6242765,
    6242815,
    6242776,
    6242832,
    6242542,
    6242586,
    6242596,
    6242607, 
    6242700,
    6242671,
    6242619,
    6242656,
    6242649,
    6242640,
    6242633]

idsCells.forEach( td => {
            if(idsToFlagArray.includes(parseInt(td.innerText))){
                td.parentElement.style.backgroundColor = 'lightblue'
        }
    }
)


