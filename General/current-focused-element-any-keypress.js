// Version 1.0

// This scripts Logs in console which element has 

document.addEventListener("keydown", (event) => {
            setTimeout(() => {
                console.clear()
                console.log("Current Focused Element:")
                console.log(document.activeElement)
            }, 55)
})
