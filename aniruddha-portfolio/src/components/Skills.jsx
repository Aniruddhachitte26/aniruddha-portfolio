// components/Skills.jsx - Updated version without percentages
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaServer,
    FaCode, FaCloud, FaTools, FaMobileAlt, FaBrain, FaAws, FaMicrosoft, FaGoogle
} from 'react-icons/fa';
import { SiDjango, SiSpringboot, SiTensorflow, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [activeCategory, setActiveCategory] = useState('all');

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
                staggerChildren: 0.1,
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

    // Skill data - removed proficiency percentages
    const skillCategories = [
        { id: 'all', name: 'All', icon: <FaCode /> },
        { id: 'languages', name: 'Languages', icon: <FaCode /> },
        { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
        { id: 'backend', name: 'Backend', icon: <FaServer /> },
        { id: 'databases', name: 'Databases', icon: <FaDatabase /> },
        { id: 'cloud', name: 'Cloud', icon: <FaCloud /> },
        { id: 'tools', name: 'Tools', icon: <FaTools /> },
        { id: 'ml', name: 'ML & AI', icon: <FaBrain /> }
    ];

    const skills = [
        { name: 'Python', icon: <FaPython />, category: 'languages' },
        { name: 'Java', icon: <FaJava />, category: 'languages' },
        { name: 'JavaScript', icon: <FaCode />, category: 'languages' },
        { name: 'C++', icon: <FaCode />, category: 'languages' },
        { name: 'SQL', icon: <FaDatabase />, category: 'languages' },
        { name: 'React', icon: <FaReact />, category: 'frontend' },
        { name: 'Angular', icon: <FaCode />, category: 'frontend' },
        { name: 'Node.js', icon: <FaNodeJs />, category: 'backend' },
        { name: 'Django', icon: <SiDjango />, category: 'backend' },
        { name: 'Spring Boot', icon: <SiSpringboot />, category: 'backend' },
        { name: 'MongoDB', icon: <SiMongodb />, category: 'databases' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'databases' },
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ml' },
        { name: 'Scikit-Learn', icon: <FaBrain />, category: 'ml' },
        { name: 'AWS', icon: <FaAws />, category: 'cloud' },
        { name: 'Azure', icon: <FaMicrosoft />, category: 'cloud' },
        { name: 'GCP', icon: <FaGoogle />, category: 'cloud' },
        { name: 'Git', icon: <FaTools />, category: 'tools' },
        { name: 'Docker', icon: <FaTools />, category: 'tools' },
        { name: 'REST APIs', icon: <FaServer />, category: 'backend' },
        { name: 'Mobile Dev', icon: <FaMobileAlt />, category: 'frontend' },
    ];

    // Filter skills based on active category
    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 lg:py-32 bg-cream/50 dark:bg-lightNavy/30">
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
                            Skills & Technologies
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        className="flex justify-center mb-10 overflow-x-auto pb-4"
                        variants={itemVariants}
                    >
                        <div className="flex space-x-2 bg-white dark:bg-navy p-2 rounded-lg shadow-md">
                            {skillCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                                            ? 'bg-teal/20 text-navy dark:text-white'
                                            : 'hover:bg-cream/70 dark:hover:bg-lightNavy text-slate dark:text-lightSlate'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Grid - Removed percentage indicators */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence>
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                    }}
                                    className="bg-white dark:bg-navy rounded-lg p-6 flex flex-col items-center text-center shadow-md dark:shadow-custom"
                                >
                                    <motion.div
                                        className="text-4xl text-teal mb-4"
                                        whileHover={{ rotateY: 180 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-navy dark:text-white">
                                        {skill.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16"
                    >
                        <h3 className="text-2xl font-poppins font-semibold text-navy dark:text-white mb-6 text-center">
                            Soft Skills
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                            {['Leadership', 'Teamwork', 'Communication', 'Problem Solving', 'Adaptability', 'Critical Thinking', 'Time Management', 'Creativity', 'Attention to Detail', 'Empathy'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, color: '#64ffda' }}
                                    className="bg-cream/70 dark:bg-lightNavy rounded-lg p-3 text-center text-navy dark:text-lightSlate shadow-sm font-medium"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
};

export default Skills;