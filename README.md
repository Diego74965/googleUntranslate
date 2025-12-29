
# Google Untranslate Extension

## Overview

**Google Untranslate** automatically removes Google's automatic translation parameters from URLs, allowing you to browse in your preferred language without forced redirection to translated versions. This lightweight extension is a fork of [reddituntranslate](https://github.com/SeidSmatti/reddituntranslate), adapted specifically for removing Google's translation parameters (`?tl=xx`, `_x_tr_sl`, `_x_tr_tl`, `_x_tr_hl`) from all webpages. While this fork focuses on Google translation removal, it also retains the original Reddit untranslation feature from the base project.

## Features

- **Remove Translation Parameters**: Automatically strips out language translation parameters that Google appends to URLs
- **Works Globally**: Functions on any webpage, not just specific sites
- **Automatic URL Redirection**: Transparently removes translation parameters without user interaction
- **Lightweight & Efficient**: Operates seamlessly in the background with minimal performance impact using Manifest V3's declarativeNetRequest API
- **Privacy-Focused**: All URL processing happens locally on your device; no data is collected or transmitted

## Installation

### Manual Installation (Testing)

**For Chrome:**
1. Clone this repository:
   ```sh
   git clone https://github.com/Diego74965/googleUntranslate.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** in the top right corner
4. Click **Load unpacked** and select the `extension` directory from the cloned repository

**For Firefox:**
1. Clone this repository:
   ```sh
   git clone https://github.com/Diego74965/googleUntranslate.git
   ```

2. Open Firefox and navigate to `about:debugging`
3. Click **This Firefox** on the left sidebar
4. Click **Load Temporary Add-on...** and select the `manifest.json` file from the `extension` directory

Note: Firefox temporarily loads the extension and will remove it upon restart. Repeat these steps to reinstall after restarting.

## Usage

Once installed, Google Untranslate works automatically in the background. Simply browse normally—the extension will automatically remove translation parameters from any URL, ensuring you're redirected to the original, non-translated content.

### Screenshots

**Web Search Results:**
![Google Untranslate web search](image-1.png)

**Translation Bar Detection:**
![Translation bar in webpage](image.png)

## How It Works

The extension uses Chrome's Declarative Net Request API to intercept and transform URLs, removing the following parameters:
- `tl` (translation language)
- `_x_tr_sl` (source language)
- `_x_tr_tl` (target language)
- `_x_tr_hl` (UI language)

## Permissions

- **`declarativeNetRequest`**: Allows the extension to intercept and modify network requests to remove translation parameters
- **`storage`**: Stores user preference for optional features
- **Host Access**: Applied to all URLs (`<all_urls>`) to ensure the extension works across all webpages

## Privacy

Google Untranslate does not collect, store, or transmit any personal data. All URL processing occurs locally on your device.

## Repository Structure

```
├── extension/              # Current extension build
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── rules.json
│   └── icon.png
├── LICENSE
└── README.md
```

## Version History

- **Based on**: [reddituntranslate](https://github.com/SeidSmatti/reddituntranslate) by SeidSmatti

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for details.
