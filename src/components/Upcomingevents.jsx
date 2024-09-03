import React from 'react';

const UpcomingEvents = ({ darkMode }) => {
    return (
        <div className={`p-4 h-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`}>
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            <ul>
                <li className="mb-4">
                    <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Event 1</h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Date: 2024-09-05</p>
                </li>
                <li className="mb-4">
                    <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Event 2</h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Date: 2024-09-10</p>
                </li>
            </ul>
        </div>
    );
};

export default UpcomingEvents;
