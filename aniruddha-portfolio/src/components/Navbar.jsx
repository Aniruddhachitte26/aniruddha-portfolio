// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
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
        { name: 'Home', url: '#home' },
        { name: 'Experience', url: '#experience' },
        { name: 'Projects', url: '#projects' },
        { name: 'Skills', url: '#skills' },
        { name: 'Contact', url: '#contact' },
        { name: 'Resume', url: 'https://drive.google.com/file/d/1ADl_6gpBAsB5pzoNa0HSGBrkJSOPPAi7/view?usp=sharing' }  
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
        <nav
            className={`fixed w-full z-50 py-2 md:py-4 px-4 md:px-8 transition-all duration-300 ${
                scroll ? 'bg-cream/90 backdrop-blur-sm shadow-lg' : 'bg-cream'
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl md:text-2xl font-poppins font-bold">
                    <a href="#home" className="text-navy">
                        AC
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                            {link.name === 'Resume' ? (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-inter text-navy hover:text-teal transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(link.url.substring(1))}
                                    className="font-inter text-navy hover:text-teal transition-colors"
                                >
                                    {link.name}
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-1 text-navy"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - improved with animation and better spacing */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-cream pt-16 flex flex-col items-center z-40 md:hidden animate-fadeIn"
                    style={{
                        animation: "fadeIn 0.2s ease-in-out"
                    }}
                >
                    <div className="flex flex-col items-center space-y-6 pt-8">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                {link.name === 'Resume' ? (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-inter text-navy hover:text-teal transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => scrollToSection(link.url.substring(1))}
                                        className="text-xl font-inter text-navy hover:text-teal transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;