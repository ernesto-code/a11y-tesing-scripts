
// Ensure the my testcases checkbox is unchecked.

const claimsTd = Array.prototype.slice.call(document.querySelectorAll("[ng-if='ctrl.isTTL']"))
const testCases = claimsTd.map(elt => elt.innerHTML == '0')
const unclaimedTCs = testCases.filter(Boolean)
console.log('Total TCs: ',testCases.length) 
console.log('Unclaimed TCs : ',unclaimedTCs.length)

// Display only the unclaimed Testcases

document.getElementsByClassName('responsive-table-head')[1].nextElementSibling.innerHTML =`<b>Showing ' + ${unclaimedTCs.length} +' unclaimed TCs of ${testCases.length}</b>`
const rowsTC = document.getElementsByTagName("tbody")[1].children

let index = 0

for(index=0; rowsTC.length > index; index++){
    if (rowsTC[index].children[6].innerHTML != "0")
    rowsTC[index].style.display = 'none'
}