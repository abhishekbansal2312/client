import React from 'react'

const Activitycard = ({ darkMode }) => {
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="https://via.placeholder.com/400" alt="Activity" className="w-full h-32 sm:h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-bold">Activity Title</h3>
                    <p className="text-gray-600">Brief description of the activity...</p>
                    <a href="/society/activity/1" className="text-indigo-600 hover:underline mt-2 inline-block">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Activitycard