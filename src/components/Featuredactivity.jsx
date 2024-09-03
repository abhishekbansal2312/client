import React from 'react';

const FeaturedActivity = ({darkMode}) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-2">Featured Activity</h2>
                <p className="text-gray-700 mb-4">A brief description of the featured activity...</p>
                <a href="/activity/featured" className="text-indigo-600 hover:underline">Learn More</a>
            </div>
        </div>
    );
};

export default FeaturedActivity;
