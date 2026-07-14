/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EF',
        cream: '#F2EADD',
        gold: '#B89C64',
        forest: '#1C3528',
        ink: '#111111',
      },
      boxShadow: {
        premium: '0 10px 30px -15px rgba(17, 17, 17, 0.24)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        sans: ['"Manrope"', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

