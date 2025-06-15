Crucial Sites Extension
Table of Contents

    About
    Features
    Installation
    Usage
    Development
    Contributing
    License

About

The "Crucial Sites" extension is a simple yet powerful browser add-on designed to help you quickly store and access your most important or frequently visited websites. Instead of cluttering your bookmarks or Browse history, this extension provides a dedicated, persistent list right in your browser's toolbar popup.
Features

    Quick Add: Easily add new website URLs directly from the extension's popup.
    Persistent Storage: All your crucial sites are saved using the browser's storage API, meaning they remain even after you close and reopen your browser.
    Instant Access: Click on any saved URL in the list to open it in a new tab.
    Easy Deletion: Remove sites from your list with a single click.
    Clean Interface: A straightforward and intuitive user interface for managing your links.
    Cross-Browser Compatible: Designed to work seamlessly across Firefox and Chromium-based browsers.

Installation

Install the Crucial Sites extension directly from your browser's add-on store:

Direct Link--> https://addons.mozilla.org/en-US/developers/addon/26db9ff7f0b14d10a216/versions/5969563

Usage

    Click the Crucial Sites extension icon in your browser's toolbar.
    In the popup, type the full URL of the website you want to save (e.g., https://www.google.com or wikipedia.org). The extension will try to prepend https:// if missing.
    Click the "Add" button or press Enter.
    The website will appear in your list.
    Click on any listed website to open it in a new tab.
    Click the "✖" button next to a site to remove it from your list.

Development

If you'd like to work on this extension or contribute:

    Clone the repository:
    
    Bash
    git clone https://github.com/Dutirium/site_bite_extension.git
    cd site_bite_extension

Install web-ext (Mozilla's Web Extension development tool):
Bash

npm install --global web-ext

Load for Development:

    Firefox: Go to about:debugging, click "This Firefox", then "Load Temporary Add-on..." and select your manifest.json file.
    Chrome: Go to chrome://extensions, enable "Developer mode", click "Load unpacked", and select your extension's folder.

Build/Package (for permanent installation or distribution):
Bash

    web-ext build

    This will create a .zip file in the web-ext-artifacts/ directory.

Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, feel free to open an issue or submit a pull request on the GitHub repository.
License

This project is open source and available under the MIT License.
