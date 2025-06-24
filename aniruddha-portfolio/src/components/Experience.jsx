// components/Experience.jsx
import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('work');
    const [expandedItems, setExpandedItems] = useState({});
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile on component mount and when window resizes
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Check on mount
        checkMobile();
        
        // Add resize listener
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Toggle expansion for a specific item
    const toggleExpand = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Handle hover entry - only on desktop
    const handleMouseEnter = (index) => {
        if (!isMobile) {
            setHoveredItem(index);
        }
    };

    // Handle hover exit - only on desktop
    const handleMouseLeave = () => {
        if (!isMobile) {
            setHoveredItem(null);
        }
    };

    // Touch start handler for mobile
    const handleTouchStart = (index) => {
        if (isMobile) {
            // If already expanded by touch, don't do anything (let the click handler handle it)
            if (expandedItems[index]) return;
            
            // Expand the item on touch
            setHoveredItem(index);
        }
    };

    // Touch end handler for mobile
    const handleTouchEnd = () => {
        if (isMobile) {
            // Keep the item expanded briefly to allow for tap/click, then collapse
            setTimeout(() => {
                setHoveredItem(null);
            }, 300);
        }
    };

    // Check if an item is expanded (either by click, hover, or touch)
    const isItemExpanded = (index) => {
        return expandedItems[index] || hoveredItem === index;
    };

    // For animation on scroll
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('experience');
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

    // Work Experience Data with narrative paragraphs instead of bullet points
    const workExperience = [
        {
            title: "Software Engineer",
            company: "Atos",
            location: "Pune, India",
            duration: "July 2023 - August 2024",
            logo: "/aniruddha-portfolio/images/atos-logo.jpeg",
            description: "As a Software Engineer at Atos, I led the development of a comprehensive employee portal that streamlined internal operations. I architected and built 15+ RESTful APIs and microservices using Spring Boot and PostgreSQL, focusing on performance optimization that reduced new-hire onboarding time by nearly 40%. My frontend work with React.js and TypeScript delivered a responsive and intuitive user interface, connected to backend services via Axios with Redux for state management. This improved user engagement significantly while cutting page load times by 26%.\n\nI championed Test-Driven Development practices, implementing unit and regression test suites with JUnit that validated the stability of all backend services. My work extended to DevOps, where I containerized applications using Docker and deployed them on AWS EC2 with Kubernetes. By optimizing Jenkins CI/CD pipelines with parallel builds and lightweight Docker images, I reduced deployment time from 25 minutes to under 8 minutes, allowing for more frequent and reliable releases."
        },
        {
            title: "Software Engineer Intern",
            company: "Aiadventures LLP",
            location: "Pune, India",
            duration: "January 2023 - June 2023",
            logo: "/aniruddha-portfolio/images/ai-logo.png",
            description: "During my internship at Aiadventures LLP, I immersed myself in machine learning and data engineering, developing sophisticated workflows that transformed business operations. Using PyTorch, SQLAlchemy, and PostgreSQL, I built systems to analyze over 90,000 customer interactions and two years of sales data. This deep analysis enabled client teams to identify and successfully pursue two new service opportunities, directly contributing to business growth.\n\nI also designed and implemented a transformer-based text summarization service using FastAPI, Docker, and Redis. This tool automated the review process for thousands of customer support tickets and feedback forms each quarter, saving internal operations teams approximately 10 hours per week. One of my key contributions was building asynchronous data pipelines with Celery and RabbitMQ to process daily campaign analytics and run batch model predictions. Throughout the internship, I coordinated with cross-functional teams using Jira to improve model accuracy and ensure all deliverables met business objectives."
        },
        {
            title: "Student Intern",
            company: "CodeQuotient",
            location: "Remote",
            duration: "January 2022 - May 2022",
            logo: "/aniruddha-portfolio/images/cq-logo.jpeg",
            description: "At CodeQuotient, I was selected through their competitive Super Coders program, which recognized promising students with strong programming potential. This internship provided me with intensive training in full-stack development principles, object-oriented programming concepts, and advanced data structures and algorithms. I developed multiple web applications using JavaScript and Node.js, applying theoretical knowledge to solve complex programming challenges in real-world scenarios.\n\nWorking in a collaborative remote environment, I partnered with peers on software development projects that emphasized code optimization and best practices. I gained valuable experience in understanding software architecture principles, writing clean and maintainable code, and implementing efficient algorithms. This experience laid the foundation for my approach to software development, emphasizing both technical excellence and practical problem-solving."
        },
        {
            title: "Project Intern",
            company: "Zensar Technologies",
            location: "Pune, India",
            duration: "September 2021 - December 2021",
            logo: "/aniruddha-portfolio/images/zensar-logo.jpg",
            description: "My first professional experience at Zensar Technologies introduced me to formal software development methodologies in an enterprise setting. I participated in the complete software development lifecycle using Agile methodologies, where I assisted in requirements gathering sessions and sprint planning meetings for web application projects. This gave me insight into how large-scale projects are managed and executed in a professional environment.\n\nI contributed to front-end development using HTML, CSS, and JavaScript, implementing responsive design principles that improved user interface components across different screen sizes. The internship also provided hands-on experience with version control using Git, where I learned branching strategies, collaborative coding practices, and code review processes. Working alongside experienced developers helped me understand industry-standard coding practices and set the foundation for my software engineering career."
        }
    ];

    // Education Data
    const education = [
        {
            institution: "Northeastern University",
            degree: "Master of Science in Computer Software Engineering",
            location: "Boston, MA",
            duration: "September 2024 - May 2026",
            logo: "/aniruddha-portfolio/images/northeastern-logo.png",
            description: [
                "Currently pursuing advanced studies in software engineering with GPA: 3.6",
                "Coursework includes Analysis of Algorithms, Web Technology, Cloud Computing, Software Design, Database Management and Database Design."
            ]
        },
        {
            institution: "Savitribai Phule Pune University",
            degree: "Bachelor of Technology in Electronics and Telecommunication",
            location: "Maharashtra, India",
            duration: "August 2019 - June 2023",
            logo: "/aniruddha-portfolio/images/sppu-logo.jpeg",
            description: [
                "Completed undergraduate studies in electronics and telecommunication engineering.",
                "Coursework included Data Structures, Operating Systems, Computer Networks, Object-oriented Design, Distributed Systems."
            ]
        }
    ];

    return (
        <section id="experience" className="pt-6 pb-20 lg:pt-12 lg:pb-32 bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-6 md:mb-12">
                        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            My Journey
                        </h2>
                        <div className={`ml-4 h-px bg-teal flex-grow max-w-xs transform transition-all duration-700 delay-300 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transformOrigin: 'left' }}></div>
                    </div>

                    {/* Tabs */}
                    <div className={`flex justify-center mb-6 md:mb-10 transform transition-all duration-500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="bg-lightNavy p-1 rounded-lg shadow-md flex">
                            <button
                                onClick={() => setActiveTab('work')}
                                className={`flex items-center px-3 py-1 md:px-4 md:py-2 rounded-md transition-all duration-300 text-sm md:text-base ${
                                    activeTab === 'work'
                                        ? 'bg-teal/20 text-navy'
                                        : 'hover:bg-cream/70 text-slate'
                                }`}
                            >
                                <FaBriefcase className="mr-1 md:mr-2" />
                                <span className="font-medium">Work</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`flex items-center px-3 py-1 md:px-4 md:py-2 rounded-md transition-all duration-300 text-sm md:text-base ${
                                    activeTab === 'education'
                                        ? 'bg-teal/20 text-navy'
                                        : 'hover:bg-cream/70 text-slate'
                                }`}
                            >
                                <FaGraduationCap className="mr-1 md:mr-2" />
                                <span className="font-medium">Education</span>
                            </button>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {activeTab === 'work' ? (
                            <div className="space-y-6 md:space-y-8">
                                {workExperience.map((exp, index) => (
                                    <div 
                                        key={index} 
                                        className="relative mb-6 md:mb-8"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        onTouchStart={() => handleTouchStart(index)}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        {/* Timeline Connecting Line - Hidden on mobile */}
                                        {index < workExperience.length - 1 && (
                                            <div className="absolute left-2 md:left-2.5 top-6 bottom-0 w-px bg-teal/30 hidden md:block"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle - Hidden on mobile */}
                                            <div className="relative z-10 mr-2 md:mr-4 hidden md:block">
                                                <div className="w-4 h-4 md:w-5 md:h-5 bg-cream border border-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                    <div className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse"></div>
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div 
                                                className={`bg-lightNavy shadow-lg rounded-lg flex-1 z-10 overflow-hidden transform transition-all duration-500 ${isItemExpanded(index) ? 'shadow-xl ring-1 ring-teal/30' : 'hover:shadow-lg'}`}
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                                data-aos-duration="800"
                                                data-aos-once="true"
                                            >
                                                {/* Clickable Header */}
                                                <div 
                                                    className={`p-3 md:p-6 cursor-pointer flex flex-col md:flex-row md:justify-between md:items-start border-b border-slate/10 transition-colors ${isItemExpanded(index) ? 'bg-teal/5' : 'hover:bg-teal/5'}`}
                                                    onClick={() => toggleExpand(index)}
                                                >
                                                    {/* Left Side: Logo + Title Info */}
                                                    <div className="flex items-start">
                                                        {/* Company Logo */}
                                                        {exp.logo && (
                                                            <div className="mr-3 md:mr-4 w-10 h-10 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-full p-1 shadow-sm overflow-hidden">
                                                                <img 
                                                                    src={exp.logo} 
                                                                    alt={`${exp.company} logo`} 
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        )}
                                                        
                                                        <div className="flex-1 min-w-0">
                                                            {/* Title */}
                                                            <h3 className="text-lg md:text-xl font-semibold text-navy truncate">
                                                                {exp.title}
                                                            </h3>
                                                            
                                                            {/* Company Name */}
                                                            <h4 className="text-base md:text-lg font-medium text-teal truncate">
                                                                {exp.company}
                                                            </h4>
                                                            
                                                            {/* Mobile only: Duration and Location */}
                                                            <div className="md:hidden mt-1 text-xs">
                                                                <div className="font-fira text-slate/80 font-medium">
                                                                    {exp.duration}
                                                                </div>
                                                                <div className="font-fira text-slate/80 text-xs">
                                                                    {exp.location}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-end mt-2 md:mt-0">
                                                        {/* Right Side: Duration and Location - Desktop only */}
                                                        <div className="hidden md:block text-right text-sm">
                                                            <div className="font-fira text-slate/80 font-medium">
                                                                {exp.duration}
                                                            </div>
                                                            <div className="font-fira text-slate/80 mt-0.5 text-xs">
                                                                {exp.location}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Expand/Collapse Icon with Animation */}
                                                        <div className="ml-3 md:ml-6 text-teal transition-transform duration-300">
                                                            {isItemExpanded(index) ? 
                                                                <FaChevronUp size={16} className="animate-bounce" /> : 
                                                                <FaChevronDown size={16} className="animate-pulse" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Expandable Description - Now as paragraphs instead of bullet points */}
                                                <div 
                                                    className={`transition-all duration-500 overflow-hidden ${
                                                        isItemExpanded(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                                >
                                                    <div className="p-3 md:p-6 pt-2 md:pt-4">
                                                        <div 
                                                            className="text-slate text-xs md:text-sm leading-relaxed transform transition-all duration-300" 
                                                            style={{ 
                                                                opacity: isItemExpanded(index) ? 1 : 0,
                                                                transform: isItemExpanded(index) ? 'translateY(0)' : 'translateY(20px)'
                                                            }}
                                                        >
                                                            {exp.description.split('\n\n').map((paragraph, i) => (
                                                                <p key={i} className="mb-3">
                                                                    {paragraph}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6 md:space-y-8">
                                {education.map((edu, index) => (
                                    <div 
                                        key={index} 
                                        className="relative mb-6 md:mb-8"
                                        onMouseEnter={() => handleMouseEnter(`edu-${index}`)}
                                        onMouseLeave={handleMouseLeave}
                                        onTouchStart={() => handleTouchStart(`edu-${index}`)}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        {/* Timeline Connecting Line - Hidden on mobile */}
                                        {index < education.length - 1 && (
                                            <div className="absolute left-2 md:left-2.5 top-6 bottom-0 w-px bg-teal/30 hidden md:block"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle - Hidden on mobile */}
                                            <div className="relative z-10 mr-2 md:mr-4 hidden md:block">
                                                <div className="w-4 h-4 md:w-5 md:h-5 bg-cream border border-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                                    <div className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                            
                                            {/* Content Card */}
                                            <div 
                                                className={`bg-lightNavy shadow-lg rounded-lg flex-1 z-10 overflow-hidden transform transition-all duration-500 ${isItemExpanded(`edu-${index}`) ? 'shadow-xl ring-1 ring-teal/30' : 'hover:shadow-lg'}`}
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                                data-aos-duration="800"
                                                data-aos-once="true"
                                            >
                                                {/* Clickable Header */}
                                                <div 
                                                    className={`p-3 md:p-6 cursor-pointer flex flex-col md:flex-row md:justify-between md:items-start border-b border-slate/10 transition-colors ${isItemExpanded(`edu-${index}`) ? 'bg-teal/5' : 'hover:bg-teal/5'}`}
                                                    onClick={() => toggleExpand(`edu-${index}`)}
                                                >
                                                    {/* Left Side: Logo + Institution Info */}
                                                    <div className="flex items-start">
                                                        {/* Logo */}
                                                        {edu.logo && (
                                                            <div className="mr-3 md:mr-4 w-10 h-10 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-full p-1 shadow-sm overflow-hidden">
                                                                <img 
                                                                    src={edu.logo} 
                                                                    alt={`${edu.institution} logo`} 
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                        )}
                                                        
                                                        <div className="flex-1 min-w-0">
                                                            {/* Institution */}
                                                            <h3 className="text-lg md:text-xl font-semibold text-navy truncate">
                                                                {edu.institution}
                                                            </h3>
                                                            
                                                            {/* Degree */}
                                                            <h4 className="text-base md:text-lg font-medium text-teal truncate">
                                                                {edu.degree}
                                                            </h4>
                                                            
                                                            {/* Mobile only: Duration and Location */}
                                                            <div className="md:hidden mt-1 text-xs">
                                                                <div className="font-fira text-slate/80 font-medium">
                                                                    {edu.duration}
                                                                </div>
                                                                <div className="font-fira text-slate/80 text-xs">
                                                                    {edu.location}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-end mt-2 md:mt-0">
                                                        {/* Right Side: Duration and Location - Desktop only */}
                                                        <div className="hidden md:block text-right text-sm">
                                                            <div className="font-fira text-slate/80 font-medium">
                                                                {edu.duration}
                                                            </div>
                                                            <div className="font-fira text-slate/80 mt-0.5 text-xs">
                                                                {edu.location}
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Expand/Collapse Icon with Animation */}
                                                        <div className="ml-3 md:ml-6 text-teal transition-transform duration-300">
                                                            {isItemExpanded(`edu-${index}`) ? 
                                                                <FaChevronUp size={16} className="animate-bounce" /> : 
                                                                <FaChevronDown size={16} className="animate-pulse" />
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Expandable Description - Keeping bullets for education */}
                                                <div 
                                                    className={`transition-all duration-500 overflow-hidden ${
                                                        isItemExpanded(`edu-${index}`) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                                >
                                                    <ul className="space-y-1 md:space-y-2 text-xs md:text-base p-3 md:p-6 pt-2 md:pt-4">
                                                        {edu.description.map((item, i) => (
                                                            <li key={i} className="flex text-slate transform transition-all duration-300" 
                                                                style={{ 
                                                                    transitionDelay: `${i * 100}ms`,
                                                                    opacity: isItemExpanded(`edu-${index}`) ? 1 : 0,
                                                                    transform: isItemExpanded(`edu-${index}`) ? 'translateX(0)' : 'translateX(-20px)'
                                                                }}>
                                                                <span className="text-teal mr-1 md:mr-2 flex-shrink-0">▹</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;