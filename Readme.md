[!logo](blob/main/icon128.png)

# Google Maps Button in Google Search

This Chrome extension adds a **"Maps"** button back into the top navigation bar of Google Search results, just like it used to appear alongside "All", "Images", "News", and "Videos".

## 🔧 Features

- Adds a **"Maps"** link next to existing Google Search tabs
- Automatically inserts based on your current search query
- Uses native Google styling for seamless integration
- Lightweight and fast – no background scripts or performance impact

## 📦 Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **"Load unpacked"** and select the extension folder
5. Go to `google.com`, perform a search, and you'll see the **"Maps"** button

## 📁 File Structure

```
maps-button-extension/
├── manifest.json # Extension manifest (v3)
├── content.js # Main script that injects the "Maps" button
├── icon128.png # Icon used for the extension (optional)
└── README.md # This file
```


## 🔒 Permissions Justification

This extension requests **minimal permissions**:

- `"scripting"`: Required to inject a content script into the Google Search page
- `"*://www.google.com/*"` match: Needed to run the script only on Google Search pages

✅ **No personal data is collected.**
✅ **No background activity.**
✅ **No analytics or external requests.**

## 📝 License

This project is open-source and free to use under the MIT license.
