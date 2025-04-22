// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaResearchgate } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/aniruddhachitte'
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
            name: 'Twitter',
            icon: <FaTwitter />,
            url: '#'
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:aniruddhachitte2001@gmail.com'
        }
    ];

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-cream dark:bg-navy py-10 relative">
            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-teal text-navy rounded-full flex items-center justify-center shadow-lg hover:bg-teal/90 transition-colors z-20"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaArrowUp />
            </motion.button>

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Footer Content */}
                    <div className="flex flex-col items-center">
                        {/* Logo */}
                        <motion.div
                            className="text-3xl font-poppins font-bold mb-6"
                            whileHover={{ scale: 1.1 }}
                        >
                            {/* <span className="text-teal">Aniruddha</span> */}
                            <span className="text-navy dark:text-white">Aniruddha Chitte</span>
                        </motion.div>

                        {/* Social Links */}
                        <div className="flex space-x-6 mb-8">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="text-xl text-slate dark:text-lightSlate hover:text-teal dark:hover:text-teal transition-colors"
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer Nav Links */}
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm font-medium">
                            {['About', 'Experience', 'Projects', 'Skills', 'Contact', 'Resume'].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item === 'Resume' ? '/resume.pdf' : `#${item.toLowerCase()}`}
                                    target={item === 'Resume' ? '_blank' : '_self'}
                                    rel={item === 'Resume' ? 'noopener noreferrer' : ''}
                                    className="text-slate dark:text-lightSlate hover:text-teal dark:hover:text-teal transition-colors"
                                    whileHover={{ x: 3 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center text-sm text-slate dark:text-lightSlate">
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