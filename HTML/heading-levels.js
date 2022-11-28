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
