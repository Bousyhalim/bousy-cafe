// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home  from './Components/Home'
import Menu  from './Components/Menu'
import Contact  from './Components/Contact'
import Subscribe  from './Components/Subscribe'

function App() {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;