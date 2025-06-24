// components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaResearchgate } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/Aniruddhachitte26'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/aniruddhachitte'
        },
        {
            name: 'ResearchGate',
            icon: <FaResearchgate />,
            url: 'https://www.researchgate.net/profile/Aniruddha-Chitte'
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:aniruddhachitte06@gmail.com'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-cream py-6 md:py-10 relative">
            {/* Scroll to Top Button - Updated to be transparent initially */}
            <button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-transparent border-2 border-teal text-teal rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300/30 transition-all z-20"
            >
                <FaArrowUp className="text-sm md:text-base" />
            </button>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Footer Content */}
                    <div className="flex flex-col items-center">
                        {/* Logo */}
                        <div className="text-2xl md:text-3xl font-poppins font-bold mb-4 md:mb-6">
                            <span className="text-navy">Aniruddha Chitte</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-8">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="text-lg md:text-xl text-slate hover:text-teal transition-colors"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* Footer Nav Links - More compact for mobile */}
                        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-1 md:gap-y-2 mb-4 md:mb-8 text-xs md:text-sm font-medium">
                            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                                <a
                                    key={index}
                                    href={item === 'Resume' ? '/resume.pdf' : `#${item.toLowerCase()}`}
                                    target={item === 'Resume' ? '_blank' : '_self'}
                                    rel={item === 'Resume' ? 'noopener noreferrer' : ''}
                                    className="text-slate hover:text-teal transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center text-xs md:text-sm text-slate">
                            <p>
                                &copy; {currentYear} Aniruddha Chitte. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;