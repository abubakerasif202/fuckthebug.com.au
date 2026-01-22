/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00f2ea',
        neonPurple: '#bd00ff',
        darkBg: '#020010',
        neonPink: '#ff00ff', // Added as fallback if used
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'border-pulse': 'borderPulse 2s infinite',
        'neon-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        borderPulse: {
          '0%, 100%': { borderColor: 'rgba(255, 255, 255, 0.1)' },
          '50%': { borderColor: 'rgba(189, 0, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
