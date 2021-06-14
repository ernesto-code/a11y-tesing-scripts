//INSTRUCTIONS

/*

1-Abrir la consola
2-Pegar el codigo del script y dar Enter (Asegurarse que pone "undefined")
3-En el momento que este el foco perdido, persionar la tecla "p"
4-En la consola aparecera el elemento que esta enfocado

*/


document.addEventListener("keydown", (event) => {
    if (event.key == "p") {
        console.clear()
        console.log("Current Focused Element:")
        console.log(document.activeElement)

    }
})


/* show focused element by every keypress 


document.addEventListener("keydown", (event) => {
        console.clear()
        console.log("Current Focused Element:")
        console.log(document.activeElement)

})
*/