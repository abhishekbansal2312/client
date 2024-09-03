import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allactivities from './pages/Allactivities';
import Societypage from './pages/Societypage';
import Activitydetail from './pages/Activitydetail';
import { ActivitiesProvider } from './context/ActivitiesContext';
import Login from './pages/Login';
import Header from './components/Header';
import DarkMode from './components/DarkMode'; 
import Societiespage from './pages/Societiespage';
import Footer from './components/Footer';

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
    <ActivitiesProvider>
      <Router>
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-activities" element={<Allactivities />} />
            <Route path="/society" element={<Societiespage />} />
            <Route path="/society/:societyId" element={<Societypage />} />
            <Route path="/activity/:activityId" element={<Activitydetail />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <Footer/>
        </div>
      </Router>
    </ActivitiesProvider>
  );
};

export default App;