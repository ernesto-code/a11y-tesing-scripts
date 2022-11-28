
        const applyStyle = (elm)=>{
            elm.style.cssText = `
                width: fit-content;
                height: fit-content;
                position:fixed;
                top:20px;
                left:20px;
                padding:10px;
                border-radius: 5px;
                background-color: #fdab3d; 
                color:white;
                outline: white thin solid;
                outline-offset: -2px;
                display:inline;
                font-size:20px;
                font-weight:normal
                font-family:Arial, Helvetica, sans-serif;
                z-index: 100000;
                `
        }
    
    const titleElement = document.getElementsByTagName("title")[0]
    let span = document.createElement("span")
    span.innerText = "Title: " + titleElement.innerHTML
    applyStyle(span)
    document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",span)	
            