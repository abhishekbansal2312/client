import React from 'react';

const societies = [
    { id: 1, name: 'Tech Club', description: 'A club for technology enthusiasts.', members: 50 },
    { id: 2, name: 'Art Society', description: 'For those who love art and creativity.', members: 30 },
    { id: 3, name: 'Drama Club', description: 'For students interested in drama and theatre.', members: 20 }
];

const Societiespage = ({ darkMode }) => {
    console.log("Darkmode", darkMode);
    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} text-white ${darkMode ? 'dark:text-gray-300' : 'text-gray-900'} p-6`}>
                <h1 className="text-4xl font-bold mb-6">College Societies</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {societies.map(society => (
                        <div key={society.id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 dark:bg-gray-700' : 'bg-gray-100'}`}>
                            <h2 className="text-2xl font-semibold mb-2">{society.name}</h2>
                            <p className="mb-2">{society.description}</p>
                            <p className="text-gray-400">Members: {society.members}</p>
                            <a href={`/society/${society.id}`} className={`text-blue-400 hover:underline mt-4 block ${darkMode ? 'dark:text-blue-300' : 'text-blue-600'}`}>
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Societiespage;
