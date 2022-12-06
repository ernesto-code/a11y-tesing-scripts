// After specifying the testcycles ID on the array it will return the total time logged for those testcycles

const cyclesIds = ['389837','389841']
const trs = Array.prototype.slice.call(document.getElementsByTagName('tr'))
const filteredTrs = trs.filter(row => cyclesIds.includes(row.children[11].children[0].innerText))
const timeLogs = filteredTrs.map(row => row.children[7].children[0].innerText)

// Get total time
const minutesTotalArr = []
const hoursTotalArr = []

let hoursTotal = 0
let minutesTotal = 0

timeLogs.forEach( timeLog =>{
    hoursTotalArr.push(timeLog.split(':')[0])
    minutesTotalArr.push(timeLog.split(':')[1])
})

hoursTotalArr.forEach(hr => {
    hoursTotal += parseInt(hr)
})
minutesTotalArr.forEach(min => {
    minutesTotal += parseInt(min)
})


console.log('hoursTotal: ' + hoursTotal)
console.log('minutesTotal: ' + minutesTotal)
