# React Todo App

A modern, feature-rich todo application built with React, Vite, and modular CSS.  
Supports light/dark themes, task tagging, priority management, animated backgrounds, and comprehensive task organization.
This app is a full React-based rewrite and enhancement of my previous Vanilla JS Todo App.

## Features

### **Task Management**
-  **Add, complete, delete, and clear all tasks**
-  **Task Tags** — 25+ predefined categories with smart suggestions
-  **Priority Levels** — Visual priority slider (Low/Medium/High) with color coding
-  **Deadline Support** — Set and track task deadlines
-  **Advanced Filtering** — Filter by completion status (All/Completed/Unfinished)
-  **Smart Sorting** — Sort by A-Z, Z-A, Newest, or Oldest

###  **Visual Experience**
-  **Light/Dark Theme** — Toggle with smooth animated backgrounds, persists across sessions
-  **Animated Background** — Canvas-based floating bubbles that adapt to theme colors
-  **Smooth Animations** — 60fps animations with CSS transitions and transforms
-  **Responsive Design** — Optimized for desktop, tablet, and mobile devices
-  **Modern UI** — Clean, accessible, and visually appealing interface

###  **User Feedback**
-  **Animated Alerts** — Context-aware toast notifications for all actions
-  **Auto-dismiss** — 4-second timeout with visual progress bar
-  **Confirmation Modals** — Safety checks for destructive actions
- 💡 **Smart Suggestions** — Tag autocomplete with filtering

###  **Advanced Features**
-  **Persistent Storage** — Tasks, theme, and preferences saved in localStorage
-  **Options Modal** — Centralized theme and memory controls
-  **Modular Architecture** — Clean component separation and reusable hooks
-  **Developer Friendly** — Well-organized codebase with modern React patterns

##  Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TaskForm.jsx    # Enhanced form with tags, priority, dates
│   ├── TaskList.jsx    # Task list container
│   ├── TaskItem.jsx    # Individual task with rich display
│   ├── TaskControls.jsx # Filter and sort controls
│   ├── Header.jsx      # Navigation and theme toggle
│   ├── Footer.jsx      # App footer
│   ├── Background.jsx  # Animated bubble background
│   ├── AlertProvider.jsx # Toast notification system
│   ├── ConfirmModal.jsx # Confirmation dialogs
│   └── OptionsModal.jsx # Settings and preferences
├── hooks/              # Custom React hooks
│   ├── useTasks.js     # Task state management
│   └── useTheme.js     # Theme management
├── pages/              # Page components
│   └── Home.jsx        # Main todo page
├── styles/             # Modular CSS architecture
│   ├── style.css       # Main entry point
│   ├── theme.css       # CSS variables and themes
│   ├── form.css        # Form and input styles
│   ├── tasks.css       # Task list and item styles
│   ├── controls.css    # Filter and sort controls
│   ├── modal.css       # Modal and dialog styles
│   ├── alert.css       # Toast notification styles
│   ├── navbar.css      # Header and navigation
│   ├── footer.css      # Footer styles
│   └── responsive.css  # Mobile responsiveness
├── utils/              # Utility functions
│   ├── filter.js       # Task filtering logic
│   └── sort.js         # Task sorting logic
└── App.jsx             # Root component with providers
```

##  Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📖 Usage Guide

### Adding Tasks
1. **Basic Task**: Type task name and press Enter or click "Add new task"
2. **With Tags**: Click "Add task category..." and select from suggestions
3. **Set Priority**: Use the priority slider (Low/Medium/High)
4. **Add Deadline**: Select a date from the deadline picker

### Managing Tasks
- **Complete**: Click the checkbox to mark as done
- **Delete**: Click the × button (with confirmation)
- **Filter**: Use the filter buttons (All/Completed/Unfinished)
- **Sort**: Use the dropdown to sort by different criteria

### Customization
- **Theme**: Click the settings icon in header to toggle light/dark mode
- **Clear All**: Use the "Clear local memory" option in settings
- **Tags**: 25+ predefined categories including Work, Personal, Urgent, Shopping, etc.

##  Tech Stack

### Frontend
- **React 18+** — Modern React with hooks and context
- **Vite** — Fast build tool and development server
- **Modular CSS** — Feature-based CSS architecture
- **Canvas API** — Animated background effects

### Architecture
- **Custom Hooks** — Reusable state management
- **React Context** — Global state and theme management
- **Local Storage** — Persistent data storage
- **Component Composition** — Clean, maintainable code structure

### Development
- **ESLint** — Code quality and consistency
- **Git** — Version control
- **Responsive Design** — Mobile-first approach

##  Key Features Explained

### Animated Background
- **Canvas-based bubbles** that float upward with gentle drift
- **Theme-aware colors** that automatically adapt to light/dark mode
- **Performance optimized** using requestAnimationFrame
- **Responsive** to window resizing

### Tag System
- **Smart suggestions** with real-time filtering
- **Visual tags** displayed on tasks with remove functionality
- **25+ categories** covering common task types
- **Keyboard accessible** with proper focus management

### Priority Management
- **Visual slider** with color-coded priority levels
- **Low (Green)**: Relaxed, no rush
- **Medium (Yellow)**: Moderate importance
- **High (Red)**: Urgent attention needed

### Alert System
- **Context-aware messages** for all user actions
- **Smooth animations** with fade in/out effects
- **Progress indicator** showing time until auto-dismiss
- **High z-index** ensuring visibility

##  Future Enhancements

### Planned Features
- [ ] **Task Editing** — In-place editing of existing tasks
- [ ] **Data Export** — Export tasks to JSON/CSV format
- [ ] **Task Templates** — Predefined task templates
- [ ] **Recurring Tasks** — Daily, weekly, monthly tasks
- [ ] **Task Notes** — Additional notes for complex tasks

### Technical Improvements
- [ ] **Virtual Scrolling** — For handling large task lists
- [ ] **Offline Support** — Service worker for offline functionality
- [ ] **Cloud Sync** — User authentication and cloud storage
- [ ] **PWA Features** — Installable as a native app
- [ ] **Performance Monitoring** — Analytics and performance tracking

Potential Improvements


Task Editing: In-place editing of existing tasks
Data Export: Export tasks to JSON/CSV
Keyboard Shortcuts: Quick actions with keyboard
Performance Optimizations
Virtual Scrolling: For large task lists
Debounced Search: For tag filtering
Memoization: For expensive computations
