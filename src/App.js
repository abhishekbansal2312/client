import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allactivities from './pages/Allactivities';
import Activitydetail from './pages/Activitydetail';
import Login from './pages/Login';
import Header from './components/Header';
import DarkMode from './components/DarkMode';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Members from './pages/Members';
import MemberCard from './components/Membercard';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode)
      document.documentElement.classList.add('dark');
    else 
      document.documentElement.classList.remove('dark');
    
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
      <Router>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <Header darkMode={darkMode}/>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/all-activities" element={<Allactivities darkMode={darkMode} />} />
            <Route path="/members" element={<Members darkMode={darkMode} />} />
            <Route path="/member/:id" element={<MemberCard darkMode={darkMode}/>} />
            <Route path="/activity/:activityId" element={<Activitydetail darkMode={darkMode} />} />
            <Route path="/auth/login" element={<Login darkMode={darkMode} />} />
            <Route path="/auth/register" element={<Signup darkMode={darkMode} />} />
          </Routes>
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <Footer darkMode={darkMode}/>
        </div>
      </Router>
  );
};

export default App;