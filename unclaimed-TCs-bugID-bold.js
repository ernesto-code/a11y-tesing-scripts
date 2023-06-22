
let htmlCode = null
let newHTMLCode = null
let bugID = null
let head = null
let tail  = null
let newArr = []
const titlesElms = Array.from(document.getElementsByClassName('td-content-title'))

if(titlesElms.length > 0 ){
    titlesElms.forEach(elm =>{
        htmlCode = elm.innerHTML.split(':')
        head = htmlCode[0]
        bugID =`<strong>${htmlCode[1]}</strong>` 
        tail = htmlCode.slice(2)
        newArr.push(head)
        newArr.push(bugID)
        newArr.push(tail)
        newHTMLCode = newArr.join('')
        elm.innerHTML = newHTMLCode
        newArr = []
        
    })


}