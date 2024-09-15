import React from 'react';

const ActivityDetail = ({ match, darkMode }) => {

    const activity = {
        title: "Activity Title",
        description: "Detailed description of the activity...",
        date: "2024-09-02",
        society: "Society Name",
        image: "https://via.placeholder.com/600",
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow p-4 md:p-6 lg:p-8">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {activity.title}
                    </h2>
                    <p className={`text-sm md:text-base text-gray-600 mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
                        Organized by: {activity.society}
                    </p>
                    <p className={`text-sm md:text-base text-gray-600 mb-4 ${darkMode ? 'text-gray-400' : ''}`}>
                        Date: {activity.date}
                    </p>
                    <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-48 sm:h-64 lg:h-80 object-cover mb-6 rounded-lg"
                    />
                    <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {activity.description}
                    </p>
                </main>
            </div>
        </div>
    );
};

export default ActivityDetail;
