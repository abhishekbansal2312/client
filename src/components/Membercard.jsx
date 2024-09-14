import React from "react";

const MemberCard = ({ member, darkMode }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}>
      <img
        src={member.picture}
        alt={member.name}
        className={`w-full h-32 object-cover rounded-md mb-4 border-2 ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      />
      <h3
        className={`text-lg font-semibold ${
          darkMode ? "text-gray-200" : "text-gray-900"
        }`}>
        {member.name}
      </h3>
      <p
        className={`text-sm font-medium ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}>
        {member.email} {/* Display email as position or add a new field */}
      </p>
      <p
        className={`text-sm mt-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
        {member.description}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        Hobbies: {member.hobbies.join(", ")}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        Phone: {member.phoneNumber}
      </p>
    </div>
  );
};

export default MemberCard;
