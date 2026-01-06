import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			'dark-navy': '#011E35',
  			'blue': '#005EB8',
  			'light-blue': '#BDDEFD',
  			brand: {
  				DEFAULT: '#005EB8',
  				dark: '#004A94',
  				soft: '#BDDEFD',
  				on: '#FFFFFF',
  				'on-soft': '#F0F8FF'
  			},
  			surface: {
  				DEFAULT: '#FFFFFF',
  				warm: '#FAFAFA'
  			},
  			text: {
  				DEFAULT: '#011E35',
  				muted: '#6B7280'
  			},
  			bg: {
  				DEFAULT: '#FFFFFF'
  			},
  			'border-custom': {
  				DEFAULT: '#E5E7EB',
  				card: '#F3F4F6',
  				strong: '#D1D5DB'
  			},
  			'chip-blue': '#E0F2FE',
  			'chip-blue0': '#BAE6FD',
  			'section-blue': '#E0F2FE',
  			'section-warm': '#FAFAFA'
  		},
  		fontFamily: {
  			baskerville: [
  				'var(--font-baskerville)',
  				'serif'
  			],
  			poppins: [
  				'var(--font-poppins)',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
export default config;

