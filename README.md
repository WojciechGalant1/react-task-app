# React Todo App

A modern, feature-rich todo app built with React, Vite, and modular CSS.  
Supports light/dark themes, task tagging, animated backgrounds, and more.
This app is a full React-based rewrite and enhancement of my previous Vanilla JS Todo App

## Features

- 🌗 **Light/Dark Theme** — Toggle with smooth animated backgrounds, persists across sessions.
- 🏷️ **Task Tags** — Add, remove, and filter tasks by tags with suggestions.
- 📝 **Task Management** — Add, complete, delete, and clear all tasks.
- 🚨 **Animated Alerts** — Context-based notifications for all actions.
- 🛠️ **Options Modal** — Centralized theme and memory controls.
- 💾 **Persistent Storage** — Tasks and theme saved in `localStorage`.
- 🎨 **Modern UI** — Responsive, accessible, and visually appealing.
- 🧩 **Modular Code** — Custom hooks, context, and feature-based CSS.

## Project Structure

```
src/
  components/      # UI components (Header, Footer, TaskForm, etc.)
  hooks/           # Custom React hooks (useTasks, useTheme)
  pages/           # Page-level components (Home)
  styles/          # Modular CSS (split by feature)
  utils/           # Utility functions (filter, sort)
  assets/          # Static assets
  App.jsx          # App root
  main.jsx         # Entry point
  index.css        # Tailwind import
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

- **Add a task:** Use the input and (optionally) add tags.
- **Tag suggestions:** Start typing to filter tags, click to add.
- **Complete/delete:** Use the checkboxes and trash icons.
- **Theme switch:** Open "Options" in the header.
- **Clear all:** Use the "Clear local memory" button in the modal.

## Tech Stack

- React 18+
- Vite
- Modular CSS (no CSS-in-JS)
- Custom React Context & Hooks

## Author

- [Wojciech Galant](https://github.com/WojciechGalant1)

---

## Future Ideas

- [ ] Task due dates & reminders
- [ ] Tag-based filtering in the UI
- [ ] Task priorities
- [ ] Multi-list support
- [ ] User authentication & cloud sync
