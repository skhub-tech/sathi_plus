# Sathi Plus — Official Desktop Landing Page

A modern, high-converting, responsive landing page for **Sathi Plus** — the all-in-one AI, PDF, and media productivity companion for **macOS** and **Windows**.

Built strictly following **UI/UX Pro Max** design standards and the **Ponytail** minimalist, zero-bloat engineering methodology.

---

## 🌟 Highlights

- **Smart OS Detection**: Automatically recognizes whether visitors are on macOS (Apple Silicon M1-M4 / Intel) or Windows (10/11 64-bit) and highlights the corresponding download action.
- **Interactive Desktop App Mockup**: Authentic dark-themed desktop window frame with tab switching across real app screenshots:
  - 🎵 **Music Generator** (Prompt-to-music, length selector, vocal stem toggle)
  - 📖 **Document Reader** (Library folders, focused workspace, quick import)
  - 🎨 **Image Generator** (Conversational prompt refinement)
  - 📑 **12-in-1 PDF Suite** (Merge, split, edit, redact, encrypt, crop, JSON)
- **Full-Resolution Modal Lightbox**: Click any screenshot to inspect full 1080p+ resolution details.
- **Comprehensive 18+ Built-in Tools Matrix**: Showcases every single capability visible in the software's sidebar.
- **Copy-to-Clipboard CLI Commands**: Quick install commands for Homebrew (`brew install --cask sathi-plus`) and Windows Package Manager (`winget install SathiPlus`).
- **100% Offline Capable & Zero Bloat**: No npm, node_modules, webpack, or complex build chain required. Works out of the box with zero runtime dependencies.

---

## 📁 Project Structure

```
sathi plus/
├── index.html                 # Complete semantic HTML5 landing page
├── assets/
│   ├── css/
│   │   └── style.css          # Modern dark design tokens & responsive styles
│   ├── js/
│   │   ├── main.js            # OS detection, mockup switcher, modal lightbox, FAQ
│   │   └── lucide.min.js      # Authentic Lucide icons (offline bundle)
│   └── screenshots/
│       ├── music-generator.png
│       ├── document-reader.png
│       ├── image-generator.png
│       └── pdf-tools.png
└── README.md
```

---

## 🚀 How to Run / Preview

### 1. Direct File Opening (No server needed)
Double-click `index.html` or open it directly in Safari, Chrome, Edge, or Firefox:
```bash
open index.html
```

### 2. Local Web Server (Optional)
Run Python's built-in HTTP server:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

---

## 🎨 Design System Specifications

- **Primary Canvas**: `#09090d` (Deep Obsidian / Zinc)
- **Card Surfaces**: `#15151e` / `#1c1c28`
- **Brand Accent**: `#8b5cf6` (Electric Violet) & `#a78bfa` (Lavender Glow)
- **Status Green**: `#10b981` (Privacy & Active Verified)
- **Typography**: Inter (Google Fonts) & JetBrains Mono (for shortcuts/code)
- **Icons**: 100% Authentic Lucide Icons

