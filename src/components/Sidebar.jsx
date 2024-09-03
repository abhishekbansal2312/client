import React from 'react';

const Sidebar = ({ darkMode }) => {
    return (
        <aside className={`p-4 h-full rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`}>
            <h2 className="text-xl font-bold mb-4">Filter by Society</h2>
            <ul>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" className={`mr-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-900'}`} />
                        Society 1
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" className={`mr-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-900'}`} />
                        Society 2
                    </label>
                </li>
                <li>
                    <label className="flex items-center">
                        <input type="checkbox" className={`mr-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-900'}`} />
                        Society 3
                    </label>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
