import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-100 p-4 h-full">
            <h2 className="text-xl font-bold mb-4">Filter by Society</h2>
            <ul>
                <li>
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Society 1
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Society 2
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Society 3
                    </label>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
