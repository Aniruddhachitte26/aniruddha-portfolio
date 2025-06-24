import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-fit md:min-h-screen py-16 md:py-20 lg:py-32 flex items-center justify-center overflow-hidden bg-cream">
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Reordered grid for mobile - Profile Image first, then content */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">
                        {/* Mobile Only: Profile Image */}
                        <div className="md:hidden w-full flex justify-center items-center mb-6">
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden w-85 h-85 transition-transform duration-300 hover:scale-105">
                                    <img
                                        src="/aniruddha-portfolio/Profile.jpeg"
                                        alt="Aniruddha Chitte"
                                        className="w-full h-full object-cover object-center scale-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="md:col-span-3">
                            <div className="font-fira text-teal mb-2 md:mb-4 text-sm md:text-base">
                                Hi, my name is
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-navy mb-1 md:mb-2">
                                Aniruddha Chitte.
                            </h1>

                            <h2 className="text-xl md:text-2xl font-poppins font-medium text-slate mb-3 md:mb-6">
                                I'm a Software Engineer.
                            </h2>

                            {/* About Me Content */}
                            <div className="prose prose-sm md:prose-lg max-w-none mb-4 md:mb-8 text-slate text-sm md:text-base">
                                <p className="leading-snug md:leading-normal">
                                    I specialize in building robust and scalable applications through full-stack development, 
                                    cloud architecture, and machine learning. With over 1.5 years of professional software engineering 
                                    experience, I've developed innovative solutions that deliver real-world impact. Currently pursuing 
                                    my Master's in Computer Software Engineering at Northeastern University, I'm passionate about 
                                    creating efficient systems that solve complex problems and drive technological innovation.
                                </p>
                            </div>

                            <div className="mt-4 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                                <button
                                    className="border-2 border-teal text-teal px-3 py-1.5 md:px-4 md:py-2 rounded-md font-fira text-xs md:text-sm hover:bg-teal/10 transition-colors"
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
                                
                                <a
                                    href="https://drive.google.com/file/d/1EHZZk4OBno820-7SpgOYT6P8UKGMu5c5/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-teal text-teal px-3 py-1.5 md:px-4 md:py-2 rounded-md font-fira text-xs md:text-sm hover:bg-teal/10 transition-colors"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>

                        {/* Desktop Only: Profile Image */}
                        <div className="hidden md:flex md:col-span-2 justify-center items-center">
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden w-85 h-85 transition-transform duration-300 hover:scale-105">
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