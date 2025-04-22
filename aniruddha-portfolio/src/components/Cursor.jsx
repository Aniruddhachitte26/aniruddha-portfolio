// components/Cursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        // Add hover effect for all links and buttons
        const handleLinkHoverEvents = () => {
            document.querySelectorAll('a, button, [role="button"]').forEach(el => {
                el.addEventListener('mouseenter', () => setLinkHovered(true));
                el.addEventListener('mouseleave', () => setLinkHovered(false));
            });
        };

        addEventListeners();
        handleLinkHoverEvents();

        // Check for mobile/tablet devices
        const isMobile = () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        // Hide cursor on mobile devices
        if (isMobile()) {
            setHidden(true);
        }

        return () => {
            removeEventListeners();
        };
    }, []);

    // Hide cursor when using the site with keyboard
    useEffect(() => {
        const handleKeyDown = () => {
            setHidden(true);

            // Show cursor again when mouse moves
            const handleMouseMove = () => {
                setHidden(false);
                window.removeEventListener('mousemove', handleMouseMove);
            };

            window.addEventListener('mousemove', handleMouseMove);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Custom cursor entirely removed as requested
    return null;
};

export default Cursor;