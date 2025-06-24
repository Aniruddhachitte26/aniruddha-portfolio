// components/About.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBookOpen, FaBriefcase } from 'react-icons/fa';
import {
    FaJava, FaNodeJs, FaReact, FaDocker, FaAws, FaPython,
    FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import {
    SiSpringboot, SiMongodb, SiRedux, SiTypescript,
    SiExpress, SiTailwindcss, SiMysql, SiPostgresql
} from 'react-icons/si';

const About = () => {
    // For the animated title
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    // Tech stack data with colorful icons - Mobile optimized sizes
    const techStackRow1 = [
        { name: "Java", icon: <FaJava color="#007396" />, mobileIcon: <FaJava size={16} color="#007396" /> },
        { name: "Node.js", icon: <FaNodeJs color="#68A063" />, mobileIcon: <FaNodeJs size={16} color="#68A063" /> },
        { name: "React", icon: <FaReact color="#61DAFB" />, mobileIcon: <FaReact size={16} color="#61DAFB" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" />, mobileIcon: <SiMongodb size={16} color="#47A248" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" />, mobileIcon: <SiSpringboot size={16} color="#6DB33F" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" />, mobileIcon: <SiRedux size={16} color="#764ABC" /> }
    ];

    const techStackRow2 = [
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, mobileIcon: <SiTypescript size={16} color="#3178C6" /> },
        { name: "Express", icon: <SiExpress color="#000000" />, mobileIcon: <SiExpress size={16} color="#000000" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" />, mobileIcon: <FaDocker size={16} color="#2496ED" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" />, mobileIcon: <FaAws size={16} color="#FF9900" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" />, mobileIcon: <FaGitAlt size={16} color="#F05032" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" />, mobileIcon: <SiTailwindcss size={16} color="#06B6D4" /> }
    ];

    // Marquee animation for left to right
    const marqueeLeftToRight = {
        animate: {
            x: ["0%", "-90%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                    repeatDelay: 0
                }
            }
        }
    };

    // Marquee animation for right to left
    const marqueeRightToLeft = {
        animate: {
            x: ["-90%", "0%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                    repeatDelay: 0
                }
            }
        }
    };

    // Mobile marquee animations (faster for smaller screens)
    const mobileMarqueeLeftToRight = {
        animate: {
            x: ["0%", "-90%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                    repeatDelay: 0
                }
            }
        }
    };

    const mobileMarqueeRightToLeft = {
        animate: {
            x: ["-90%", "0%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                    repeatDelay: 0
                }
            }
        }
    };

    return (
        <section id="about" className="py-6 md:pt-6 md:pb-20 lg:pt-12 lg:pb-32 bg-cream" ref={ref}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-4 md:mb-12">
                        <h2 className={`text-xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            About Me
                        </h2>
                        <div className={`ml-3 md:ml-4 h-px bg-teal flex-grow max-w-[200px] md:max-w-xs transform transition-all duration-700 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transformOrigin: 'left' }}></div>
                    </div>

                    {/* Mobile View */}
                    <div className="md:hidden">
                        {/* Logo and Bio Card in horizontal layout */}
                        <div className="flex gap-3 mb-4">
                            {/* Logos - Left side */}
                            <div className="flex-shrink-0 w-24">
                                <div className="flex flex-col gap-1.5 h-full">
                                    {/* University Logo */}
                                    <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden">
                                        <img
                                            src="/aniruddha-portfolio/images/neu.png"
                                            alt="Northeastern University"
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                    {/* Atos Logo - Mobile only */}
                                    <div className="flex-1 flex items-center justify-center bg-white rounded-lg shadow-sm overflow-hidden">
                                        <img
                                            src="/aniruddha-portfolio/images/atos.png"
                                            alt="Atos"
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bio Card - Right side */}
                            <div className="flex-1 bg-white rounded-lg p-3 shadow-md">
                                <h3 className="text-sm font-bold mb-1 text-navy">Aniruddha Chitte</h3>
                                <p className="text-xs text-slate leading-relaxed">
                                    Tech-focused professional with expertise in full-stack development, cloud architecture,
                                    and machine learning, combining technical prowess with strategic problem-solving skills.
                                </p>
                            </div>
                        </div>

                        {/* Education & Experience Cards - Compact */}
                        <div className="space-y-2 mb-4">
                            {/* Master's Education */}
                            <div className="bg-white rounded-lg p-2.5 shadow-sm flex items-center">
                                <div className="mr-2 flex-shrink-0">
                                    <FaBookOpen className="text-teal text-xs" />
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h4 className="text-xs font-medium text-navy">Northeastern University</h4>
                                        <p className="text-xxs text-slate">MS in Computer Software Engineering</p>
                                    </div>
                                    <span className="text-xxs text-teal font-medium ml-2 whitespace-nowrap">2024-2026</span>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="bg-white rounded-lg p-2.5 shadow-sm flex items-center">
                                <div className="mr-2 flex-shrink-0">
                                    <FaBriefcase className="text-teal text-xs" />
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h4 className="text-xs font-medium text-navy">Atos, Pune </h4>
                                        <p className="text-xxs text-slate">Software Engineer</p>
                                    </div>
                                    <span className="text-xxs text-teal font-medium ml-2 whitespace-nowrap">2023-2024</span>
                                </div>
                            </div>

                            {/* Bachelor's Education */}
                            <div className="bg-white rounded-lg p-2.5 shadow-sm flex items-center">
                                <div className="mr-2 flex-shrink-0">
                                    <FaBookOpen className="text-teal text-xs" />
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h4 className="text-xs font-medium text-navy">Savitribai Phule Pune Univeristy</h4>
                                        <p className="text-xxs text-slate">B.Tech in Electronics & Telecommunication</p>
                                    </div>
                                    <span className="text-xxs text-teal font-medium ml-2 whitespace-nowrap">2019-2023</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-white rounded-lg p-2.5 text-center shadow-sm">
                                <h3 className="text-lg font-bold text-navy">1.5+</h3>
                                <p className="text-xxs text-slate">Years Experience</p>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 text-center shadow-sm">
                                <h3 className="text-lg font-bold text-navy">10+</h3>
                                <p className="text-xxs text-slate">Academic Projects</p>
                            </div>
                        </div>

                        {/* Tech Stack for Mobile - Moving Animation */}
                        <div className="mt-4">
                            <h3 className="text-base font-bold mb-3 text-navy text-center">My Stack</h3>
                            
                            {/* First row - left to right */}
                            <div className="mb-2 overflow-hidden">
                                <motion.div
                                    variants={mobileMarqueeLeftToRight}
                                    animate="animate"
                                    className="flex whitespace-nowrap"
                                    style={{ width: "fit-content" }}
                                >
                                    {[...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-md p-2 mx-1 flex items-center shadow-sm min-w-[120px]"
                                        >
                                            <div className="mr-2 flex-shrink-0">
                                                {tech.mobileIcon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-xs text-navy">{tech.name}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Second row - right to left */}
                            <div className="overflow-hidden">
                                <motion.div
                                    variants={mobileMarqueeRightToLeft}
                                    animate="animate"
                                    className="flex whitespace-nowrap"
                                    style={{ width: "fit-content" }}
                                >
                                    {[...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-md p-2 mx-1 flex items-center shadow-sm min-w-[120px]"
                                        >
                                            <div className="mr-2 flex-shrink-0">
                                                {tech.mobileIcon}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-xs text-navy">{tech.name}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Layout - Original Grid (unchanged) */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
                        {/* Left Column - Education and Experience (spans 4 columns) */}
                        <div className="md:col-span-4 space-y-4">
                            {/* Master's Education Card */}
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="flex items-start">
                                    <div className="mr-3 mt-1">
                                        <FaBookOpen className="text-teal text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-navy">2024-2026</h3>
                                        <h4 className="text-base font-medium text-navy">Northeastern University</h4>
                                        <p className="text-sm text-teal">
                                            MS in Computer Software Engineering
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Experience Card */}
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="flex items-start">
                                    <div className="mr-3 mt-1">
                                        <FaBriefcase className="text-teal text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-navy">2023-2024</h3>
                                        <h4 className="text-base font-medium text-navy">Atos, Pune, India</h4>
                                        <p className="text-sm text-slate">
                                            Software Engineer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bachelor's Education Card */}
                            <div className="bg-white rounded-lg p-4 shadow-md">
                                <div className="flex items-start">
                                    <div className="mr-3 mt-1">
                                        <FaBookOpen className="text-teal text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-navy">2019-2023</h3>
                                        <h4 className="text-base font-medium text-navy">Savitribai Phule Pune University</h4>
                                        <p className="text-sm text-teal">
                                            BTech in Electronics and Telecommunication
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-3 text-center shadow-md">
                                    <h3 className="text-2xl font-bold text-navy">1.5+</h3>
                                    <p className="text-xs text-slate">Experience</p>
                                    <p className="text-xs text-slate">Years</p>
                                </div>
                                <div className="bg-white rounded-lg p-3 text-center shadow-md">
                                    <h3 className="text-2xl font-bold text-navy">10+</h3>
                                    <p className="text-xs text-slate">Academic</p>
                                    <p className="text-xs text-slate">Projects</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Logo, Bio and Tech Stack (spans 8 columns) */}
                        <div className="md:col-span-8">
                            {/* Logo and Bio */}
                            <div className="grid grid-cols-12 gap-4 mb-6">
                                {/* Logo */}
                                <div className="col-span-4 flex justify-center items-center">
                                    <div className="w-30 h-30 sm:w-38 sm:h-38 flex items-center justify-center bg-white rounded-lg p-1.5">
                                        <img
                                            src="/aniruddha-portfolio/images/neu.png"
                                            alt="Northeastern University"
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="col-span-8 bg-white rounded-lg p-4 shadow-md">
                                    <h3 className="text-xl font-bold mb-2 text-navy">Aniruddha Chitte</h3>
                                    <p className="text-sm text-slate">
                                        Tech-focused professional with expertise in full-stack development, cloud architecture,
                                        and machine learning, combining technical prowess with strategic problem-solving skills.
                                    </p>
                                    <p className="text-sm text-slate">
                                        Passionate about creating efficient systems that solve complex problems
                                        and drive technological innovation. Known for bridging the gap between theoretical concepts and practical solutions, with a unique
                                        blend of software engineering expertise and AI research background.
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Section with moving animation */}
                            <div className="mt-6">
                                <h3 className="text-xl font-bold mb-4 text-navy text-center">My Stack</h3>

                                {/* First row - left to right */}
                                <div className="mb-4 overflow-hidden">
                                    <motion.div
                                        variants={marqueeLeftToRight}
                                        animate="animate"
                                        className="flex whitespace-nowrap"
                                        style={{ width: "fit-content" }}
                                    >
                                        {[...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white rounded-lg p-3 mx-2 flex items-center shadow-md w-48 min-w-[170px]"
                                                whileHover={{ y: 0, transition: { duration: 0.2 } }}
                                            >
                                                <div className="mr-3 flex-shrink-0">
                                                    {tech.icon}
                                                </div>
                                                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                                                    <h4 className="font-medium text-sm text-navy">{tech.name}</h4>
                                                    <p className="text-xs text-slate">{tech.description || 'Technology'}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Second row - right to left */}
                                <div className="overflow-hidden">
                                    <motion.div
                                        variants={marqueeRightToLeft}
                                        animate="animate"
                                        className="flex whitespace-nowrap"
                                        style={{ width: "fit-content" }}
                                    >
                                        {[...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white rounded-lg p-3 mx-2 flex items-center shadow-md w-48 min-w-[170px]"
                                                whileHover={{ y: 0, transition: { duration: 0.2 } }}
                                            >
                                                <div className="mr-3 flex-shrink-0">
                                                    {tech.icon}
                                                </div>
                                                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                                                    <h4 className="font-medium text-sm text-navy">{tech.name}</h4>
                                                    <p className="text-xs text-slate">{tech.description || 'Technology'}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;