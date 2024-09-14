import React from 'react';

const UpcomingEvents = ({ darkMode }) => {
    return (
        <div className={`p-4 h-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'} 
                        sm:p-6 md:p-8 lg:p-10`}>
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'} 
                            sm:text-2xl md:text-3xl`}>
                Upcoming Events
            </h2>
            <ul>
                <li className={`mb-4 ${darkMode ? 'border-b border-gray-700' : 'border-b border-gray-300'} 
                                pb-4 sm:pb-6 md:pb-8`}>
                    <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} 
                                    text-lg sm:text-xl md:text-2xl`}>
                        Event 1
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} 
                                    sm:text-base md:text-lg`}>
                        Date: 2024-09-05
                    </p>
                </li>
                <li className={`mb-4 ${darkMode ? 'border-b border-gray-700' : 'border-b border-gray-300'} 
                                pb-4 sm:pb-6 md:pb-8`}>
                    <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} 
                                    text-lg sm:text-xl md:text-2xl`}>
                        Event 2
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} 
                                    sm:text-base md:text-lg`}>
                        Date: 2024-09-10
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default UpcomingEvents;
