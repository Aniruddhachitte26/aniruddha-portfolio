// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

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

    // Updated projects array with the new Drug Management System project
    const projects = [
        {
            id: 1,
            title: "StockWise Trading Web Application",
            description: "A comprehensive stock trading & investment platform with portfolio management and market analysis.",
            longDescription: "StockWise is a comprehensive web application designed for stock trading, portfolio management, and market analysis. Built with React, Node.js, and MongoDB, it provides users with tools to track stocks, manage investments, view market news, and interact with an AI assistant for financial insights. Features include secure authentication with role-based access (users, brokers, admins), portfolio management for tracking owned stocks and performance, watchlist functionality, detailed stock information with charts, trading simulation, integrated AI chatbot, virtual wallet system with Stripe integration, and a complete user verification workflow. The platform delivers a responsive UI built with React and Bootstrap, and implements state management via Redux Toolkit.",
            image: "/aniruddha-portfolio/images/projects/stockwiseproject.png",
            github: "https://github.com/Aniruddhachitte26/StockWise",
            demo: "https://stockwise-demo.sleepysoul.cc",
            technologies: ["React", "Node.js", "Redux Toolkit", "MongoDB", "Stripe","Bootstrap", "Express", "JWT ", "NodeMailer", "Multer", "Radis"],
            category: "web"
        },
        {
            id: 2,
            title: "Next-Gen Job Portal",
            description: "A full-stack job portal connecting job seekers with potential employers featuring role-based access control.",
            longDescription: "Job Portal is a full-stack web application that connects job seekers with potential employers. Built with React, Redux and Material UI on the frontend and Node.js, Express and MongoDB on the backend, the platform features separate interfaces for administrators and employees with role-based access control. Administrators can manage users and job postings, while employees can browse job listings with search and filter capabilities and view detailed company profiles. The application includes secure authentication, responsive design for all devices, intuitive navigation with React Router, and comprehensive state management using Redux. The backend implements secure user management, job listing APIs, and image upload functionality.",
            image: "/aniruddha-portfolio/images/projects/JobPortal.png",
            github: "https://github.com/Aniruddhachitte26/Job-Portal-Web-Application",
            demo: "#",
            technologies: ["React", "Redux & Redux Toolkit", "Axios", "Multer", "Node.js", "Express", "MongoDB", "Material UI"],
            category: "web"
        },
        {
            id: 3,
            title: "Machine Learning Approach in Melanoma Skin Cancer Stage Detection",
            description: "A CNN-based diagnostic system for skin lesion analysis with high classification accuracy.",
            longDescription: "Innovated a CNN based skin lesion diagnosis system, achieving 97% classification accuracy, and integrated real-time visualization through Streamlit to assist medical professionals. Leveraged Python, deep learning algorithms, and SQL to strengthen image processing, data management, and ensure accurate diagnostic results. This research was published in IEEE Xplore in January 2024.",
            image: "/aniruddha-portfolio/images/projects/ML.jpg",
            github: "https://github.com/Aniruddhachitte26/Melanoma_Skin_Cancer_Stage_Detection",
            demo: "#",
            technologies: ["Python", "TensorFlow", "CNN", "Streamlit"],
            category: "ml"
        },
        {
            id: 4,
            title: "Drug Management System",
            description: "A centralized system for pharmaceutical companies to streamline case management and ensure regulatory compliance.",
            longDescription: "Collaborated with a team to develop a centralized Drug Management System (DMS) aimed at streamlining case management for pharmaceutical companies. The system focuses on efficiently handling adverse event reporting and case tracking for drugs and devices, ensuring compliance with regulatory standards such as the FDA, providing data analytics and decision-making support to enhance drug safety, and facilitating seamless communication between manufacturers, healthcare providers, and regulatory agencies.",
            image: "/aniruddha-portfolio/images/projects/Drug.jpg",
            github: "#",
            demo: "#",
            technologies: ["MySQL", "Tableau", "Microsoft Azure", "GUI", "UDF"],
            category: "ml"
        },
    ];

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    // Handle modal
    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="py-20 lg:py-32 bg-cream dark:bg-navy">
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
                            Projects
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </motion.div>

                    {/* Filter */}
                    <motion.div
                        className="flex justify-center mb-12 flex-wrap"
                        variants={itemVariants}
                    >
                        <div className="flex space-x-2 bg-white dark:bg-lightNavy p-2 rounded-lg shadow-md">
                            {['all', 'web', 'ml'].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-4 py-2 rounded-md transition-all duration-300 ${activeFilter === category
                                        ? 'bg-teal/20 text-navy dark:text-white'
                                        : 'hover:bg-cream/70 dark:hover:bg-navy text-slate dark:text-lightSlate'
                                        }`}
                                >
                                    <span className="font-medium capitalize">
                                        {category === 'all' ? 'All' : category === 'ml' ? 'ML & AI' : 'Web Apps'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        variants={itemVariants}
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white dark:bg-lightNavy rounded-lg overflow-hidden shadow-lg dark:shadow-custom transform transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-navy/50 dark:bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => openModal(project)}
                                                className="px-4 py-2 bg-teal text-navy font-medium rounded-md transform transition hover:scale-105"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate dark:text-lightSlate mb-4">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-teal/10 text-teal text-xs font-fira rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex justify-end space-x-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-navy dark:text-lightSlate hover:text-teal dark:hover:text-teal transition-colors"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-navy dark:text-lightSlate hover:text-teal dark:hover:text-teal transition-colors"
                                            >
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-cream dark:bg-lightNavy rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-teal/20">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-poppins font-bold text-navy dark:text-white">
                                        {selectedProject.title}
                                    </h3>
                                    <button
                                        onClick={closeModal}
                                        className="text-slate dark:text-lightSlate hover:text-teal dark:hover:text-teal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="mb-6">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-navy dark:text-white mb-2">
                                        Project Overview
                                    </h4>
                                    <p className="text-slate dark:text-lightSlate">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-navy dark:text-white mb-2">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-teal/10 text-teal font-fira rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 bg-navy dark:bg-teal text-white dark:text-navy font-medium rounded-md flex items-center transition hover:bg-navy/80 dark:hover:bg-teal/80"
                                    >
                                        <FaGithub className="mr-2" /> GitHub Repo
                                    </a>
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border-2 border-navy dark:border-teal text-navy dark:text-teal font-medium rounded-md flex items-center transition hover:bg-navy/10 dark:hover:bg-teal/10"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;