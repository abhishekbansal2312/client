import React from 'react';

const Activitycard = ({ darkMode }) => {
    return (
        <div className={`shadow-lg rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`}>
            <img 
                src="https://via.placeholder.com/400" 
                alt="Activity" 
                className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover" 
            />
            <div className="p-4">
                <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Activity Title
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Brief description of the activity...
                </p>
                <a 
                    href="/society/activity/1" 
                    className={`mt-2 inline-block ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}
                >
                    Read More
                </a>
            </div>
        </div>
    );
}

export default Activitycard;
