// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#C7D2FE',
          400: '#6366F1',
          500: '#4F46E5',
          600: '#4338CA',
        },
      },
    },
  },
  plugins: [],
};
