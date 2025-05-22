// components/Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Projects data
    const projects = [
        {
            id: 1,
            title: "StockWise Trading Web Application",
            description: "A comprehensive stock trading & investment platform with portfolio management and market analysis.",
            longDescription: "StockWise is a comprehensive web application designed for stock trading, portfolio management, and market analysis. Built with React, Node.js, and MongoDB, it provides users with tools to track stocks, manage investments, view market news, and interact with an AI assistant for financial insights. Features include secure authentication with role-based access (users, brokers, admins), portfolio management for tracking owned stocks and performance, watchlist functionality, detailed stock information with charts, trading simulation, integrated AI chatbot, virtual wallet system with Stripe integration, and a complete user verification workflow. The platform delivers a responsive UI built with React and Bootstrap, and implements state management via Redux Toolkit.",
            image: "/aniruddha-portfolio/images/projects/stockwiseproject.png",
            github: "https://github.com/Aniruddhachitte26/StockWise",
            demo: "https://stockwise-frontend-sqh8.onrender.com",
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
            demo: "https://job-portal-web-application-frontend.onrender.com",
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
        <section id="projects" className="pt-6 pb-20 lg:pt-12 lg:pb-32 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-6 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy">
                            Projects
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </div>

                    {/* Filter */}
                    <div className="flex justify-center mb-6 md:mb-12 flex-wrap">
                        <div className="flex space-x-2 bg-lightNavy p-1.5 md:p-2 rounded-lg shadow-md">
                            {['all', 'web', 'ml'].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-3 py-1 md:px-4 md:py-2 rounded-md transition-all duration-300 text-xs md:text-sm ${
                                        activeFilter === category
                                            ? 'bg-teal/20 text-navy'
                                            : 'hover:bg-cream/70 text-slate'
                                    }`}
                                >
                                    <span className="font-medium capitalize">
                                        {category === 'all' ? 'All' : category === 'ml' ? 'ML & AI' : 'Web Apps'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-lightNavy rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-36 md:h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={() => openModal(project)}
                                            className="px-3 py-1.5 md:px-4 md:py-2 bg-teal text-navy font-medium rounded-md transform transition hover:scale-105 text-xs md:text-sm"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-3 md:p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg md:text-xl font-semibold text-navy mb-1 md:mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate mb-2 md:mb-4 flex-grow text-xs md:text-base">
                                        {project.description}
                                    </p>

                                    {/* Technologies - Show first 5 on mobile, more on desktop */}
                                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                                        {project.technologies.slice(0, window.innerWidth < 768 ? 5 : undefined).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-1.5 py-0.5 md:px-2 md:py-1 bg-teal/10 text-teal text-xxs md:text-xs font-fira rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {window.innerWidth < 768 && project.technologies.length > 5 && (
                                            <span className="px-1.5 py-0.5 bg-teal/10 text-teal text-xxs font-fira rounded">
                                                +{project.technologies.length - 5} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex justify-end space-x-4 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-teal transition-colors"
                                        >
                                            <FaGithub size={16} className="md:text-xl" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-navy hover:text-teal transition-colors"
                                        >
                                            <FaExternalLinkAlt size={14} className="md:text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Modal - Smaller padding and font sizes on mobile */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-navy/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="bg-lightNavy rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-3 md:p-6 border-b border-teal/20">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl md:text-2xl font-poppins font-bold text-navy">
                                    {selectedProject.title}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="text-slate hover:text-teal"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-3 md:p-6">
                            <div className="mb-4 md:mb-6">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                                />
                            </div>

                            <div className="mb-4 md:mb-6">
                                <h4 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">
                                    Project Overview
                                </h4>
                                <p className="text-slate text-sm md:text-base">
                                    {selectedProject.longDescription}
                                </p>
                            </div>

                            <div className="mb-4 md:mb-6">
                                <h4 className="text-base md:text-lg font-semibold text-navy mb-1 md:mb-2">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-teal/10 text-teal font-fira rounded text-xs md:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 md:px-6 md:py-2 bg-navy text-white font-medium rounded-md flex items-center justify-center md:justify-start transition hover:bg-navy/80 text-sm md:text-base"
                                >
                                    <FaGithub className="mr-2" /> GitHub Repo
                                </a>
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 md:px-6 md:py-2 border-2 border-navy text-navy font-medium rounded-md flex items-center justify-center md:justify-start transition hover:bg-navy/10 text-sm md:text-base"
                                >
                                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;