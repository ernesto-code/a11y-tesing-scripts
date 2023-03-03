// Version 1.1
        
        const applyStyle = (elm, color)=>{
            elm.style.cssText = `
                width: fit-content;
                height: fit-content;
                padding:10px;
                border-radius: 5px;
                background-color: red; 
                color:white;
                outline: white thin solid;
                outline-offset: -2px;
                display:inline;
                font-size:15px;
                font-weight:normal
                font-family:Arial, Helvetica, sans-serif;
                text-transform: capitalize;
                `
        }
        const brElements = document.querySelectorAll("br")
        brElements.forEach(elm=>{
            span = document.createElement("span")
            span.innerText = elm.tagName
            applyStyle(span,"red")
            elm.parentElement.insertAdjacentElement("afterbegin",span)
            elm.style.outline = "red thin solid"
            
        })
    
    console.clear()
    console.log(brElements.length + ' br elements found on the page')
            