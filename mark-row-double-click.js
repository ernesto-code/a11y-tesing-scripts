// Version 1.0

// Mark Row
document.addEventListener('dblclick',(ev)=>{
    console.log(ev.target)
    ev.target.parentElement.style.background = "#bddfff";
})