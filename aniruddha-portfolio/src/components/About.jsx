// components/About.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

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
        <section id="about" className="py-20 lg:py-32 bg-cream dark:bg-navy">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {/* Section Title */}
                    <motion.div className="flex items-center mb-12" variants={itemVariants}>
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy dark:text-white">
                            About Me
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-10">
                        {/* About Text */}
                        <motion.div className="md:col-span-3" variants={itemVariants}>
                            <div className="prose prose-lg dark:prose-invert max-w-none mb-6 text-slate dark:text-lightSlate">
                                <p>
                                    I am a passionate software engineer with expertise in full-stack development,
                                    data analytics, and machine learning. I thrive on solving real-world challenges
                                    by designing scalable and efficient solutions. My strong technical foundation,
                                    paired with a curiosity for innovation, has enabled me to build impactful
                                    applications and tackle complex problems.
                                </p>
                                <p>
                                    Currently pursuing my Master's in Computer Software Engineering at Northeastern University,
                                    I'm constantly expanding my knowledge and skills in the field. My background in Electronics
                                    and Telecommunication gives me a unique perspective on software development challenges.
                                </p>
                                <p>
                                    I've worked with various technologies and frameworks across my projects and professional
                                    experiences, focusing on creating intuitive and efficient solutions. I believe in
                                    continuous learning and enjoy exploring new technologies to stay at the cutting edge
                                    of software development.
                                </p>
                            </div>

                            {/* Technologies */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-xl font-poppins font-semibold text-navy dark:text-white mb-4">
                                    Technologies I've been working with recently:
                                </h3>
                                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                                    {[
                                        'JavaScript (ES6+)', 'React.js', 'Node.js',
                                        'Python', 'Django', 'Java',
                                        'Spring Boot', 'MongoDB', 'PostgreSQL',
                                        'AWS', 'Docker', 'Git'
                                    ].map((tech, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center font-fira text-slate dark:text-lightSlate"
                                            whileHover={{ x: 5, color: '#64ffda' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <span className="text-teal mr-2">▹</span> {tech}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* Profile Image - Updated with larger size and no effects */}
                        <motion.div
                            className="md:col-span-2 flex justify-center items-start"
                            variants={itemVariants}
                        >
                            <div className="relative">
                                {/* Image - Increased size, removed effects */}
                                <div className="relative rounded-lg overflow-hidden w-72 h-72 md:w-80 md:h-80 shadow-lg">
                                    <img
                                        src="aniruddha-portfolio\public\Profile.jpeg"
                                        alt="Aniruddha Chitte"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;