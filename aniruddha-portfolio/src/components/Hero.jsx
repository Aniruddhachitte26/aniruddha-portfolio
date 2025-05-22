// components/Hero.jsx (Updated for mobile)
import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-fit md:min-h-screen py-16 md:py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-cream">
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-center">
                        {/* Hero Content */}
                        <div className="md:col-span-3">
                            <div className="font-fira text-teal mb-2 md:mb-4 text-sm md:text-base">
                                Hi, my name is
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-navy mb-1 md:mb-2">
                                Aniruddha Chitte.
                            </h1>

                            <h2 className="text-xl md:text-2xl font-poppins font-medium text-slate mb-3 md:mb-6">
                                I am a software engineer and AI/ML enthusiast.
                            </h2>

                            {/* About Me Content - Updated with smaller text for mobile */}
                            <div className="prose prose-sm md:prose-lg max-w-none mb-4 md:mb-8 text-slate text-sm md:text-base">
                                <p className="leading-snug md:leading-normal">
                                    I specialize in building robust and scalable applications through full-stack development, 
                                    cloud architecture, and machine learning. With over 1.5 years of professional software engineering 
                                    experience, I've developed innovative solutions that deliver real-world impact. Currently pursuing 
                                    my Master's in Computer Software Engineering at Northeastern University, I'm passionate about 
                                    creating efficient systems that solve complex problems and drive technological innovation.
                                </p>
                            </div>

                            <div className="mt-4 md:mt-8">
                                <button
                                    className="border-2 border-teal text-teal px-4 py-2 md:px-6 md:py-3 rounded-md font-fira text-sm md:text-base hover:bg-teal/10 transition-colors"
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

                        {/* Profile Image - Smaller on mobile */}
                        <div className="md:col-span-2 flex justify-center items-center">
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden w-85 h-85 md:w-85 md:h-85 transition-transform duration-300 hover:scale-105">
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