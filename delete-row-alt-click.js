// Version 1.0
document.addEventListener('click',(ev)=>{
    if(ev.altKey)
       { 
        console.log(ev.target)
        ev.target.parentElement.remove()
    }
})