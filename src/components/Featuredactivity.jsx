import React from 'react';

const FeaturedActivity = ({ darkMode }) => {
    return (
        <div className={`p-6 rounded-lg shadow-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-indigo-100'}`}>
            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Activity</h2>
            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>A brief description of the featured activity...</p>
            <a href="/activity/featured" className={`hover:underline ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Learn More</a>
        </div>
    );
};

export default FeaturedActivity;
