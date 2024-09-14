import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddEvent = ({ darkMode }) => {
    const { date } = useParams();
    const [eventName, setEventName] = useState('');
    const [selectedDate, setSelectedDate] = useState(date);
    const navigate = useNavigate();

    useEffect(() => {
        // Ensure the date format is correct
        if (date) {
            setSelectedDate(date);
        }
    }, [date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle event submission here
        console.log(`Event "${eventName}" added for ${selectedDate}`);
        navigate('/');
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    // Format the date
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        const date = new Date(year, month - 1, day);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="p-4">
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="eventName" className={`block ${darkMode ? 'text-white' : 'text-gray-800'}`}>Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        className={`w-full p-2 border rounded-md ${darkMode ? 'border-gray-600 bg-gray-500 text-gray-100' : 'border-gray-300 bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventDate" className={`block ${darkMode ? 'text-white' : 'text-gray-800'}`}>Event Date:</label>
                    <input
                        type="date"
                        id="eventDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className={`w-full p-2 border rounded-md ${darkMode ? 'border-gray-600 bg-gray-500 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        required
                    />
                    <p className={`mt-2 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                        Selected Date: {formatDate(selectedDate)}
                    </p>
                </div>
                <button
                    type="submit"
                    className={`bg-blue-500 text-white p-2 rounded-md ${darkMode ? 'hover:bg-blue-600' : 'hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                    Add Event
                </button>
            </form>
        </div>
    );
};

export default AddEvent;
