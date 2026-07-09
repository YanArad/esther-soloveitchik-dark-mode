import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        My Application
      </h1>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        {/* User profile icon placeholder */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
    </header>
  );
}