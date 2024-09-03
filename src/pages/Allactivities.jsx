import React from 'react';
import Sidebar from '../components/Sidebar';
import Activitycard from '../components/Activitycard';

const Allactivities = ({darkMode}) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-grow">
                    <Sidebar className="w-1/4" />
                    <main className="w-3/4 p-6">
                        <h2 className="text-xl font-bold mb-4">All Activities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Activitycard darkMode={darkMode}/>
                            <Activitycard darkMode={darkMode}/>
                            <Activitycard darkMode={darkMode}/>
                            <Activitycard darkMode={darkMode}/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Allactivities;
