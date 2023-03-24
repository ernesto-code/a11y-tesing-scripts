// Version 1.0

// Mark Row
document.addEventListener('dblclick',(ev)=>{
    const targetElm = ev.target
    const parentElement = ev.target.parentElement
    console.log(targetElm)
    if(targetElm.tagName == 'TD'){
        console.log(parentElement.style.background)
        if(parentElement.style.background == "rgb(189, 223, 255)"){
            console.log('remove background')
            parentElement.style.background = "none";
        }
        else{
            parentElement.style.background = "rgb(189, 223, 255)";
            console.log('add background')
        }    
    } 
})