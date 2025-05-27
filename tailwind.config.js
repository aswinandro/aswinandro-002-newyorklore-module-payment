/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'light-streak': {
          '0%': { transform: 'translateX(-100%)', opacity: '0.1' },
          '50%': { transform: 'translateX(50%)', opacity: '0.4' },
          '100%': { transform: 'translateX(100%)', opacity: '0.1' },
        },
      },
      animation: {
        'light-streak': 'light-streak 6s linear infinite',
      },
    },
  },
  plugins: [],
}
