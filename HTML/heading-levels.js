// Version 2.0
/*
2.0 en esta version la intension es usar un layout para contener todos los identificadores de los
elementos como el Accessibility Insight ext
*/


const bodyElement = document.querySelector('body')

// Adding container for the identification divs
const divContainer = document.creat
// Creating the identification divs according to the HTML element
// Adding divs to container
// Insering container in DOM

position: absolute !important;
    z-index: 2147483646 !important;
    top: 0 !important;
    left: 0 !important;
    overflow: visible !important;
    pointer-events: none !important;
    visibility: visible !important;







const applyStyle = (elm, color)=>{
    elm.style.cssText = 'width: fit-content;height: fit-content;padding:10px;border-radius: 5px;background-color: red; color:white;outline: white thin solid;outline-offset: -2px;display:inline;font-size:15px;font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-transform: capitalize;'
}

const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
const ariaHeadings = document.querySelectorAll("[role='heading']")
let span = null

headings.forEach(elm=>{
        span = document.createElement("span")
        span.innerText = elm.tagName
        applyStyle(span,"red")
        elm.parentElement.insertAdjacentElement("afterbegin",span)
        elm.style.outline = "red thin solid"
        
    })

ariaHeadings.forEach(elm=>{
            span = document.createElement("span")
            span.innerText = 'ARIA '+ elm.getAttribute("role")+' '+ elm.getAttribute("aria-level")
            applyStyle(span,"red")
            elm.insertAdjacentElement("afterbegin",span)
            elm.style.outline = "red thin solid"
            
        })
