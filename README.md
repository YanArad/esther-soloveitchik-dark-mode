# Esther Soloveitchik

## Dark Mode Toggle - UI Feature

A React application implementing a dark mode toggle switch for better accessibility and user preference.

### Features

- Toggle switch with Sun/Moon icon in the app header
- Smooth CSS transition between light and dark themes
- Theme preference persisted in localStorage
- Accessible: keyboard navigable, screen reader support, 4.5:1 contrast ratio

### Tech Stack

- React 18 (functional components)
- TailwindCSS
- Vite
- State management via useContext

### Getting Started

```bash
npm install
npm run dev
```

### Project Structure

```
src/
├── App.jsx                  # Main app with ThemeProvider
├── index.css                # Global styles + transitions
├── main.jsx                 # Entry point
├── components/
│   ├── Header.jsx           # App header with toggle
│   └── DarkModeToggle.jsx   # Toggle component
└── context/
    └── ThemeContext.jsx      # Theme state + localStorage
```

### Author

Esther Soloveitchik
