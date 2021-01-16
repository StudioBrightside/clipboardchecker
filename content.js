/**
 * Listen to copy events
 * and dispatch our check_clipboard event
 */
document.addEventListener("copy", async (event) => {
  let selection = document.getSelection();

  chrome.runtime.sendMessage({
    message: "check_clipboard",
    selection: selection.toString(),
  });
});

/**
 * Receive notification events
 * from the background service
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // prevent the user from grave mistakes
  if (request.message === "show_notification") {
    // show popup
    vNotify.error({
      title: "Wait up!",
      text:
        "Your clipboard might not contain what you expect. Check it before pasting.",
      sticky: true,
      showClose: true,
    });

    // highlight selection
    let node_name = document.getSelection().focusNode.parentNode.nodeName;

    if (node_name == "CODE") {
      let range = document.getSelection().getRangeAt(0),
        span = document.createElement("span");

      span.className = "vnotify-highlight";
      span.appendChild(range.extractContents());
      range.insertNode(span);

      span.addEventListener("click", function (e) {
        e.target.classList.remove("vnotify-highlight");
      });
    }
  }
});
