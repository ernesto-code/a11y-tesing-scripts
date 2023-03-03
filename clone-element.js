/*
INSTRUCTIONS:

1-Inspect the code and find the dynamically added element's container.
2-Add/Modify its class attribute's value, ensuring it contains the "a11ytest" class.
3-Open the browser console.
4-Activate the "Clone element" bookmark.
5-Check that "Observed and Cloned  .... Done!" has been log in console.
6-The dynamically added element must be already included in the DOM.

*/

// Version 1.0


const myElement = document.querySelector(".a11ytest");
let done = false;

const observer = new MutationObserver(mutations => {
    if (!done) {
        console.log(mutations);

        if (mutations[0].addedNodes.length > 0) {

            console.log("Observing....");
            console.log("Cloning  .... ");

            setTimeout(() => {
                const addedNode = mutations[0].addedNodes[0].cloneNode(true);
                myElement.appendChild(addedNode);

                done = true;
                console.log("Observed and Cloned  .... Done!");

            }, 500);
        };
    };
});

observer.observe(myElement, {
    childList: true
});

