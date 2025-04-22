// components/ImageGallery.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageGallery = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
  });

  // Pause animation when lightbox is open
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    // Set pause state based on lightbox open state
    setIsPaused(lightbox.isOpen);
  }, [lightbox.isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Gallery images - showing personal and career journey
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/img6.jpeg",
      alt: "Graduation Day - Savitribai Phule Pune University",
      title: "Graduation Day 2023",
      description:
        "Celebrating the completion of my Bachelor's degree in Electronics and Telecommunication Engineering with my classmates at Savitribai Phule Pune University.",
    },
    {
      id: 2,
      src: "/images/gallery/img4.png",
      alt: "Northeastern University Campus",
      title: "Northeastern University Journey Begins",
      description:
        "Starting my Master's in Computer Software Engineering at Northeastern University in Boston, MA in September 2024.",
    },
    {
      id: 3,
      src: "/images/gallery/img1.jpeg",
      alt: "Team photo With Professor and colleagues",
      title: "Northeastern University",
      description:
        "Database Mangement & Database Design Final project with Professor and colleagues at Northwestern University, where I learned about data modeling and SQL.",
    },

    {
      id: 4,
      src: "/images/gallery/img2.jpeg",
      alt: "Northeastern University Campus",
      title: "Northeastern University Journey Begins",
      description:
        "Starting my Master's in Computer Software Engineering at Northeastern University in Boston, MA in September 2024.",
    },
    {
      id: 7,
      src: "/images/gallery/img5.png",
      alt: "Boston City Exploration",
      title: "Exploring Boston",
      description:
        "Discovering my new home in Boston as I begin the next chapter of my academic journey at Northeastern University.",
    },
  ];

  // Open lightbox with selected image
  const openLightbox = (image) => {
    setLightbox({
      isOpen: true,
      currentImage: image,
    });
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false,
    });
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === lightbox.currentImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setLightbox({
      ...lightbox,
      currentImage: galleryImages[nextIndex],
    });
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === lightbox.currentImage.id
    );
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightbox({
      ...lightbox,
      currentImage: galleryImages[prevIndex],
    });
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-cream dark:bg-navy">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Title */}
          <motion.div
            className="flex items-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy dark:text-white">
              My Journey
            </h2>
            <div className="ml-4 h-px bg-teal flex-grow max-w-xs"></div>
          </motion.div>

          {/* Gallery Description */}
          <motion.p
            className="text-lg text-slate dark:text-lightSlate mb-10 max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            A visual timeline of my academic achievements, professional
            experiences, and memorable moments throughout my journey in software
            engineering and data science.
          </motion.p>

          {/* Gallery Slider */}
          <motion.div
            className="w-full overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="flex"
              animate={
                !isPaused
                  ? {
                      x: [-20, -1920],
                      transition: {
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 30,
                          ease: "linear",
                        },
                      },
                    }
                  : { x: 0 }
              }
            >
              {/* First set of images */}
              {galleryImages.map((image) => (
                <div
                  key={`first-${image.id}`}
                  className="min-w-[320px] h-[240px] m-2 rounded-lg overflow-hidden shadow-lg flex-shrink-0 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless looping */}
              {galleryImages.map((image) => (
                <div
                  key={`second-${image.id}`}
                  className="min-w-[320px] h-[240px] m-2 rounded-lg overflow-hidden shadow-lg flex-shrink-0 cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox.isOpen && lightbox.currentImage && (
              <motion.div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl hover:text-teal transition-colors"
                  onClick={closeLightbox}
                >
                  <FaTimes />
                </button>

                {/* Navigation buttons */}
                <button
                  className="absolute left-4 text-white text-3xl hover:text-teal transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="absolute right-4 text-white text-3xl hover:text-teal transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <FaChevronRight />
                </button>

                {/* Lightbox content */}
                <motion.div
                  className="max-w-5xl w-full bg-transparent rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="flex-1 bg-black rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                      <img
                        src={lightbox.currentImage.src}
                        alt={lightbox.currentImage.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Image details */}
                    <div className="md:w-1/3 p-6 bg-white dark:bg-lightNavy rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                      <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
                        {lightbox.currentImage.title}
                      </h3>
                      <p className="text-slate dark:text-lightSlate mb-4">
                        {lightbox.currentImage.description}
                      </p>
                      <div className="text-sm text-slate/70 dark:text-lightSlate/70">
                        Image{" "}
                        {galleryImages.findIndex(
                          (img) => img.id === lightbox.currentImage.id
                        ) + 1}{" "}
                        of {galleryImages.length}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
