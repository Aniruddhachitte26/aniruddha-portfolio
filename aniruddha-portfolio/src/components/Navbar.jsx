// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Lock/unlock body scroll when menu opens/closes
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    // Track scroll position and current section
    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past the top section
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Determine which section is currently in view
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is in the viewport (with some buffer for navbar)
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated nav links: Added About, removed Resume
    const navLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Experience', url: '#experience' },
        { name: 'Projects', url: '#projects' },
        { name: 'Skills', url: '#skills' },
        // {name: 'Achievements', url: '#achievements'},
        { name: 'Contact', url: '#contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setMenuOpen(false);
            window.scrollTo({
                top: element.offsetTop - 40,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed w-full z-50 py-2 md:py-4 px-4 md:px-8 bg-cream transition-all duration-300 ${
            isScrolled && activeSection !== 'home' ? 'shadow-md backdrop-blur-sm' : ''
        }`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl md:text-xl font-poppins font-bold">
                    <a href="#home" className="text-navy hover:text-teal transition-colors">
                        AC
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                            <button
                                onClick={() => scrollToSection(link.url.substring(1))}
                                className={`font-inter text-navy hover:text-teal transition-colors text-8sm${
                                    activeSection === link.url.substring(1) ? 'text-teal' : ''
                                }`}
                            >
                                {link.name}
                            </button>
                            {activeSection === link.url.substring(1) && (
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal rounded-full" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-1 text-navy hover:text-teal transition-colors"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - with side panel animation */}
            {menuOpen && (
                <>
                    {/* Overlay to click outside to close */}
                    <div 
                        className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                    
                    {/* Left side menu panel with animation */}
                    <div
                        className="fixed top-0 left-0 h-screen-1/2 bg-cream shadow-xl z-50 md:hidden w-3/4 max-w-xs animate-slideInLeft"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button in corner */}
                        <div className="absolute top-4 right-4 p-2 animate-fadeIn">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-teal/10 text-navy hover:bg-teal/20 transition-colors"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>
                        
                        {/* Menu header */}
                        <div className="pt-6 pb-4 px-6 border-b border-slate/10">
                            <div className="text-2xl text-center font-poppins font-bold text-navy animate-fadeInDown">
                                Menu
                            </div>
                        </div>
                        
                        {/* Menu links - with animations */}
                        <div className="py-3 px-2 pb-4 ">
                            <div className="flex flex-col space-y-2 ">
                                {navLinks.map((link, index) => (
                                    <div 
                                        key={index} 
                                        className={` rounded-lg hover:bg-teal/10 transition-colors animate-slideInRight ${
                                            activeSection === link.url.substring(1) ? 'bg-teal/10' : ''
                                        }`}
                                        style={{
                                            animationDelay: `${index * 0.08}s`
                                        }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.url.substring(1))}
                                            className={`py-2 px-0 text-center  text-lg font-inter w-full ${
                                                activeSection === link.url.substring(1) ? 'text-teal' : 'text-navy'
                                            } hover:text-teal transition-colors`}
                                        >
                                            <span>{link.name}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;