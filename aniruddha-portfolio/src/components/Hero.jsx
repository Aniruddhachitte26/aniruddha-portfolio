// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Dynamic text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-background dark:bg-navy overflow-hidden">
            {/* Simple background with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-card dark:from-navy dark:to-lightNavy z-0" />

            {/* Content */}
            <div className="container mx-auto px-6 z-10">
                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="font-fira text-primary dark:text-teal mb-4">
                        Hi, my name is
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-poppins font-bold text-secondary dark:text-white mb-2">
                        Aniruddha Chitte.
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-secondary/80 dark:text-lightSlate mb-5 max-w-2xl font-medium">
                        I am a <span >software engineer and AI/ML enthusiast</span>.
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-lg text-secondary/70 dark:text-lightSlate mb-8 max-w-2xl leading-relaxed">
                        I build intelligent systems through full-stack development, cloud architecture,
                        AI/ML, and data analytics. With a focus on scalable solutions,
                        I transform complex problems into innovative applications that deliver real-world impact.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <motion.button
                            className="border-2 border-primary dark:border-teal text-primary dark:text-teal px-6 py-3 rounded-md font-fira hover:bg-primary/5 dark:hover:bg-teal/10 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;