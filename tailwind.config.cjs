/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        custom: '#F8971C',
        grey: {
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
    },
    screens: {
      sm: {max: '768px'},
      lg: {max: '1024px'},
      xl: {min: '1280px'},
    },
    debugScreens: {
      position: ['top', 'right'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
