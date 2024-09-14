import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie to handle cookies
import MemberCard from "../components/Membercard"; // Import MemberCard component

const Members = ({ darkMode }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch members data from the API using fetch
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem("authToken"); // If using local storage as a fallback
        if (!token) {
          console.error("No token found. Redirecting to login page...");
          setError("No token found. Redirecting to login page...");
          return;
        }
        const response = await fetch("http://localhost:4600/api/members", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Include token in headers
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }

        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900" : "bg-white"
        } text-gray-700 ${
          darkMode ? "dark:text-gray-300" : "text-gray-900"
        } p-6`}>
        <h1 className="text-4xl font-bold mb-6">Club Members</h1>

        {/* Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <MemberCard key={member._id} member={member} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
