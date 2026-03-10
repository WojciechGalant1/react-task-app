# Full-Stack Todo Manager

A modern, high-performance Todo application featuring a React frontend and a NestJS backend. This project offers a seamless experience for both guest and authenticated users with persistent storage (LocalStorage/MySQL).

---

## Overview

This application has evolved from a simple React tool to a full-stack platform. It includes secure authentication, a custom-designed UI with animated backgrounds, and a hybrid storage system.

- **Frontend**: React 18, Vite, Context API, Modular CSS.
- **Backend**: NestJS, TypeORM, MySQL, Passport/JWT.
- **Design**: Premium glassmorphism, Dark/Light modes, Canvas animations.

---

## Key Features

### User Management & Guest Mode
- **Guest Mode**: Use the app instantly without logging in. Data is saved in your browser's `localStorage`.
- **JWT Authentication**: Create an account to sync your tasks with a persistent MySQL database.
- **Hybrid Storage**: The app automatically switches between local and cloud storage based on your login status.
- **Secure Access**: Passwords are hashed with `bcrypt`, and API endpoints are protected via JWT strategies.

### Task Organization
- **Rich Task Data**: Each task supports text, completion status, tags, priority (Low/Medium/High), details, and date ranges.
- **Smart Suggestions**: Over 25+ predefined categories with autocomplete for tagging.
- **Advanced Filtering**: Filter tasks by status, priority, or date ranges.
- **Multi-Sort**: Sort by newest, oldest, or alphabetically.

### Visuals & UX
- **Dynamic Backgrounds**: Canvas-based animated floating bubbles that react to theme changes.
- **Theme Support**: Seamless toggle between Light and Dark themes with persistence.
- **Toast Notifications**: Interactive alert system with progress bars and auto-dismiss.
- **Confirmation Flow**: Safety modals for destructive actions (deleting tasks, clearing memory).

---

## Tech Stack

| Feature | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, React Router, Context API |
| **Backend** | NestJS, Node.js, TypeScript |
| **Database** | MySQL (via TypeORM) |
| **Authentication** | Passport.js, JWT, Bcrypt |
| **Styling** | Vanilla CSS (Modular), Canvas API (Background) |

---

## Project Structure

```bash
task/
├── client/          # React Frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI components (Header, Alerts, etc.)
│   │   ├── hooks/       # useTasks (Hybrid Storage), useTheme
│   │   ├── pages/       # Home, LoginPage, RegisterPage
│   │   └── styles/      # Feature-based modular CSS
├── server/          # NestJS Backend
│   ├── src/
│   │   ├── auth/        # JWT & Passport implementation
│   │   ├── tasks/       # Tasks CRUD with TypeORM entities
│   │   └── users/       # User management and registration
```

---

## Getting Started

### Prerequisites
- **Node.js**: v16 or higher.
- **MySQL**: A running instance (local or remote).

### 1. Database Setup
Create a MySQL database named `todo_db`. The backend is configured to use:
- **Host**: `localhost`
- **User**: `root`
- **Password**: (Empty by default, update in `server/src/app.module.ts`)

### 2. Backend Setup
```bash
cd server
npm install
npm run start:dev
```
The server will start at `http://localhost:3000`.

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## Security & Persistence
- **JWT Secret**: Currently hardcoded as `'SECRET_KEY'` in `auth.module.ts`. *For production, move this to `.env`.*
- **TypeORM Synchronize**: Set to `true` in `app.module.ts` for automatic schema creation. Use migrations for production environments.

---

