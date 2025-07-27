// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home  from './Components/Home'
import Menu  from './Components/Menu'
import TeamSection  from './Components/TeamSection'
import AboutUs  from './Components/AboutUs'
import Contact  from './Components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/TeamSection" element={<TeamSection />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;