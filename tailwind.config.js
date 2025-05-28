import { defineConfig } from 'tailwindcss/helpers'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0288D1', // Accent Blue
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        tick: {
          '0%': { strokeDashoffset: '22' },
          '100%': { strokeDashoffset: '0' },
        },
        pop: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
         slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wave1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wave2: {
          '0%': { transform: 'translateY(0%) translateX(0%)' },
          '100%': { transform: 'translateY(-200%) translateX(50%)' },
        },
        wave3: {
          '0%': { transform: 'translateX(-50%) scaleX(1)' },
          '50%': { transform: 'translateX(0%) scaleX(1.2)' },
          '100%': { transform: 'translateX(50%) scaleX(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease forwards',
        tick: 'tick 0.6s ease forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.7s ease-out forwards',
        pop: 'pop 0.4s ease-out forwards',
        'slideUp-delay': 'slideUp 0.7s ease-out 0.2s forwards',
        'pop-delay': 'pop 0.4s ease-out 0.3s forwards',
        wave1: 'wave1 10s linear infinite',
        wave2: 'wave2 12s ease-in-out infinite',
        wave3: 'wave3 14s ease-in-out infinite',
      },
    },
  },
});
