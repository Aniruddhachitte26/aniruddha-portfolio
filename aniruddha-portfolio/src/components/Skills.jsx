// components/Skills.jsx
import React, { useState } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaServer,
    FaCode, FaCloud, FaTools, FaMobileAlt, FaBrain, FaAws, 
    FaMicrosoft, FaGoogle, FaUsers, FaComments
} from 'react-icons/fa';
import { SiDjango, SiSpringboot, SiTensorflow, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Skill categories - added soft skills category
    const skillCategories = [
        { id: 'all', name: 'All', icon: <FaCode /> },
        { id: 'languages', name: 'Languages', icon: <FaCode /> },
        { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
        { id: 'backend', name: 'Backend', icon: <FaServer /> },
        { id: 'databases', name: 'Databases', icon: <FaDatabase /> },
        { id: 'cloud', name: 'Cloud', icon: <FaCloud /> },
        { id: 'tools', name: 'Tools', icon: <FaTools /> },
        { id: 'ml', name: 'ML & AI', icon: <FaBrain /> },
        { id: 'soft', name: 'Soft Skills', icon: <FaUsers /> }
    ];

    // Skills data - added soft skills
    const skills = [
        // Programming Languages
        { name: 'Python', icon: <FaPython />, category: 'languages' },
        { name: 'Java', icon: <FaJava />, category: 'languages' },
        { name: 'JavaScript', icon: <FaCode />, category: 'languages' },
        { name: 'C++', icon: <FaCode />, category: 'languages' },
        { name: 'SQL', icon: <FaDatabase />, category: 'languages' },
        
        // Frontend
        { name: 'React', icon: <FaReact />, category: 'frontend' },
        { name: 'Angular', icon: <FaCode />, category: 'frontend' },
        { name: 'Mobile Dev', icon: <FaMobileAlt />, category: 'frontend' },
        
        // Backend
        { name: 'Node.js', icon: <FaNodeJs />, category: 'backend' },
        { name: 'Django', icon: <SiDjango />, category: 'backend' },
        { name: 'Spring Boot', icon: <SiSpringboot />, category: 'backend' },
        { name: 'REST APIs', icon: <FaServer />, category: 'backend' },
        
        // Databases
        { name: 'MongoDB', icon: <SiMongodb />, category: 'databases' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'databases' },
        
        // ML/AI
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ml' },
        { name: 'Scikit-Learn', icon: <FaBrain />, category: 'ml' },
        
        // Cloud
        { name: 'AWS', icon: <FaAws />, category: 'cloud' },
        { name: 'Azure', icon: <FaMicrosoft />, category: 'cloud' },
        { name: 'GCP', icon: <FaGoogle />, category: 'cloud' },
        
        // Tools
        { name: 'Git', icon: <FaTools />, category: 'tools' },
        { name: 'Docker', icon: <FaTools />, category: 'tools' },
        
        // Soft Skills
        { name: 'Leadership', icon: <FaUsers />, category: 'soft' },
        { name: 'Teamwork', icon: <FaUsers />, category: 'soft' },
        { name: 'Communication', icon: <FaComments />, category: 'soft' },
        { name: 'Problem Solving', icon: <FaTools />, category: 'soft' },
        { name: 'Adaptability', icon: <FaUsers />, category: 'soft' },
        { name: 'Critical Thinking', icon: <FaBrain />, category: 'soft' },
        { name: 'Time Management', icon: <FaTools />, category: 'soft' },
        { name: 'Creativity', icon: <FaBrain />, category: 'soft' },
    ];

    // Filter skills based on active category
    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="pt-6 pb-20 lg:pt-12 lg:pb-32 bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy">
                            Skills & Technologies
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex justify-center mb-8 overflow-x-auto pb-4">
                        <div className="flex flex-wrap justify-center gap-2 bg-lightNavy p-2 rounded-lg shadow-md">
                            {skillCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                                            ? 'bg-teal/20 text-navy'
                                            : 'hover:bg-cream/70 text-slate'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid - More compact with smaller items */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredSkills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="bg-lightNavy rounded-lg p-4 flex flex-col items-center text-center shadow-md"
                            >
                                <div className="text-2xl text-teal mb-2">
                                    {skill.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-navy">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;