import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`p-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-200'}`}>Quick Links</h3>
                    <ul className="flex space-x-4">
                        <li><a href="/about" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>About Us</a></li>
                        <li><a href="/contact" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Contact Us</a></li>
                        <li><a href="/privacy" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-200'}`}>Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className={`hover:text-gray-400 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Facebook</a>
                        <a href="https://twitter.com" className={`hover:text-gray-400 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Twitter</a>
                        <a href="https://instagram.com" className={`hover:text-gray-400 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Instagram</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 College Activities. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
