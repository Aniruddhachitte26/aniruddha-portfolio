// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', url: '#about' },
        { name: 'Experience', url: '#experience' },
        { name: 'Projects', url: '#projects' },
        { name: 'Skills', url: '#skills' },
        { name: 'Contact', url: '#contact' },
        { name: 'Resume', url: 'https://drive.google.com/file/d/1MJO3kpKE8_F9ish0J-MyX7Ph-WTys1lZ/view?usp=drive_link' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setMenuOpen(false);
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            className={`fixed w-full z-50 py-4 px-8 transition-all duration-300 ${
                scroll ? 'bg-background/90 dark:bg-navy/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-poppins font-bold"
                    whileHover={{ scale: 1.05 }}
                >
                    <a href="#home" className="text-primary dark:text-white">
                        Aniruddha
                    </a>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.name === 'Resume' ? (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-inter text-secondary dark:text-cream hover:text-primary dark:hover:text-teal transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(link.url.substring(1))}
                                    className="font-inter text-secondary dark:text-cream hover:text-primary dark:hover:text-teal transition-colors"
                                >
                                    {link.name}
                                </button>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-secondary dark:text-cream"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    className="fixed inset-0 bg-background dark:bg-navy flex flex-col items-center justify-center z-40 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col items-center space-y-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name === 'Resume' ? (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl font-inter text-secondary dark:text-cream hover:text-primary dark:hover:text-teal transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => scrollToSection(link.url.substring(1))}
                                        className="text-2xl font-inter text-secondary dark:text-cream hover:text-primary dark:hover:text-teal transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;