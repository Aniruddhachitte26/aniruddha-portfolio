// components/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaResearchgate } from 'react-icons/fa';

const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Handle form input changes
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus('success');

            // Reset form
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset status after 5 seconds
            setTimeout(() => setFormStatus(null), 5000);
        }, 2000);
    };

    // Contact information
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'aniruddhachitte2001@gmail.com',
            link: 'mailto:aniruddhachitte2001@gmail.com'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '(857) 544-6944',
            link: 'tel:+18575446944'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Boston, MA',
            link: null
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/aniruddhachitte',
            link: 'https://www.linkedin.com/in/aniruddhachitte'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/aniruddhachitte',
            link: 'https://github.com/Aniruddhachitte26'
        },
        {
            icon: <FaResearchgate />,
            label: 'ResearchGate',
            value: 'researchgate.net/profile/Aniruddha-Chitte',
            link: 'https://www.researchgate.net/profile/Aniruddha-Chitte'
        }
    ];

    return (
        <section id="contact" className="py-20 lg:py-32 bg-cream dark:bg-navy relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
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
                            Get In Touch
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold text-navy dark:text-white mb-6">
                                Send me a message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate dark:text-lightSlate mb-1">
                                            Your Name
                                        </label>
                                        <motion.div
                                            whileFocus={{ scale: 1.01 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white dark:bg-lightNavy border border-slate/20 dark:border-lightSlate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy dark:text-white"
                                            />
                                        </motion.div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate dark:text-lightSlate mb-1">
                                            Your Email
                                        </label>
                                        <motion.div
                                            whileFocus={{ scale: 1.01 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white dark:bg-lightNavy border border-slate/20 dark:border-lightSlate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy dark:text-white"
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate dark:text-lightSlate mb-1">
                                        Subject
                                    </label>
                                    <motion.div
                                        whileFocus={{ scale: 1.01 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-lightNavy border border-slate/20 dark:border-lightSlate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy dark:text-white"
                                        />
                                    </motion.div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate dark:text-lightSlate mb-1">
                                        Message
                                    </label>
                                    <motion.div
                                        whileFocus={{ scale: 1.01 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-lightNavy border border-slate/20 dark:border-lightSlate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy dark:text-white resize-none"
                                        ></textarea>
                                    </motion.div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-6 py-3 bg-teal text-navy font-medium rounded-lg transition-all flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-teal/90'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </motion.div>

                                {formStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 bg-green-100 text-green-800 rounded-md text-center"
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold text-navy dark:text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="text-teal text-xl mt-1 mr-4">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-navy dark:text-white">
                                                {info.label}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate dark:text-lightSlate hover:text-teal dark:hover:text-teal transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate dark:text-lightSlate">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>


                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;