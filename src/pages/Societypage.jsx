import React from 'react';
import Header from '../components/Header';
import Activitycard from '../components/Activitycard';

const Societypage = ({ match }) => {
    const { societyId } = match.params;

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-6">
                <h2 className="text-xl font-bold mb-4">{societyId} Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Activitycard />
                    <Activitycard />
                    <Activitycard />
                    <Activitycard />
                    <Activitycard />
                </div>
            </main>
        </div>
    );
};

export default Societypage;
