// src/utils/AnimationObserver.js

/**
 * AnimationObserver - A utility for adding scroll-triggered animations
 * This utility uses Intersection Observer API to add animation classes
 * to elements when they become visible in the viewport
 */

class AnimationObserver {
  constructor() {
    this.observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    this.observer = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized || typeof window === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(this.handleIntersection, this.observerOptions);
    
    // Get all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Observe each element
    animatedElements.forEach(element => {
      // Hide element initially
      element.style.opacity = '0';
      this.observer.observe(element);
    });

    this.initialized = true;
  }

  handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.getAttribute('data-animate');
        const delay = element.getAttribute('data-delay') || 0;
        
        // Add animation class after specified delay
        setTimeout(() => {
          element.classList.add(animation);
          element.style.opacity = '1';
        }, delay);
        
        // Stop observing once the animation is triggered
        this.observer.unobserve(element);
      }
    });
  }

  refresh() {
    if (this.observer) {
      this.observer.disconnect();
      this.initialized = false;
      this.init();
    }
  }
}

export default new AnimationObserver();