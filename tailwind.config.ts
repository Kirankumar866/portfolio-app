import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: '#0a0a0a', // Deep dark background
        surface: '#171717', // Slightly lighter for cards
        primary: '#facc15', // Amber/Yellow
        secondary: '#a3a3a3', // Soft Gray
        accent1: '#fbbf24', // Lighter Amber
        accent2: '#d97706', // Darker Amber
        content: '#ffffff',
        'content-muted': '#a3a3a3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(250, 204, 21, 0.1) 0%, transparent 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Body font
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Poppins', 'sans-serif'], // Heading font
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
