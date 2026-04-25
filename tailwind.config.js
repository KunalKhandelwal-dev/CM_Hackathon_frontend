/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4af37',
          dim: '#8a6f2e',
          dark: '#5c4a1e',
        },
        heist: {
          black: '#080808',
          dark: '#0f0d0b',
          card: '#161210',
          border: '#2a2218',
          red: '#cc1a1a',
          'red-dark': '#8b0000',
          cream: '#f0e6c8',
          'cream-dark': '#d9c9a0',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        mono: ['"Courier Prime"', 'Courier New', 'monospace'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        glitch: 'glitch 3s infinite',
        flicker: 'flicker 4s infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)', clipPath: 'inset(0 0 100% 0)' },
          '10%': { transform: 'translate(-2px, 1px)', clipPath: 'inset(10% 0 85% 0)' },
          '20%': { transform: 'translate(2px, -1px)', clipPath: 'inset(50% 0 30% 0)' },
          '30%': { transform: 'translate(0)', clipPath: 'inset(0 0 100% 0)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.6' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
