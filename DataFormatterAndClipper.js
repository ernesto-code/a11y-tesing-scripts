// Function to copy text to clipboard
function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea')
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Copying text command was ' + msg)
  } catch (err) {
    console.error('Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}

// Function to format text by replacing <br> with space, removing HTML tags, and replacing line breaks with space
function formatText(text, removeHTML) {
  var formattedText = text.replace(/<br>/g, ' ') // Replace <br> with space

  if (removeHTML) {
    formattedText = formattedText.replace(/<[^>]*>/g, '') // Remove HTML tags
  }

  return formattedText.replace(/\n/g, ' ') // Replace line breaks with space
}

// Selectors for the data to be extracted
var title = document.querySelector('.issue-title h3').innerText
var severity = document.querySelector('.issue-status-item dd span[ng-bind="ctrl.bug.bugSeverity"]').innerText
var issueType = document.querySelector('.issue-status-item dd[ng-bind="ctrl.bug.bugType"]').innerText
var actionPerformed = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.actionPerformed"]').innerHTML
var expectedResult = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.expectedResult"]').innerHTML
var actualResult = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.result"]').textContent
var suggestedResolution = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.bugAccessibility.suggestedResolution"]').innerHTML
var failedWcagCheckpoint = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.bugAccessibility.failedWcagCheckpoint"]').innerHTML
var areaIssueWasFound = document.querySelector('dd[html-compile-unsafe*="ctrl.field.displayValue"]').innerText
var userImpact = document.querySelector('dd[html-compile-unsafe*="ctrl.bug.bugAccessibility.userImpact"]').innerHTML
var attachmentImageUrl = document.querySelector('.attach-preview a').getAttribute('href')
var attachmentVideoUrl = document.querySelector('.attach-preview video source') ? document.querySelector('.attach-preview video source').getAttribute('src') : '';

var attachments  = attachmentVideoUrl ? `${attachmentImageUrl} ${attachmentVideoUrl}` : attachmentImageUrl

var actionPerformedText = formatText(actionPerformed, true)
var suggestedResolutionText = formatText(suggestedResolution, true)
var failedWcagCheckpointText = formatText(failedWcagCheckpoint, true)
var actualResultText = formatText(actualResult, false)
var userImpactText = formatText(userImpact, false)

// Format the data into a string to be copied to the clipboard
var formattedData = `${title}\t${issueType}\t${severity}\t${actionPerformedText}\t${expectedResult}\t${actualResultText}\t${suggestedResolutionText}\t${failedWcagCheckpointText}\t${areaIssueWasFound}\t${userImpactText}\t${attachments}`

// Copy the formatted string to the clipboard
copyTextToClipboard(formattedData)

// Clear the console
console.clear();