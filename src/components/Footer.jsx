import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`p-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-200'}`}>Quick Links</h3>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <li><a href="/about" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>About Us</a></li>
                        <li><a href="/contact" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Contact Us</a></li>
                        <li><a href="/privacy" className={`hover:underline ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-200'}`}>Follow Us</h3>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <a href="https://facebook.com" className={`text-2xl ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com" className={`text-2xl ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://instagram.com" className={`text-2xl ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-300 hover:text-white'}`}><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4 text-sm md:text-base">
                <p>&copy; 2024 College Activities. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
