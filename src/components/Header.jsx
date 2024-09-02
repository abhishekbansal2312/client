import React from 'react'

const Header = () => {
    return (
        <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">College Activities</div>
            <nav>
                <a href="/" className="mr-4">Home</a>
                <a href="/all-activities" className="mr-4">All Activities</a>
                <a href="/profile">Profile</a>
            </nav>
        </header>
    )
}

export default Header