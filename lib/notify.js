function popup(args) {
  var elem = document.createElement("div");
  elem.classList.add("clipboard_notification__container");
  elem.innerHTML = '<img src="' + chrome.extension.getURL("assets/icon.png") + '" />';
  elem.innerHTML += "<strong>" + args.title + "</strong><br/>" + args.text;
  document.body.appendChild(elem);

  elem.addEventListener("click", function (event) {
    event.target.remove();
  });
}
