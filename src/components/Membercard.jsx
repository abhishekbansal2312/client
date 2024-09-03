import React from 'react';

const MemberCard = ({ member, darkMode }) => {
    return (
        <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <img src={member.photo} alt={member.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm font-medium">{member.position}</p>
            <p className="text-sm mt-2">{member.bio}</p>
        </div>
    );
};

export default MemberCard;