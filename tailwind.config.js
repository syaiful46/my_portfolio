/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        abu: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl' : '1240px',
      },
    },
    
  },
  plugins: [],
}
