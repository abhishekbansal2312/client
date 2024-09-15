import React from 'react';
import Activitycard from '../components/Activitycard';

const Allactivities = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-grow">
                    <main className="w-full sm:w-3/4 p-4 md:p-6 lg:p-8">
                        <h2 className={`text-lg md:text-xl lg:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            All Activities
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                            <Activitycard darkMode={darkMode} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Allactivities;
