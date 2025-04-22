// App.jsx with ImageGallery component added
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ImageGallery from './components/ImageGallery'; // Import the new component
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <div className="font-inter bg-cream dark:bg-navy text-navy dark:text-cream min-h-screen overflow-x-hidden">
                {loading ? (
                    <div className="h-screen w-screen flex items-center justify-center">
                        <div className="text-4xl font-poppins font-bold">
                            <span className="text-teal">A</span>niruddha <span className="text-teal">C</span>hitte
                        </div>
                    </div>
                ) : (
                    <>
                        <Cursor />
                        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        <AnimatePresence>
                            <main>
                                <Hero />
                                <About />
                                <Experience />
                                <Projects />
                                <ImageGallery /> {/* Add the ImageGallery component here */}
                                <Skills />
                                <Contact />
                            </main>
                        </AnimatePresence>
                        <Footer />
                    </>
                )}
            </div>
        </div>
    );
};

export default App;