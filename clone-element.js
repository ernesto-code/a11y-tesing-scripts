//    C L O N E
/* 

This script clones the target element once the user clicks on it. An id must be provided to the target element.

Instructions:
1. Find the element to be cloned using the Elements Inspector on the Dev Tools.
2. Add an id attribte with the correct value ("mycombo" in this case)
3. Open the console (Shift + Ctrl + P in Chrome) and paste the script code.
4. Press enter and verify that "undefined" is printed on the console in case of error refresh the page and start over.
5. When cloning comboboxes, navigate to the element using keyboard and when the list is displayed, click on the field. 
6. There must be a message on the console saying that the element was cloned as sibling and it must be visible on the page.
7. Finally, remove from the DOM the older combobox (target element), otherwise there will be errors of duplicated elements on the page. 
*/


// SCRIPT CODE (Combobox)

const comboBox = document.querySelector("#mycombo")

const cloneElement = (elementToClone) => {
    let clonedElement = elementToClone.parentElement.cloneNode(true)
    elementToClone.parentElement.appendChild(clonedElement)
    console.log("Element cloned and inserted as sibling!")
}
comboBox.addEventListener("click", (event) => {
    console.log("Event Listener .... added!")
    setTimeout(() => {
        cloneElement(comboBox)
	comboBox.remove()
    }, 1000)
})



