import React from 'react';

const ActivityDetail = ({ match, darkMode }) => {
    const { activityId } = match.params;

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
                <main className="flex-grow p-6">
                    <h2 className="text-3xl font-bold mb-4">{activity.title}</h2>
                    <p className="text-gray-600 mb-2">Organized by: {activity.society}</p>
                    <p className="text-gray-600 mb-4">Date: {activity.date}</p>
                    <img src={activity.image} alt={activity.title} className="w-full h-64 object-cover mb-6" />
                    <p>{activity.description}</p>
                </main>
            </div>
        </div>
    );
};

export default ActivityDetail;