import React from 'react';

const EventList = ({ events, selectedDate }) => {
    const formattedDate = selectedDate.toDateString();
    const filteredEvents = events.filter(event => new Date(event.date).toDateString() === formattedDate);

    return (
        <div>
            <h3 className="text-lg font-bold mb-2">Events for {formattedDate}</h3>
            <ul>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <li key={index} className="border-b py-2">
                            <h4 className="font-bold">{event.title}</h4>
                            <p>{event.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No events for this date</p>
                )}
            </ul>
        </div>
    );
};

export default EventList;
