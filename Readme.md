![banner](images/banner.png)


<img src="images/icon128.png" alt="logo" width="64" />

# Google Maps Button in Google Search


This Chrome extension adds a **"Maps"** button back into the top navigation bar of Google Search results, just like it used to appear alongside "All", "Images", "News", and "Videos".

![screen1](images/screen1.png)
![screen2](images/screen2.png)


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

- `"*://www.google.com/*"` match: Needed to run the script only on Google Search pages

✅ **No personal data is collected.**
✅ **No background activity.**
✅ **No analytics or external requests.**

## 📝 License

This project is open-source and free to use under the MIT license.
