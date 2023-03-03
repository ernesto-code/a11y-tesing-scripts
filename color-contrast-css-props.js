// This scripts prints in console the font-size,font-weight and color of the tageted element that has been right-clicked on the page. The element might display a red background for a half of a second.

// Version 1.0

    document.addEventListener("contextmenu", (event) => {
        const targetElement = event.target
        const bg = targetElement.style.background
        const hasMap = new Map([
            ["8px", "6pt"],
            ["9px", "7pt"],
            ["10px", "7.5pt"],
            ["11px", "8pt"],
            ["12px", "9pt"],
            ["13px", "10pt"],
            ["14px", "10.5pt"],
            ["15px", "11pt"],
            ["16px", "12pt"],
            ["17px", "13pt"],
            ["18px", "13.5pt"],
            ["19px", "14pt"],
            ["20px", "14.5pt"],
            ["21px", "15pt"],
            ["22px", "16pt"],
            ["23px", "17pt"],
            ["24px", "18pt"],
            ["26px", "20pt"],
            ["29px", "22pt"],
            ["32px", "24pt"],
            ["35px", "26pt"],
            ["36px", "27pt"],
            ["37px", "28pt"],
            ["38px", "29pt"],
            ["40px", "30pt"],
            ["42px", "32pt"],
            ["45px", "34pt"],
            ["48px", "36pt"]
        ])

        const color = window.getComputedStyle(targetElement, null).getPropertyValue('color')
        const fontSize = window.getComputedStyle(targetElement, null).getPropertyValue('font-size')
        const fontWeight = window.getComputedStyle(targetElement, null).getPropertyValue('font-weight')

        const pxToDts = (size) => {
            let value = ""

            if (!size.includes("."))
                return hasMap.get(size)
            else {
                value = size.slice(0, size.length - 2)
                return hasMap.get(Math.floor(Number(value)) + "px") + "(approx.)"
            }
        }

        targetElement.style.backgroundColor = "red"
        console.clear()
        console.log("Element: ", targetElement)
        console.log("COLOR: ", color)
        console.log("SIZE:", fontSize, "-", pxToDts(String(fontSize)))
        console.log("WEIGHT:", fontWeight, fontWeight >= 600 ? "(Bold)" : "(No Bold)")
        //console.log("%cThis is a green text", "color:green");

        setTimeout(() => { targetElement.style.background = bg }, 800)
    })