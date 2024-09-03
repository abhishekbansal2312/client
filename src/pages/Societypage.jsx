import React from 'react';
import { useParams } from 'react-router-dom';
import Activitycard from '../components/Activitycard';

const Societypage = ({ darkMode }) => {
    const { societyId } = useParams();

    const members = [
        { name: "John Doe", role: "President", image: "https://via.placeholder.com/150" },
        { name: "Jane Smith", role: "Vice President", image: "https://via.placeholder.com/150" },
        { name: "Mark Johnson", role: "Secretary", image: "https://via.placeholder.com/150" }
    ];

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow p-6">
                    <h2 className="text-xl font-bold mb-4">{societyId} Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        <Activitycard darkMode={darkMode}/>
                        <Activitycard darkMode={darkMode}/>
                        <Activitycard darkMode={darkMode}/>
                        <Activitycard darkMode={darkMode}/>
                        <Activitycard darkMode={darkMode}/>
                    </div>

                    <h3 className="text-lg font-bold mb-4">Members</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {members.map((member, index) => (
                            <div key={index} className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mb-4"
                                />
                                <h4 className="text-lg font-semibold dark:text-white">{member.name}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Societypage;
