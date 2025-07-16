# Todo App

A modern React todo application built with Vite, featuring a clean and responsive design with dark/light theme support.

## Features

- ✅ Add, delete, and toggle task completion
- 🔍 Filter tasks (All, Completed, Unfinished)
- 📝 Sort tasks (A-Z, Z-A, Newest, Oldest)
- 💾 Persistent storage using localStorage
- 🌙 Dark/Light theme support
- 📱 Responsive design
- ⚡ Built with Vite for fast development

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TaskForm.jsx    # Task input form
│   ├── TaskList.jsx    # Task list container
│   ├── TaskItem.jsx    # Individual task item
│   └── TaskControls.jsx # Filter and sort controls
├── hooks/              # Custom React hooks
│   └── useTasks.js     # Task state management
├── pages/              # Page components
│   └── Home.jsx        # Main todo page
├── utils/              # Utility functions
│   ├── filter.js       # Task filtering logic
│   └── sort.js         # Task sorting logic
├── styles/             # Custom CSS styles
│   └── style.css       # Main stylesheet
└── App.jsx             # Root component
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Code Quality Improvements Made

- ✅ Optimized CSS file by removing unused styles
- ✅ Fixed SVG attribute naming (class → className)
- ✅ Removed commented code from hooks
- ✅ Improved component structure and organization
- ✅ Enhanced responsive design
- ✅ Better accessibility with proper form labels
- ✅ Modern React patterns and best practices

## Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement task priority levels
- [ ] Add due dates and reminders
- [ ] Export/import functionality
- [ ] Multiple todo lists
- [ ] User authentication
- [ ] Cloud synchronization
