// Version 1.1
// Ensure the preview dialog is displayed before running the script
const details = document.getElementsByClassName('details')[0];
details.style.setProperty('white-space', 'pre-wrap', 'important');

function extractInfo(html) {
  var result = {};
  // Extract Action Details
  var actionDetails = html.match(/----\sACTION\sDETAILS\s----([\s\S]*?)(?=----\sENVIRONMENT\s----)/);
  result.actionDetails = actionDetails[1].trim().replace(/:\n/g, ":\n\n")

  // Extract Environment
  var environment = html.match(/----\sENVIRONMENT\s----([\s\S]*?)(?=----\sAPPLAUSE\sPROPERTIES\s----)/);
  result.environment = environment[1].trim().replace(/:\n/g, ":\n\n")

  // Extract Applause Properties
  var applauseProperties = /----\sAPPLAUSE\sPROPERTIES\s----([\s\S]*?)----\sAPPLAUSE\sATTACHMENT\(S\)\s----/.exec(html);
  result.applauseProperties = applauseProperties[0].trim();

// Extract Applause Attachments
var attachments = html.match(/(https:\/\/[^\s]+)/g);
result.attachments = attachments.join(" ");

//Make links
result.attachments = result.attachments.replace(/(https:\/\/[^\s]+)/g, function(link){
  return "<a href='" + link + "' style='width: 500px;'>" + link + "</a>";
});
  return result;
}

var html = details.innerHTML;
var info = extractInfo(html);
details.innerHTML = info.actionDetails + info.environment + info.applauseProperties + info.attachments;
