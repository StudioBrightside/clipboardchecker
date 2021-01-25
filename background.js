hashCode = function (s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

/**
 * Receive check clipboard events from content.js
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "check_clipboard") {
    let actual_clipboard = getClipboard();

    if (hashCode(actual_clipboard) != hashCode(request.selection)) {
      // dispatch an event back so we can show a toast in the browser window
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "show_notification" });
      });
    }
  }
});

/**
 * Function to read the actual clipboard
 * @see: https://stackoverflow.com/questions/22702446/how-to-get-clipboard-data-in-chrome-extension
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
