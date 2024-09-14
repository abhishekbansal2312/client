import React from 'react';

const MemberCard = ({ member, darkMode }) => {
    return (
        <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} 
                        sm:p-6 md:p-8 lg:p-10`}>
            <img
                src={member.photo}
                alt={member.name}
                className={`w-full h-32 object-cover rounded-md mb-4 border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'} sm:h-40 md:h-48 lg:h-56`}
            />
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-900'} sm:text-xl md:text-2xl`}>
                {member.name}
            </h3>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'} sm:text-base md:text-lg`}>
                {member.position}
            </p>
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} sm:text-base md:text-lg`}>
                {member.bio}
            </p>
        </div>
    );
};

export default MemberCard;
