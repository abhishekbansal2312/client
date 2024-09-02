import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Allactivities from './pages/Allactivities';
import Societypage from './pages/Societypage';
import Activitydetail from './pages/Activitydetail';
import { ActivitiesProvider } from './context/ActivitiesContext';

const App = () => {
  return (
    <ActivitiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/all-activities" element={<Allactivities/>} />
          <Route path="/society/:societyId" element={<Societypage/>} />
          <Route path="/activity/:activityId" element={<Activitydetail/>} />
        </Routes>
      </Router>
    </ActivitiesProvider>
  );
};


export default App;
