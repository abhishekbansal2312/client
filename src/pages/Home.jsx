import React from 'react';
import Featuredactivity from '../components/Featuredactivity';
import Activitycard from '../components/Activitycard';
import Upcomingevents from '../components/Upcomingevents';
import CalendarComponent from '../components/CalendarComponent'; // Import the Calendar component

const Home = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-col lg:flex-row flex-grow">
                    <main className="w-full lg:w-2/3 p-4 md:p-6">
                        <Featuredactivity />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                        </div>
                    </main>
                    <div className="w-full lg:w-1/3 p-4 md:p-6 flex flex-col gap-4">
                        <Upcomingevents />
                        <CalendarComponent darkMode={darkMode} /> {/* Ensure CalendarComponent is below Upcomingevents */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
