import React, { useState, useEffect } from 'react';
import './dark.css'
function App() {
const [theme, setTheme] = useState('light');
const toggleTheme = () => {
    if (theme === 'light') {
setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
      <button onClick={toggleTheme}>Toggle Theme</button>
   
  );
}
export default App;