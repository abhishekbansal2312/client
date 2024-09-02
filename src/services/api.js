export const fetchActivities = async () => {
    try {
        const response = await fetch("/api/activities");
        return await response.json();
    } catch (error) {
        console.error("Error fetching activities:", error);
        throw error;
    }
};
