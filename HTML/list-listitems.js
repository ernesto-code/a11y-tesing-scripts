
    // Version 1.0
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
        const markARIAElements  = (text)=>{
    
    let rolesString = text
    const rolesArray = rolesString.split(",")
    let selectorArray = []
    let selectorSTR = ""
    
    rolesArray.forEach(role =>{
        selectorArray.push ("[role='"+role+"']")
    })
    
    selectorSTR = selectorArray.join(",")
    console.log("Marking: "+selectorSTR.length+" elements")
    
    const ariaElements = document.querySelectorAll(selectorSTR)
    selectorArray = []
    selectorSTR = ""
    
    let span = null
    
    ariaElements.forEach(elm=>{
            span = document.createElement("span")
            span.innerText = elm.getAttribute("role")
            applyStyle(span,"red")
            elm.insertAdjacentElement("afterbegin",span)
            elm.style.outline = "red thin solid"
            
        })
        console.clear()
    }
    
    const markHTMLElements  = (text)=>{
    
    let tagString = text
    const tagArray = tagString.split(",")
    let selectorArray = []
    let selectorSTR = ""
    
    tagArray.forEach(tag =>{
        selectorArray.push (tag)
    })
    
    selectorSTR = selectorArray.join(",")
    console.log("Marking: "+selectorSTR.length+" elements")
    console.log(selectorSTR)
    
    const htmlElements = document.querySelectorAll(selectorSTR)
    selectorArray = []
    selectorSTR = ""
    
    let span = null
    
    htmlElements.forEach(elm=>{
            span = document.createElement("span")
            span.innerText = elm.tagName
            applyStyle(span,"red")
            elm.parentElement.insertAdjacentElement("afterbegin",span)
            elm.style.outline = "red thin solid"
            
        })
    
    }
    
    console.clear()
    markHTMLElements("li,ul,ol")
    markARIAElements("list,listitem") 
    
    
            