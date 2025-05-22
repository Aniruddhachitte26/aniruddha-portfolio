// components/Hero.jsx (Updated Content)
import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-cream">
            <div className="container mx-auto px-6 z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        {/* Hero Content */}
                        <div className="md:col-span-3">
                            <div className="font-fira text-teal mb-4">
                                Hi, my name is
                            </div>

                            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-navy mb-2">
                                Aniruddha Chitte.
                            </h1>

                            <h2 className="text-2xl md:text-2xl font-poppins font-medium text-slate mb-6">
                                I am a software engineer and AI/ML enthusiast.
                            </h2>

                            {/* About Me Content - Updated */}
                            <div className="prose prose-lg max-w-none mb-8 text-slate">
                                <p>
                                    I specialize in building robust and scalable applications through full-stack development, 
                                    cloud architecture, and machine learning. With over 1.5 years of professional software engineering 
                                    experience, I've developed innovative solutions that deliver real-world impact. Currently pursuing 
                                    my Master's in Computer Software Engineering at Northeastern University, I'm passionate about 
                                    creating efficient systems that solve complex problems and drive technological innovation.
                                </p>
                            </div>

                            <div className="mt-8">
                                <button
                                    className="border-2 border-teal text-teal px-6 py-3 rounded-md font-fira hover:bg-teal/10 transition-colors"
                                    onClick={() => {
                                        const element = document.getElementById('projects');
                                        if (element) {
                                            window.scrollTo({
                                                top: element.offsetTop - 80,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                >
                                    Explore my work
                                </button>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="md:col-span-2 flex justify-center items-center">
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden w-85 h-85  transition-transform duration-300 hover:scale-105">
                                    <img
                                        src="/aniruddha-portfolio/Profile.jpeg"
                                        alt="Aniruddha Chitte"
                                        className="w-full h-full object-cover object-center scale-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;