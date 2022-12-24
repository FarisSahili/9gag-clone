import React, { useState, useEffect } from 'react';
import './dark.css'
function Dark() {
const [theme, setTheme] = useState( localStorage.getItem('theme') || 'light'
);
const toggleTheme = () => {
    if (theme === 'light') {
setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
      <button onClick={toggleTheme} className='dark-mode-button'>Dark Mode</button>
   
  );
}
export default Dark;