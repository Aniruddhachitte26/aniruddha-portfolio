// components/Contact.jsx
import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaResearchgate } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        setFormStatus(null);

        // Replace these with your actual EmailJS credentials
        // You'll need to sign up at https://www.emailjs.com/
        const serviceId = 'service_unmera8'; // Create a service in EmailJS and put the ID here
        const templateId = 'template_fy34rlu'; // Create a template in EmailJS and put the ID here
        const publicKey = '83anjhWhOn8gXV50C'; // Your EmailJS public key

        // Send the email
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setFormStatus('success');
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error.text);
                setFormStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    // Contact information - Location removed
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'aniruddhachitte06@gmail.com',
            link: 'mailto:aniruddhachitte06@gmail.com'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '(857) 544-6944',
            link: 'tel:+18575446944'
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
            value: 'github.com/Aniruddhachitte26',
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
        <section id="contact" className="pt-6 pb-12 md:pt-12 md:pb-20 bg-cream">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="flex items-center mb-6 md:mb-12">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-navy">
                            Get In Touch
                        </h2>
                        <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                        {/* Contact Form */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-navy mb-4 md:mb-6">
                                Send me a message
                            </h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs md:text-sm font-medium text-slate mb-1">
                                            Your Name
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-lightNavy border border-slate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy text-sm md:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs md:text-sm font-medium text-slate mb-1">
                                            Your Email
                                        </label>
                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-lightNavy border border-slate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy text-sm md:text-base"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-slate mb-1">
                                        Subject
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-lightNavy border border-slate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-slate mb-1">
                                        Message
                                    </label>
                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-lightNavy border border-slate/20 rounded-lg focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all text-navy resize-none text-sm md:text-base"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full px-4 py-2 md:px-6 md:py-3 bg-transparent border-2 border-teal text-teal font-medium rounded-lg transition-all flex items-center justify-center text-sm md:text-base
                                        ${isSubmitting ? 'opacity-70 cursor-wait bg-gray-300/50' : 'hover:bg-gray-300/50'}`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>

                                {formStatus === 'success' && (
                                    <div className="p-2 md:p-3 bg-green-100 text-green-800 rounded-md text-center text-xs md:text-sm">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {formStatus === 'error' && (
                                    <div className="p-2 md:p-3 bg-red-100 text-red-800 rounded-md text-center text-xs md:text-sm">
                                        There was an error sending your message. Please try again or contact me directly via email.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-navy mb-4 md:mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-3 md:space-y-6 mb-4 md:mb-8">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="text-lg md:text-xl text-teal mt-0.5 md:mt-1 mr-3 md:mr-4">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base md:text-lg font-medium text-navy">
                                                {info.label}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate hover:text-teal transition-colors text-xs md:text-base"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-slate text-xs md:text-base">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;