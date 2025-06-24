// components/Achievements.jsx
import React, { useState, useEffect } from 'react';
import { FaBook, FaStar, FaTrophy, FaMedal, FaArrowRight, FaCertificate, FaAward, FaUserGraduate, FaQuoteRight, FaEye, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Achievements = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    // Actual ResearchGate metrics from your screenshots
    const researchMetrics = {
        publications: 3,
        citations: 13,
        interestScore: 12.1,
        reads: 956,
        percentile: "higher than 30% of ResearchGate members",
        datePercentile: "higher than 74% of members who published in 2023"
    };

    // Research papers data from your screenshots
    const researchPapers = [
        {
            title: "Machine Learning Approach in Melanoma Skin Cancer Stage Detection",
            type: "Conference Paper",
            date: "August 2023",
            reads: 138,
            citations: 2,
            authors: ["Aniruddha Chitte", "Mukund Nale", "Aniket Pawar"],
            highlight: "Most cited in the last month",
            link: "#"
        },
        {
            title: "Bluetooth-based Attendance Management App",
            type: "Article",
            date: "July 2023",
            reads: 461,
            citations: 0,
            authors: ["Sangam Dange", "Aniruddha Chitte"],
            highlight: "Most read in the last month",
            link: "#"
        },
        {
            title: "LIVE YOGA POSE DETECTION BY USING IMAGE PROCESSING AND DEEP LEARNING",
            type: "Article",
            date: "June 2023",
            reads: 357,
            citations: 1,
            authors: ["Aditi Vedalankar", "Mukund Nale", "Kunal Kaple", "Aniruddha Chitte"],
            highlight: "",
            link: "#"
        }
    ];

    // Certificate data
    const certifications = [

        {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "May 2025",
            logo: "/aniruddha-portfolio/images/certifications/aws-logo.webp", // Update with correct path
            credential: "#", // Replace with your actual credential link
            skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Cloud Security"]
        },
        {
            name: "Introduction to Cybersecurity",
            issuer: "Cisco",
            date: "Feb 2021",
            logo: "/aniruddha-portfolio/images/certifications/cisco-logo.jpg", // Update with correct path
            credential: "https://www.credly.com/badges/6110a2cc-5d68-48d5-b8a5-a9da9940ae02/linked_in_profile",
            skills: ["Network Security", "Cybersecurity Fundamentals", "Threat Detection"]
        },
        {
            name: "Microsoft AI Classroom Series",
            issuer: "Microsoft",
            date: "Feb 2021",
            logo: "/aniruddha-portfolio/images/certifications/microsoft-logo.jpg", // Update with correct path
            credential: "https://drive.google.com/file/d/1IoQtg19L2LVNDyf6Lm4OAAXwS2WBZBnr/view",
            skills: ["Artificial Intelligence", "Machine Learning", "Data Analysis"]
        },
        // Add more certifications as needed
    ];

    // Track if element is in view for animation
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("achievements");
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible && !isInView) {
                setIsInView(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on initial load

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isInView]);

    return (
        <section id="achievements" className="py-8 md:pt-6 md:pb-20 lg:pt-12 lg:pb-32 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-4 md:mb-12">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy">
                            Achievements
                        </h2>
                        <div className="ml-3 md:ml-4 h-px bg-teal flex-grow max-w-[150px] md:max-w-xs"></div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"
                    >
                        {/* Research Section FIRST */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-lightNavy rounded-lg p-4 md:p-6 shadow-lg flex flex-col h-full"
                        >
                            <div className="flex items-center mb-3 md:mb-6">
                                <div className="text-base md:text-2xl text-teal mr-2 md:mr-3">
                                    <FaBook style={{ color: "blue" }}/>
                                </div>
                                <h3 className="text-base md:text-2xl font-semibold text-navy">
                                    Research Contributions
                                </h3>
                            </div>

                            <div className="flex-grow">
                                {/* Research Metrics */}
                                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-6">
                                    <motion.div
                                        className="bg-cream/70 rounded-lg p-2 md:p-3 text-center"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-xl md:text-3xl font-bold text-navy">{researchMetrics.interestScore}</div>
                                        <div className="text-xxs md:text-xs text-slate">Research Score</div>
                                    </motion.div>
                                    <motion.div
                                        className="bg-cream/70 rounded-lg p-2 md:p-3 text-center"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-xl md:text-3xl font-bold text-navy">{researchMetrics.publications}</div>
                                        <div className="text-xxs md:text-xs text-slate">Publications</div>
                                    </motion.div>
                                    <motion.div
                                        className="bg-cream/70 rounded-lg p-2 md:p-3 text-center"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-xl md:text-3xl font-bold text-navy">{researchMetrics.citations}</div>
                                        <div className="text-xxs md:text-xs text-slate">Citations</div>
                                    </motion.div>
                                    <motion.div
                                        className="bg-cream/70 rounded-lg p-2 md:p-3 text-center"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="text-xl md:text-3xl font-bold text-navy">{researchMetrics.reads}</div>
                                        <div className="text-xxs md:text-xs text-slate">Total Reads</div>
                                    </motion.div>
                                </div>

                                {/* Percentile Statistics */}
                                <div className="bg-cream/30 rounded-lg p-2 md:p-3 mb-3 md:mb-4">
                                    <div className="flex items-center mb-1 md:mb-2">
                                        <FaChartLine className="text-teal mr-1 md:mr-2 text-xs md:text-base" />
                                        <h4 className="text-xs md:text-sm font-medium text-navy">Performance</h4>
                                    </div>
                                    <ul className="space-y-1 md:space-y-2 text-xxs md:text-xs text-slate">
                                        <li className="flex items-start">
                                            <span className="text-teal mr-1 mt-0.5">▹</span>
                                            <span>Research interest score is {researchMetrics.percentile}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-teal mr-1 mt-0.5">▹</span>
                                            <span>Score is {researchMetrics.datePercentile}</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Top Research Paper Only (to match height) */}
                                <div className="space-y-2 md:space-y-4">
                                    <h4 className="text-sm md:text-lg font-medium text-navy mb-1 md:mb-2">Featured Research</h4>

                                    <motion.div
                                        className="bg-cream/30 rounded-lg p-3 md:p-4"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="mb-1 text-xxs md:text-xs text-teal font-medium flex items-center">
                                            <FaStar className="text-yellow-500 mr-1 text-xs md:text-base" />
                                            {researchPapers[0].highlight}
                                        </div>
                                        <h5 className="font-medium text-navy mb-1 text-xs md:text-base leading-tight">{researchPapers[0].title}</h5>
                                        <div className="flex items-center text-xxs md:text-xs text-slate mb-1 md:mb-2">
                                            <span className="px-1.5 py-0.5 md:px-2 md:py-0.5 bg-teal/10 text-teal rounded-md mr-1 md:mr-2">{researchPapers[0].type}</span>
                                            <span>{researchPapers[0].date}</span>
                                        </div>
                                        <div className="flex flex-wrap items-center text-xxs md:text-xs text-slate gap-2 md:gap-3">
                                            <div className="flex items-center">
                                                <FaEye className="text-teal mr-1 text-xs md:text-base" />
                                                <span>{researchPapers[0].reads} Reads</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaQuoteRight className="text-teal mr-1 text-xs md:text-base" />
                                                <span>{researchPapers[0].citations} {researchPapers[0].citations === 1 ? 'Citation' : 'Citations'}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* View Profile Button with animation */}
                            <motion.div
                                className="mt-3 md:mt-6 text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="https://www.researchgate.net/profile/Aniruddha-Chitte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 bg-teal/10 text-teal text-xs md:text-sm rounded-md hover:bg-teal/20 transition-colors"
                                >
                                    <FaBook className="mr-1 md:mr-2 text-xs md:text-base" />
                                    View ResearchGate Profile
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Certifications Section SECOND */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-lightNavy rounded-lg p-4 md:p-6 shadow-lg flex flex-col h-full"
                        >
                            <div className="flex items-center mb-3 md:mb-6">
                                <div className="text-base md:text-2xl mr-2 md:mr-3">
                                    <FaCertificate style={{ color: "#FF9800" }} />
                                </div>
                                <h3 className="text-base md:text-2xl font-semibold text-navy">
                                    Licenses & Certifications
                                </h3>
                            </div>

                            {/* Certifications List */}
                            <div className="space-y-3 md:space-y-6 flex-grow">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-cream/30 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
                                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                    >
                                        <div className="flex items-center mb-1.5 md:mb-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full overflow-hidden mr-2 md:mr-3 flex-shrink-0 flex items-center justify-center">
                                                {cert.logo ? (
                                                    <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                                                ) : (
                                                    <FaAward className="text-teal text-sm md:text-base" />
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-navy text-xs md:text-base leading-tight">{cert.name}</h4>
                                                <p className="text-xxs md:text-xs text-slate">{cert.issuer} • Issued {cert.date}</p>
                                            </div>
                                        </div>

                                        <div className="mt-1.5 md:mt-2">
                                            <div className="flex flex-wrap gap-1">
                                                {cert.skills.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-teal/10 text-teal text-xxs md:text-xs rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {cert.skills.length > 3 && (
                                                    <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 bg-teal/10 text-teal text-xxs md:text-xs rounded-full md:hidden">
                                                        +{cert.skills.length - 3}
                                                    </span>
                                                )}
                                                {cert.skills.slice(3).map((skill, i) => (
                                                    <span key={i + 3} className="hidden md:inline-block px-2 py-1 bg-teal/10 text-teal text-xs rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-2 md:mt-3">
                                            <a
                                                href={cert.credential}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-xxs md:text-xs text-teal hover:underline"
                                            >
                                                Show credential
                                                <FaArrowRight className="ml-1 text-xxs" />
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Add Certification Button - animated */}
                            <motion.div
                                className="mt-3 md:mt-6 text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href="https://www.linkedin.com/in/aniruddhachitte/details/certifications/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-3 py-1.5 md:px-4 md:py-2 bg-teal/10 text-teal text-xs md:text-sm rounded-md hover:bg-teal/20 transition-colors"
                                >
                                    <FaUserGraduate className="mr-1 md:mr-2 text-xs md:text-base" />
                                    View All Certifications
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;