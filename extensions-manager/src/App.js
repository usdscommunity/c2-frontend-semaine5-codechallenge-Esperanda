import React, { useState, useEffect } from 'react';
import ExtensionCard from './components/ExtensionCard';
import data from './data/extensions.json';
import './index.css';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme; // change theme
  }, [theme]);

  const filtered = data.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'active') return item.isActive;
    if (filter === 'inactive') return !item.isActive;
    return true;
  });

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <button
          aria-label="theme"
          className="theme-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <img
            src={theme === 'dark' ? '/assets/images/icon-sun.svg' : '/assets/images/icon-moon.svg'}
            alt="theme icon"
          />
        </button>
      </header>

      {/* Main */}
      <main className="main-card">
        <div className="header-main">
          <h2 className="main-title">Extensions List</h2>
          <div className="filters">
            <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('inactive')}
              className={`filter-btn ${filter === 'inactive' ? 'active' : ''}`}
            >
              Inactive
            </button>
          </div>
        </div>

        <div className="extensions-grid">
          {filtered.map(ext => (
            <ExtensionCard key={ext.name} {...ext} />
          ))}
        </div>
      </main>
    </div>
  );
}
