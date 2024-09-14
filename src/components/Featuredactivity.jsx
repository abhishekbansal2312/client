import React from 'react';

const FeaturedActivity = ({ darkMode }) => {
    return (
        <div className={`p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-indigo-100'}`}>
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Activity</h2>
            <p className={`text-sm sm:text-base md:text-lg mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                A brief description of the featured activity...
            </p>
            <a href="/activity/featured" className={`hover:underline ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Learn More
            </a>
        </div>
    );
};

export default FeaturedActivity;
