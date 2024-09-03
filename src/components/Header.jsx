import React from 'react'

const Header = () => {
    return (
        <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold"><a href="/">College Activities</a></div>
            <nav>
                <a href="/" className="mr-4">Home</a>
                <a href="/society" className="mr-4">Societies</a>
                <a href="/all-activities" className="mr-4">All Activities</a>
                <a href="/profile" className="mr-4">Profile</a>
                <a href="/auth/login" className="mr-4">Login</a>
            </nav>
        </header>
    )
}

export default Header