import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <footer className={`p-4 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <ul>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                        <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
                        <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
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
