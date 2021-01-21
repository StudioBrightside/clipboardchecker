/**
 * Listen to copy events
 * and dispatch our check_clipboard event
 */
document.addEventListener("copy", async (event) => {
  let selection = document.getSelection();

  if (selection.toString() || 0 !== selection.toString().length) {
    chrome.runtime.sendMessage({
      message: "check_clipboard",
      selection: selection.toString(),
    });
  }
});

/**
 * Receive notification events
 * from the background service
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // prevent the user from grave mistakes
  if (request.message === "show_notification") {
    // show popup
    popup({
      title: "Wait up!",
      text: "It seems like this website has modified your clipboard. If you copied something, we advice you to check it before using it.",
    });
  }
});
