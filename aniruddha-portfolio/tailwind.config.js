// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Professional color scheme
        primary: "#000000",      // Black
        secondary: "#eeedeb",    // New lighter gray (provided)
        background: "#eeedeb",   // New lighter gray for background
        card: "#ffffff",         // White for cards (back to default)
        accent: "#333333",       // Dark gray for accents
        muted: "#555555",        // Medium gray for muted text
        
        // Theme colors
        navy: "#000000",         // Black
        cream: "#eeedeb",        // New lighter gray
        teal: "#333333",         // Dark gray
        lightNavy: "#ffffff",    // White for cards (back to default)
        slate: "#444444",        // Medium gray for text
        lightSlate: "#222222",   // Dark gray for text
        white: "#ffffff",        // White
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      boxShadow: {
        custom: "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        "custom-light": "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }], // For extremely small text on mobile
      },
      spacing: {
        '0.75': '0.1875rem', // For very tiny gaps
        '1.25': '0.3125rem', // For small gaps
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};