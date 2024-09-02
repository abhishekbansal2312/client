import React from 'react';

const UpcomingEvents = () => {
    return (
        <aside className="bg-gray-100 p-4 h-full">
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            <ul>
                <li className="mb-4">
                    <h3 className="font-bold">Event 1</h3>
                    <p className="text-gray-600">Date: 2024-09-05</p>
                </li>
                <li className="mb-4">
                    <h3 className="font-bold">Event 2</h3>
                    <p className="text-gray-600">Date: 2024-09-10</p>
                </li>
            </ul>
        </aside>
    );
};

export default UpcomingEvents;
