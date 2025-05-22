// components/Experience.jsx
import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('work');

    // Work Experience Data
    const workExperience = [
        {
            title: "Software Engineer",
            company: "Atos",
            location: "Pune, India",
            duration: "July 2023 - August 2024",
            logo: "/aniruddha-portfolio/images/atos-logo.jpeg",
            description: [
                "Engineered scalable RESTful APIs and microservices with Java (Spring Boot), enabling modular architecture and efficient service communication, resulting in a 30% improvement in maintainability and faster developer onboarding.",
                "Crafted high-performance, responsive user interfaces with React.js, connecting frontend to backend via Axios and managing state with Redux, cutting page load times by 25% and boosting user engagement.",
                "Adopted Test-Driven Development (TDD) with JUnit and conducted API testing using Postman, increasing test coverage and minimizing system-level issues during release cycles.",
                "Deployed applications to AWS (EC2, S3) through CI/CD pipelines, ensuring smooth and consistent delivery across development, staging, and production environments."
            ]
        },
        {
            title: "Machine Learning Intern",
            company: "Aiadventures LLP",
            location: "Pune, India",
            duration: "January 2023 - June 2023",
            logo: "/aniruddha-portfolio/images/ai-logo.png",
            description: [
                "Designed machine learning models in Scikit-learn and PyTorch to generate actionable insights, supporting advanced market segmentation and contributing to the expansion into two new customer demographics.",
                "Applied clustering and classification techniques to segment user behavior across 10+ key attributes, leveraging CNNs and tabular models to identify high-value customer cohorts and increase targeted campaign efficiency by 20%.",
                "Developed a text summarization pipeline powered by Hugging Face Transformers, automating customer feedback analysis, uncovering demographic trends, and reducing manual review time by 40%."
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
            logo: "/aniruddha-portfolio/images/northeastern-logo.png",
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
            logo: "/aniruddha-portfolio/images/sppu-logo.jpeg",
            description: [
                "Completed undergraduate studies with focus on both hardware and software aspects of technology systems.",
                "Coursework included Web Technology, Advanced Java, Computer Networks, Big Data Analysis, Data Structures, Data Science, Machine Learning, Artificial Intelligence, and Object-Oriented Programming."
            ]
        }
    ];

    return (
        <section id="experience" className="pt-6 pb-20 lg:pt-12 lg:pb-32 bg-cream">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy">
                            My Journey
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-lightNavy p-1 rounded-lg shadow-md flex">
                            <button
                                onClick={() => setActiveTab('work')}
                                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${activeTab === 'work'
                                    ? 'bg-teal/20 text-navy'
                                    : 'hover:bg-cream/70 text-slate'
                                    }`}
                            >
                                <FaBriefcase className="mr-2" />
                                <span className="font-medium">Work</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${activeTab === 'education'
                                    ? 'bg-teal/20 text-navy'
                                    : 'hover:bg-cream/70 text-slate'
                                    }`}
                            >
                                <FaGraduationCap className="mr-2" />
                                <span className="font-medium">Education</span>
                            </button>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        {activeTab === 'work' ? (
                            <div className="space-y-12">
                                {workExperience.map((exp, index) => (
                                    <div key={index} className="relative">
                                        {/* Timeline Line */}
                                        {index < workExperience.length - 1 && (
                                            <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-teal/30 z-0"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle */}
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 bg-cream border-2 border-teal rounded-full flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="ml-6 bg-lightNavy shadow-lg p-6 rounded-lg flex-1 z-10">
                                                {/* Header */}
                                                <div className="flex justify-between items-start mb-6">
                                                    {/* Left Side: Logo + Title Info */}
                                                    <div className="flex items-start">
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
                                                            {/* Title and Duration Row */}
                                                            <div className="flex justify-between items-center w-full">
                                                                <h3 className="text-xl font-semibold text-navy">
                                                                    {exp.title}
                                                                </h3>
                                                            </div>
                                                            
                                                            {/* Company Name */}
                                                            <h4 className="text-lg font-medium text-teal">
                                                                {exp.company}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    {/* Right Side: Duration and Location */}
                                                    <div className="text-right">
                                                        <div className="text-sm font-fira text-slate">
                                                            {exp.duration}
                                                        </div>
                                                        <div className="text-sm font-fira text-slate mt-1">
                                                            {exp.location}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Job Description */}
                                                <ul className="space-y-2">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex text-slate">
                                                            <span className="text-teal mr-2 flex-shrink-0">▹</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative">
                                        {/* Timeline Line */}
                                        {index < education.length - 1 && (
                                            <div className="absolute top-8 left-4 bottom-0 w-0.5 bg-teal/30 z-0"></div>
                                        )}

                                        <div className="flex">
                                            {/* Timeline Circle */}
                                            <div className="relative z-10">
                                                <div className="w-8 h-8 bg-cream border-2 border-teal rounded-full flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-teal rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="ml-6 bg-lightNavy shadow-lg p-6 rounded-lg flex-1 z-10">
                                                {/* Header */}
                                                <div className="flex justify-between items-start mb-6">
                                                    {/* Left Side: Logo + Institution Info */}
                                                    <div className="flex items-start">
                                                        {/* Logo */}
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
                                                            {/* Institution */}
                                                            <h3 className="text-xl font-semibold text-navy">
                                                                {edu.institution}
                                                            </h3>
                                                            
                                                            {/* Degree */}
                                                            <h4 className="text-lg font-medium text-teal">
                                                                {edu.degree}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    {/* Right Side: Duration and Location */}
                                                    <div className="text-right">
                                                        <div className="text-sm font-fira text-slate">
                                                            {edu.duration}
                                                        </div>
                                                        <div className="text-sm font-fira text-slate mt-1">
                                                            {edu.location}
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul className="space-y-2">
                                                    {edu.description.map((item, i) => (
                                                        <li key={i} className="flex text-slate">
                                                            <span className="text-teal mr-2 flex-shrink-0">▹</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
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