// components/Experience.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [activeTab, setActiveTab] = useState('work');

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

    // Work Experience Data
    const workExperience = [
        {
            title: "Software Engineer Intern",
            company: "Atos",
            location: "Pune, India",
            duration: "February 2024 - May 2024",
            logo: "aniruddha-portfolio\public\images\atos-logo.jpeg",
            description: [
                "Developed scalable backend solutions by designing and deploying REST APIs, ensuring seamless integration and high performance, with rigorous testing and validation using Postman.",
                "Migrated employee portal features to a cloud-native architecture, enhancing system scalability and performance, and minimizing downtime by taking advantage of cloud services and automation.",
                "Led development of automated workflows for HR processes, executing serverless functions and cloud-based services, improving operational efficiency by 20%.",
                "Collaborated on developing a Microservices architecture for a web application, utilizing CI/CD pipeline to enhance deployment, system scalability, and boost system reliability by 30%."
            ]
        },
        {
            title: "Machine Learning Intern",
            company: "Aiadventures LLP",
            location: "Pune, India",
            duration: "January 2023 - June 2023",
            logo: "aniruddha-portfolio\public\images\ai-logo.png",
            description: [
                "Created innovative machine learning solutions, generating actionable insights, advancing market segmentation strategies, and supporting expansion into two new customer demographics.",
                "Spearheaded optimization of CNN models, increasing classification accuracy to 94% through hyperparameter tuning, and rolled out scalable solutions to elevate processing efficiency for real-world classification tasks.",
                "Designed and refined a text summarization pipeline employing transformer-based models and Generative AI techniques, streamlining customer feedback analysis, mitigating manual effort by 40%, and strengthening product strategy insights."
            ]
        }
    ];

    // Education Data
    const education = [
        {
            institution: "Northeastern University",
            degree: "Master of Science in Computer Software Engineering",
            location: "Boston, MA",
            duration: "September 2024 - May 2026",
            logo: "aniruddha-portfolio\public\images\northeastern-logo.png",
            description: [
                "Currently pursuing advanced studies in software engineering, focusing on modern development methodologies and practices.",
                "Coursework includes Web Design and User Experience, Network Structures & Cloud Computing, User Experience Design and Testing (UI/UX), Database Management and Design, Program structure and Algorithm, Data Science and Application Engineering."
            ]
        },
        {
            institution: "Savitribai Phule Pune University",
            degree: "Bachelor of Technology in Electronics and Telecommunication",
            location: "Maharashtra, India",
            duration: "August 2019 - June 2023",
            logo: "aniruddha-portfolio\public\images\sppu-logo.jpeg",
            description: [
                "Completed undergraduate studies with focus on both hardware and software aspects of technology systems.",
                "Coursework included Web Technology, Advanced Java, Computer Networks, Big Data Analysis, Data Structures, Data Science, Machine Learning, Artificial Intelligence, and Object-Oriented Programming."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 lg:py-32 bg-cream/50 dark:bg-lightNavy/30">
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
                            My Journey
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </motion.div>

                    {/* Tabs */}
                    <motion.div
                        className="flex justify-center mb-10"
                        variants={itemVariants}
                    >
                        <div className="bg-cream dark:bg-navy p-1 rounded-lg shadow-md flex">
                            <button
                                onClick={() => setActiveTab('work')}
                                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${activeTab === 'work'
                                        ? 'bg-teal/20 text-navy dark:text-white'
                                        : 'hover:bg-cream/70 dark:hover:bg-lightNavy text-slate dark:text-lightSlate'
                                    }`}
                            >
                                <FaBriefcase className="mr-2" />
                                <span className="font-medium">Work</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${activeTab === 'education'
                                        ? 'bg-teal/20 text-navy dark:text-white'
                                        : 'hover:bg-cream/70 dark:hover:bg-lightNavy text-slate dark:text-lightSlate'
                                    }`}
                            >
                                <FaGraduationCap className="mr-2" />
                                <span className="font-medium">Education</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div variants={itemVariants}>
                        {activeTab === 'work' ? (
                            <div className="space-y-12">
                                {workExperience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        {/* Timeline Line */}
                                        {index < workExperience.length - 1 && (
                                            <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-teal/30 z-0"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle */}
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 bg-cream dark:bg-navy border-2 border-teal rounded-full flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <motion.div
                                                className="ml-6 bg-white dark:bg-navy shadow-lg dark:shadow-custom p-6 rounded-lg flex-1 z-10"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                    <div className="flex items-center">
                                                        {/* Company Logo */}
                                                        {exp.logo && (
                                                            <div className="mr-4 w-16 h-16 flex-shrink-0 bg-white rounded-full p-1 shadow-sm overflow-hidden">
                                                                <img 
                                                                    src={exp.logo} 
                                                                    alt={`${exp.company} logo`} 
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        )}
                                                        
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-navy dark:text-white">
                                                                {exp.title}
                                                            </h3>
                                                            <h4 className="text-lg font-medium text-teal">
                                                                {exp.company} - {exp.location}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-fira text-slate dark:text-lightSlate mt-2 md:mt-0">
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex text-slate dark:text-lightSlate">
                                                            <span className="text-teal mr-2 flex-shrink-0">▹</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        {/* Timeline Line */}
                                        {index < education.length - 1 && (
                                            <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-teal/30 z-0"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle */}
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 bg-cream dark:bg-navy border-2 border-teal rounded-full flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <motion.div
                                                className="ml-6 bg-white dark:bg-navy shadow-lg dark:shadow-custom p-6 rounded-lg flex-1 z-10"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                    <div className="flex items-center">
                                                        {/* Logo Image */}
                                                        {edu.logo && (
                                                            <div className="mr-4 w-16 h-16 flex-shrink-0 bg-white rounded-full p-1 shadow-sm overflow-hidden">
                                                                <img 
                                                                    src={edu.logo} 
                                                                    alt={`${edu.institution} logo`} 
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        )}
                                                        
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-navy dark:text-white">
                                                                {edu.institution}
                                                            </h3>
                                                            <h4 className="text-lg font-medium text-teal">
                                                                {edu.degree}
                                                            </h4>
                                                            <p className="text-slate dark:text-lightSlate">
                                                                {edu.location}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-fira text-slate dark:text-lightSlate mt-2 md:mt-0">
                                                        {edu.duration}
                                                    </span>
                                                </div>
                                                <ul className="space-y-2">
                                                    {edu.description.map((item, i) => (
                                                        <li key={i} className="flex text-slate dark:text-lightSlate">
                                                            <span className="text-teal mr-2 flex-shrink-0">▹</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;