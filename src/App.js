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
import Gallery from './pages/Gallery';
import EventGallery from './components/EventGallery';
import AddEvent from './components/AddEvent'; // Import AddEvent component

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


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
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} />} />
            <Route path="/all-activities" element={<Allactivities setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} />} />
            <Route path="/members" element={<Members setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} />} />
            <Route path="/member/:id" element={<MemberCard setIsAuthenticated={setIsAuthenticated} darkMode={darkMode}/>} />
            <Route path="/gallery" element={<Gallery setIsAuthenticated={setIsAuthenticated} darkMode={darkMode}/>} />
            <Route path="/gallery/:id" element={<EventGallery darkMode={darkMode}/>} />
            <Route path="/activity/:activityId" element={<Activitydetail darkMode={darkMode} />} />
            <Route path="/auth/login" element={<Login setIsAuthenticated={setIsAuthenticated} darkMode={darkMode} />} />
            <Route path="/auth/register" element={<Signup darkMode={darkMode} />} />
            <Route path="/add-event/:date" element={<AddEvent darkMode={darkMode}/>} /> {/* Add this route */}
          </Routes>
        </main>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;