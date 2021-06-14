//   LOG EXPANDED/COLLAPESED STATE CHANGE
/*
1-Inspeccionar el button que se va a testear
2-Agregarle la clase "a11ybutton"
3-Abrir la consola
4-Pegar el codigo del script y dar Enter (Asegurarse que pone "undefined")
5-Testear el button para verificar el aria-expanded dando mas menos 1s entre un cambio de estado y otro. 

*/

//  SCRIPT 

const button = document.querySelector(".a11ybutton")
let state = button.getAttribute("aria-expanded")
let str = ""

button.addEventListener("click", (event) => {
    setTimeout(() => {
        state = button.getAttribute("aria-expanded")
        if (state == "true") str = "Expanded"
        else str = "Collapsed"
        console.log("Current state: ", str)
    }, 500)

})
button.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.key == "Enter" || event.key == "Space") {
            state = button.getAttribute("aria-expanded")
            if (state == "true") str = "Expanded"
            else str = "Collapsed"
            console.log("Current state: ", str)
        }

    }, 500)

})
button.addEventListener("focus", (event) => {
    setTimeout(() => {
        state = button.getAttribute("aria-expanded")
        if (state == "true") str = "Expanded"
        else str = "Collapsed"
        console.log("Current state: ", str)
    }, 500)

})


