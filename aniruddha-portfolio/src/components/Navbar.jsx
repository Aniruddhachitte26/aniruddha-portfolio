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
            const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
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
                top: element.offsetTop - 80, // Restored to original offset
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed w-full z-50 py-2 md:py-4 px-4 md:px-8 bg-cream transition-shadow duration-300 ${
            isScrolled && activeSection !== 'home' ? 'shadow-md' : ''
        }`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo - Restored original size */}
                <div className="text-xl md:text-2xl font-poppins font-bold">
                    <a href="#home" className="text-navy hover-text-glow">
                        AC
                    </a>
                </div>

                {/* Desktop Navigation - Restored original sizes */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                            {link.name === 'Resume' ? (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-inter text-navy hover:text-teal transition-colors hover-text-glow"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(link.url.substring(1))}
                                    className="font-inter text-navy hover:text-teal transition-colors hover-text-glow"
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
                        className="p-1 text-navy hover:text-teal transition-colors"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - with centered text and animations */}
            {menuOpen && (
                <>
                    {/* Overlay to click outside to close */}
                    <div 
                        className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    ></div>
                    
                    {/* Left side menu panel with animation */}
                    <div
                        className="fixed top-0 left-0 h-auto bg-cream shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out w-3/4 max-w-xs"
                        style={{
                            animation: "slideInLeft 0.3s ease-in-out"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button in corner with animation */}
                        <div className="absolute top-4 right-4 p-2 animate-fadeIn" style={{ animationDuration: '0.5s' }}>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-teal/10 text-navy hover:bg-teal/20 transition-colors hover:rotate-90 transition-transform duration-300"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>
                        
                        {/* Menu header with animation */}
                        <div className="pt-6 pb-4 px-6 border-b border-slate/10">
                            <div 
                                className="text-2xl font-poppins font-bold text-navy text-center"
                                style={{
                                    animation: "fadeInDown 0.5s ease-out forwards"
                                }}
                            >
                                Menu
                            </div>
                        </div>
                        
                        {/* Menu links - centered with animations */}
                        <div className="py-6 px-4 pb-8">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link, index) => (
                                    <div 
                                        key={index} 
                                        className="px-2 py-2 rounded-lg hover:bg-teal/10 transition-colors text-center"
                                        style={{
                                            animation: `slideInRight 0.4s ease-out forwards`,
                                            animationDelay: `${index * 0.08}s`,
                                            opacity: 0
                                        }}
                                    >
                                        {link.name === 'Resume' ? (
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center text-lg font-inter text-navy hover:text-teal transition-colors"
                                            >
                                                <span>{link.name}</span>
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => scrollToSection(link.url.substring(1))}
                                                className="flex items-center justify-center text-lg font-inter text-navy w-full text-center hover:text-teal transition-colors"
                                            >
                                                <span>{link.name}</span>
                                            </button>
                                        )}
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

// Add these keyframes to your CSS file
/*
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeInDown {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
*/