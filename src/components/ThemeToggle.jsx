import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon">
        {isDarkMode ? '☀️' : '🌙'}
      </span>
      <span className="theme-label">
        {isDarkMode ? 'Hell' : 'Dunkel'}
      </span>
    </button>
  );
};

export default ThemeToggle;
