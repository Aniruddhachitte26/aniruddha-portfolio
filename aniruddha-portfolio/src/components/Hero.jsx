// components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Hero = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);

    // Three.js animation
    useEffect(() => {
        if (!containerRef.current) return;

        // Setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Only append if the container is empty
        if (containerRef.current.childElementCount === 0) {
            containerRef.current.appendChild(renderer.domElement);
        }

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x64ffda,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            particlesMesh.rotation.x += 0.0003;
            particlesMesh.rotation.y += 0.0005;

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    // Dynamic text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
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

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Three.js Background */}
            <div ref={containerRef} className="absolute inset-0 z-0" />

            {/* Content */}
            <div className="container mx-auto px-6 z-10">
                <motion.div
                    className="max-w-4xl ml-8 md:ml-16 lg:ml-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="font-fira text-teal mb-4">
                        Hi, my name is
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-poppins font-bold text-white mb-2">
                        Aniruddha Chitte.
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-poppins font-medium text-lightSlate mb-6">
                        I am a software engineer and AI/ML enthusiast.
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-lg text-lightSlate mb-8 max-w-3xl">
                        I build intelligent systems through full-stack development, cloud architecture,
                        AI/ML, and data analytics. With a focus on scalable solutions, I transform
                        complex problems into innovative applications that deliver real-world impact.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8">
                        <motion.button
                            className="border-2 border-teal text-teal px-6 py-3 rounded-md font-fira hover:bg-teal/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    window.scrollTo({
                                        top: element.offsetTop - 80,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        >
                            Explore my work
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5
                }}
            >
                <div className="w-8 h-12 rounded-full border-2 border-teal flex justify-center pt-2">
                    <div className="w-1 h-3 bg-teal rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;