// tailwind.config.js
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
	  extend: {
		colors: {
		  // Light mode colors (simplified)
		  primary: "rgb(225, 204, 190)",           // Blue as primary color
		  secondary: "#000000",         // Black for text
		  background: "#ffffff",        // White background
		  card: "#ffffff",              // Very light gray for cards
		  accent: "#3b82f6",            // Light blue for accents
		  muted: "rgb(225, 204, 190)",             // Muted text color
		  
		  // Original colors - maintained for dark mode
		  navy: "#0a192f",
		  cream: "#f5f0e1",
		  teal: "#64ffda",
		  lightNavy: "#112240",
		  slate: "#8892b0",
		  lightSlate: "#a8b2d1",
		  white: "#e6f1ff",
		},
		fontFamily: {
		  poppins: ["Poppins", "sans-serif"],
		  inter: ["Inter", "sans-serif"],
		  fira: ["Fira Code", "monospace"],
		},
		animation: {
		  "spin-slow": "spin 8s linear infinite",
		  float: "float 3s ease-in-out infinite",
		  slideUpFade: "slideUpFade 0.5s ease-out forwards",
		},
		keyframes: {
		  float: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-10px)" },
		  },
		  slideUpFade: {
			"0%": { opacity: "0", transform: "translateY(20px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		  },
		},
		boxShadow: {
		  custom: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
		  "custom-light": "0 10px 30px -10px rgba(2, 12, 27, 0.3)",
		},
	  },
	},
	plugins: [],
  };