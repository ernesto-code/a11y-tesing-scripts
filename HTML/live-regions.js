/* role status not included */

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
    
        const htmlElements = document.querySelectorAll("[aria-live='polite'],[aria-live='assertive'],[role='status']")
         let span = null
    
        htmlElements.forEach(elm=>{
                span = document.createElement("span")
                span.innerText = "Live"
                applyStyle(span,"red")
                elm.parentElement.insertAdjacentElement("afterbegin",span)
                elm.style.outline = "red thin solid"
                
            })
            
            