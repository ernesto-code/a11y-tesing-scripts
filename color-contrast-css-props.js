// This scripts prints in console the font-size,font-weight and color of the tageted element that has been right-clicked on the page. The element might display a red background for a half of a second.


    document.addEventListener("contextmenu", (event) => {
        const targetElement = event.target
        const bg = targetElement.style.background
        const color = window.getComputedStyle(targetElement, null).getPropertyValue('color')
        targetElement.style.backgroundColor = "red"
        console.clear()
        console.log("Element: ", targetElement)
        console.log("color: ",color)
        console.log("font-size:", window.getComputedStyle(targetElement, null).getPropertyValue('font-size'))
        console.log("font-weight:", window.getComputedStyle(targetElement, null).getPropertyValue('font-weight'))

        setTimeout(() => { targetElement.style.background = bg }, 500)
    })