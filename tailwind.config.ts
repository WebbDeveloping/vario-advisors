import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from style guidelines
        "dark-navy": "#011E35",
        "blue": "#005EB8",
        "light-blue": "#BDDEFD",
        
        // Semantic brand color tokens
        brand: {
          DEFAULT: "#005EB8", // Primary brand blue
          dark: "#004A94", // Darker blue for hover states (approximately 20% darker)
          soft: "#BDDEFD", // Light blue for gradients and soft backgrounds
          on: "#FFFFFF", // White text/items on brand background
          "on-soft": "#F0F8FF", // Very light blue for soft brand backgrounds
        },
        
        // Surface colors (backgrounds)
        surface: {
          DEFAULT: "#FFFFFF", // White surface
          warm: "#FAFAFA", // Slightly warm white
        },
        
        // Text colors
        text: {
          DEFAULT: "#011E35", // Dark navy for primary text
          muted: "#6B7280", // Muted gray for secondary text
        },
        
        // Background colors
        bg: {
          DEFAULT: "#FFFFFF", // White background
        },
        
        // Border colors
        border: {
          DEFAULT: "#E5E7EB", // Light gray border
          card: "#F3F4F6", // Lighter border for cards
          strong: "#D1D5DB", // Stronger border
        },
        
        // Chip/badge colors
        "chip-blue": "#E0F2FE", // Light blue for chips/badges
        "chip-blue0": "#BAE6FD", // Slightly darker chip blue
        
        // Section colors
        "section-blue": "#E0F2FE", // Section background blue
        "section-warm": "#FAFAFA", // Warm section background
      },
      fontFamily: {
        baskerville: ["var(--font-baskerville)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

