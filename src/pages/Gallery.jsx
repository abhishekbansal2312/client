import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ darkMode }) => {
    const sampleData = [
        {
            id: 1,
            title: 'Photography Event',
            image: 'https://via.placeholder.com/400x300.png?text=Photography+Event',
            link: '/gallery/1',
        },
        {
            id: 2,
            title: 'Music Event',
            image: 'https://via.placeholder.com/400x300.png?text=Music+Event',
            link: '/gallery/2',
        },
        {
            id: 3,
            title: 'Coding Workshop',
            image: 'https://via.placeholder.com/400x300.png?text=Coding+Workshop',
            link: '/gallery/3',
        },
        {
            id: 4,
            title: 'Art Exhibition',
            image: 'https://via.placeholder.com/400x300.png?text=Art+Exhibition',
            link: '/gallery/4',
        },
    ];

    return (
        <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h2 className={`text-center text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Events Gallery
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sampleData.map((event) => (
                    <div key={event.id} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Link to={event.link}>
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                            <div className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
