/**
 * Receive check clipboard events from content.js
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "check_clipboard") {
    let actual_clipboard = getClipboard();

    if (actual_clipboard != request.selection.toString()) {
      // dispatch an event back so we can show a toast in the browser window
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "show_notification" });
      });
    }
  }
});

/**
 * Function to read the actual clipboard
 */
function getClipboard() {
  var result = null;
  var textarea = document.getElementById("ta");
  textarea.value = "";
  textarea.select();

  if (document.execCommand("paste")) {
    result = textarea.value;
  } else {
    console.error("failed to get clipboard content");
  }

  textarea.value = "";
  return result;
}
