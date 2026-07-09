import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-lg">
            This is a demo application featuring a dark mode toggle.
            Click the sun/moon icon in the header to switch themes.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Your preference is automatically saved and will persist across page reloads.
          </p>
        </main>
      </div>
    </ThemeProvider>
  );
}