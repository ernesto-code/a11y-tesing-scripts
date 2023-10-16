const informative = document.querySelectorAll("[alt='Priority: Informative']")
const informative1 = document.querySelectorAll("[alt='Informative']")

const low = document.querySelectorAll("[alt='Priority: Low']")
const low1 = document.querySelectorAll("[alt='Low']")

const med = document.querySelectorAll("[alt='Priority: Medium']")
const med1 = document.querySelectorAll("[alt='Medium']")

const high = document.querySelectorAll("[alt='Priority: High']")
const high1 = document.querySelectorAll("[alt='High']")

const highest = document.querySelectorAll("[alt='Priority: Highest']")
const highest1 = document.querySelectorAll("[alt='Highest']")

const total = informative.length + low.length + med.length + high.length + highest.length
const total1  = informative1.length + low1.length + med1.length + high1.length + highest1.length

let output1 = `Board view 1 \n Highest: ${highest.length} \n High: ${high.length} \n Medium: ${med.length} \n Low: ${low.length} \n Informative: ${informative.length} \n Total: ${total}`
let output2 = `Board view 2 \n Highest: ${highest1.length} \n High: ${high1.length} \n Medium: ${med1.length} \n Low: ${low1.length} \n Informative: ${informative1.length} \n Total: ${total1}`

console.log(output1)
console.log('-----')
console.log(output2)