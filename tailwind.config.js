/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        diner: '#1C1410',
        diner2: '#251A14',
        ketchup: '#D62828',
        mustard: '#F2A619',
        cream: '#FBF1E6',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
