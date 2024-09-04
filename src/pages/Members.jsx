import React from 'react';
import { Link } from 'react-router-dom';

const society_Teachers = [
    { id: 1, name: 'Mrs. Suchita Saxena' },
    { id: 2, name: 'Mrs. Prachi Gupta' }
];

const society_Students = [
    { id: 1, name: 'Abhishek Bansal' },
    { id: 2, name: 'Tanu Sharma' }
];

const Members = ({ darkMode }) => {

    function teacherStaff() {
        return (
            society_Teachers.map((teacher) => (
                <div key={teacher.id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 dark:bg-gray-700' : 'bg-gray-100'}`}>
                    <h2 className="text-2xl font-semibold mb-2">{teacher.name}</h2>
                    <p className="mb-2">{teacher.description}</p>
                    <Link to={`/member/${teacher.id}`} className={`text-blue-400 hover:underline mt-4 block ${darkMode ? 'dark:text-blue-300' : 'text-blue-600'}`}>
                        Know more
                    </Link>
                </div>
            ))
        );
    }

    function studentStaff() {
        return (
            society_Students.map((student) => (
                <div key={student.id} className={`p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 dark:bg-gray-700' : 'bg-gray-100'}`}>
                    <h2 className="text-2xl font-semibold mb-2">{student.name}</h2>
                    <p className="mb-2">{student.description}</p>
                    <Link to={`/member/${student.id}`} className={`text-blue-400 hover:underline mt-4 block ${darkMode ? 'dark:text-blue-300' : 'text-blue-600'}`}>
                        Know more
                    </Link>
                </div>
            ))
        );
    }

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} text-gray-700 ${darkMode ? 'dark:text-gray-300' : 'text-gray-900'} p-6`}>
                <h1 className="text-4xl font-bold mb-6">Hobbies Club Members</h1>
                
                {/* Flex container to keep teacher and student sections separated but aligned horizontally */}
                <div className="flex flex-col space-y-4">
                    {/* Teachers Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">Teachers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teacherStaff()}
                        </div>
                    </div>

                    {/* Students Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">Students</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {studentStaff()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;
