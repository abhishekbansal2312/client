import React from 'react';
import Sidebar from '../components/Sidebar';
import Featuredactivity from '../components/Featuredactivity';
import Activitycard from '../components/Activitycard';
import Upcomingevents from '../components/Upcomingevents';

const Home = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-grow">
                    <Sidebar className="w-1/4" />
                    <main className="w-1/2 p-6">
                        <Featuredactivity />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                        </div>
                    </main>
                    <Upcomingevents className="w-1/4" />
                </div>
            </div>
        </div>
    );
};

export default Home;
