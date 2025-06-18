/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./partials/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#1a0202",
        darkMaroon: "#290008",
        gold: "#D4AF37"
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        inter: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: "0 0 12px rgba(212, 175, 55, 0.4)"
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '1' }
        },
        'fadein': {
          '0%': { opacity: '0.4', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'pulse-scale': 'pulse-scale 2.5s ease-in-out infinite',
        'fadein-loop': 'fadein 4s ease-in-out infinite alternate',
        'spin-slow': 'spin-slow 6s linear infinite'
      }
    },
  },
  plugins: [],
}
