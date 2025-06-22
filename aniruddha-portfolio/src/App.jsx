// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import AnimationObserver from './utils/AnimationObserver';

// Import animation CSS
import './index.css';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simulate loading with a fade out animation
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500); // Fade out animation duration
        }, 1500);

        // Initialize animation observer when app loads
        const initAnimations = () => {
            if (!loading) {
                AnimationObserver.init();
                // Refresh when window is resized to handle any new elements
                window.addEventListener('resize', () => AnimationObserver.refresh());
            }
        };

        initAnimations();

        // Clean up event listeners
        return () => {
            window.removeEventListener('resize', AnimationObserver.refresh);
        };
    }, [loading]);

    return (
        <div className="bg-cream text-navy min-h-screen overflow-x-hidden">
            {loading ? (
                <div className={`h-screen w-screen flex items-center justify-center bg-cream transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="text-4xl font-poppins font-bold pulse">
                        <span className="text-teal">A</span>niruddha <span className="text-teal">C</span>hitte
                    </div>
                </div>
            ) : (
                <>
                    <Cursor />
                    <Navbar />
                    <main>
                        <Hero />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;