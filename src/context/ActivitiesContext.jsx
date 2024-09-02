import React, { createContext, useContext, useState, useEffect } from 'react';

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchActivities = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/activities');
                const data = await response.json();
                setActivities(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    return (
        <ActivitiesContext.Provider value={{ activities, loading }}>
            {children}
        </ActivitiesContext.Provider>
    );
};

export const useActivitiesContext = () => {
    return useContext(ActivitiesContext);
};
