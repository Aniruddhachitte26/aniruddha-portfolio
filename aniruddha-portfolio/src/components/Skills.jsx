// components/Skills.jsx
import React, { useState, useEffect } from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaServer,
    FaCode, FaCloud, FaTools, FaMobileAlt, FaBrain, FaAws, 
    FaMicrosoft, FaGoogle, FaUsers, FaComments, FaDocker, FaJenkins,
    FaCss3, FaHtml5, FaAngular
} from 'react-icons/fa';
import { 
    SiKotlin, SiSpringboot, SiTypescript, SiExpress, 
    SiMongodb, SiPostgresql, SiMysql, SiGraphql, 
    SiNextdotjs, SiTensorflow, SiBootstrap,
    SiAndroidstudio, SiJira
} from 'react-icons/si';
import AnimationObserver from '../utils/AnimationObserver';

const Skills = () => {
    // Change default category to 'languages' instead of 'all'
    const [activeCategory, setActiveCategory] = useState('languages');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initialize animation observer
        if (typeof AnimationObserver !== 'undefined') {
            AnimationObserver.init();
        }
        
        const handleScroll = () => {
            const element = document.getElementById('skills');
            if (element) {
                const position = element.getBoundingClientRect();
                if (position.top < window.innerHeight && position.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Skill categories
    const skillCategories = [
        { id: 'all', name: 'All', icon: <FaCode /> },
        { id: 'languages', name: 'Languages', icon: <FaCode /> },
        { id: 'frontend', name: 'Frontend', icon: <FaReact /> },
        { id: 'backend', name: 'Backend', icon: <FaServer /> },
        { id: 'databases', name: 'Databases', icon: <FaDatabase /> },
        { id: 'cloud', name: 'Cloud', icon: <FaCloud /> },
        { id: 'tools', name: 'Tools', icon: <FaTools /> },
        { id: 'ml', name: 'ML & AI', icon: <FaBrain /> },
        { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt /> },
        { id: 'soft', name: 'Soft Skills', icon: <FaUsers /> }
    ];

    // Skills data - updated based on resume
    const skills = [
        // Programming Languages
        { name: 'Java', icon: <FaJava />, category: 'languages' },
        { name: 'Kotlin', icon: <SiKotlin />, category: 'languages' },
        { name: 'C#', icon: <FaCode />, category: 'languages' },
        { name: 'Python', icon: <FaPython />, category: 'languages' },
        { name: 'Go (Golang)', icon: <FaCode />, category: 'languages' },
        { name: 'C++', icon: <FaCode />, category: 'languages' },
        { name: 'C', icon: <FaCode />, category: 'languages' },
        { name: 'JavaScript', icon: <FaCode />, category: 'languages' },
        { name: 'TypeScript', icon: <SiTypescript />, category: 'languages' },
        { name: 'SQL', icon: <FaDatabase />, category: 'languages' },
        
        // Frontend
        { name: 'React.js', icon: <FaReact />, category: 'frontend' },
        { name: 'Angular', icon: <FaAngular />, category: 'frontend' },
        { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend' },
        { name: 'HTML5', icon: <FaHtml5 />, category: 'frontend' },
        { name: 'CSS3', icon: <FaCss3 />, category: 'frontend' },
        { name: 'Bootstrap', icon: <SiBootstrap />, category: 'frontend' },
        { name: 'REST API', icon: <FaServer />, category: 'frontend' },
        { name: 'GraphQL', icon: <SiGraphql />, category: 'frontend' },
        
        // Backend
        { name: 'Spring Boot', icon: <SiSpringboot />, category: 'backend' },
        { name: 'Node.js', icon: <FaNodeJs />, category: 'backend' },
        { name: 'Express.js', icon: <SiExpress />, category: 'backend' },
        { name: 'REST API', icon: <FaServer />, category: 'backend' },
        { name: 'GraphQL', icon: <SiGraphql />, category: 'backend' },
        { name: 'JSON', icon: <FaCode />, category: 'backend' },
        { name: 'AJAX', icon: <FaCode />, category: 'backend' },
        
        // Mobile Development
        { name: 'Android Studio', icon: <SiAndroidstudio />, category: 'mobile' },
        { name: 'Jetpack', icon: <FaCode />, category: 'mobile' },
        { name: 'Retrofit', icon: <FaCode />, category: 'mobile' },
        { name: 'Kotlin', icon: <SiKotlin />, category: 'mobile' },
        
        // Databases
        { name: 'MongoDB', icon: <SiMongodb />, category: 'databases' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'databases' },
        { name: 'MySQL', icon: <SiMysql />, category: 'databases' },
        { name: 'NoSQL', icon: <FaDatabase />, category: 'databases' },
        { name: 'SQLAlchemy', icon: <FaDatabase />, category: 'databases' },
        
        // ML/AI
        { name: 'TensorFlow', icon: <SiTensorflow />, category: 'ml' },
        { name: 'Scikit-Learn', icon: <FaBrain />, category: 'ml' },
        
        // Cloud & DevOps
        { name: 'AWS EC2', icon: <FaAws />, category: 'cloud' },
        { name: 'AWS S3', icon: <FaAws />, category: 'cloud' },
        { name: 'AWS Lambda', icon: <FaAws />, category: 'cloud' },
        { name: 'AWS CloudWatch', icon: <FaAws />, category: 'cloud' },
        { name: 'Docker', icon: <FaDocker />, category: 'cloud' },
        { name: 'Kubernetes', icon: <FaCloud />, category: 'cloud' },
        { name: 'Jenkins', icon: <FaJenkins />, category: 'cloud' },
        
        // Tools
        { name: 'Git', icon: <FaTools />, category: 'tools' },
        { name: 'Jira', icon: <SiJira />, category: 'tools' },
        { name: 'Postman', icon: <FaTools />, category: 'tools' },
        { name: 'Docker', icon: <FaDocker />, category: 'tools' },
        { name: 'Jenkins', icon: <FaJenkins />, category: 'tools' },
        
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
        <section id="skills" className="pt-4 pb-10 md:pt-12 md:pb-32 bg-cream">
            <div className="container mx-auto px-2 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-4 md:mb-10">
                        <h2 
                            className="text-xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy"
                            data-animate="slide-in-left"
                            data-delay="100"
                        >
                            Skills
                        </h2>
                        <div 
                            className="ml-3 h-px bg-teal flex-grow max-w-xs"
                            data-animate="slide-in-right"
                            data-delay="300"
                        ></div>
                    </div>

                    {/* Category Filter - Horizontally scrollable on mobile with smaller buttons */}
                    <div 
                        className="flex justify-start md:justify-center mb-3 md:mb-8 overflow-x-auto pb-1 -mx-2 px-2 md:mx-0 md:px-0 no-scrollbar"
                        data-animate="fade-in"
                        data-delay="500"
                    >
                        <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-1 md:gap-2 bg-lightNavy p-1 md:p-2 rounded-lg shadow-md">
                            {skillCategories.map((category, index) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center px-1.5 py-0.5 md:px-3 md:py-2 rounded-md transition-all duration-300 whitespace-nowrap text-xxs md:text-sm ${
                                        activeCategory === category.id
                                            ? 'bg-teal/20 text-navy'
                                            : 'hover:bg-cream/70 text-slate'
                                    } hover-expand`}
                                    data-animate="fade-in"
                                    data-delay={600 + index * 50}
                                >
                                    <span className="mr-0.5 md:mr-2 text-xs md:text-base">{category.icon}</span>
                                    <span className="font-medium">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid - More compact with smaller items and 4 columns on mobile */}
                    <div className="grid grid-cols-4 gap-1 md:gap-4">
                        {filteredSkills.map((skill, index) => (
                            <div
                                key={`${skill.category}-${skill.name}`}
                                className="bg-lightNavy rounded-lg p-1.5 md:p-4 flex flex-col items-center text-center shadow-md hover-lift"
                                data-animate="scale-in"
                                data-delay={700 + (index % 12) * 50}
                            >
                                <div className="text-sm md:text-2xl text-teal mb-0.5 md:mb-2 pulse">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xxs md:text-sm font-semibold text-navy truncate w-full">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Floating background shapes */}
                    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-50">
                        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-teal/5 float"></div>
                        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-teal/5 float" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;