# <img src="assets/icon.png" width="30" height="30" /> Clipboard Checker

Clipboard checker is a set it and forget it chrome extension. It will scan and check any text you copy in your browser to determine if malicious content has been added or changed. Did the website add some text you didn’t know about?

<a href="https://www.producthunt.com/posts/clipboard-checker?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-clipboard-checker" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=282049&theme=light" alt="Clipboard Checker - Keep your clipboard safe from JS injections. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

<a href="https://chrome.google.com/webstore/detail/clipboard-checker-for-chr/hnbgpklbpfklicackgnbbmifjchmppdb" target="_blank"><img src="assets/store.png" alt="Clipboard Checker - Keep your clipboard safe from JS injections. | Product Hunt" style="width: 250px;" width="250" /></a>

## Why do I need a clipboard checker?

Although unknown to many, JavaScript can [interact with your clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) without you noticing it. This adds for a bit of service (on the Fox News website, when you copy an excerpt, the line "Read more on Fox News..." is added), but can be harmful as well (check a – harmless – demo at [clipboardchecker.studiobrightside.io](https://clipboardchecker.studiobrightside.io)).

## Getting Started

This extension does not need any building/compiling to run. Mount the root of this folder as an "unpacked" extension in Google Chrome to develop.

```shell
$ git clone git@github.com:StudioBrightside/clipboardchecker.git
# and we're done 😉
```

## Contributing

We appreciate feedback and contribution to this repo! Do it however you want.

## License

Covered under [The MIT License](LICENSE).
