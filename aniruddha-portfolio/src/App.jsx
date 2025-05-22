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

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="bg-cream text-navy min-h-screen overflow-x-hidden">
            {loading ? (
                <div className="h-screen w-screen flex items-center justify-center bg-cream">
                    <div className="text-4xl font-poppins font-bold">
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