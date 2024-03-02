import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-6 fixed bottom-0 w-full">
            <div className="container mx-auto flex items-center justify-center">
                <div className="flex-col justify-center text-center">
                    <p className="text-sm">All rights reserved</p>
                    <p className="text-sm">&copy; 2024 Thanooj Khan</p>
                </div>

                <div className="ml-6 flex space-x-4">
                    <a href="https://github.com/ThanoojKhan" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/thanooj-pelamkulangara-a9244359/" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/thanoojkhan/" className="text-gray-400 hover:text-gray-200" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
