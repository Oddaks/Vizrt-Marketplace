module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      borderColor: {
        'viz-orange': '#EF804E',
      },
      backgroundColor: {
        'viz-blue': '#1D363F',
        'viz-dark-blue': '#1A2C32',
        'viz-orange': '#EF804E',
        'viz-green': '#1E3541'
      },
      textColor: {
        'viz-blue': '#1D363ßF',
        'viz-dark-blue': '#1A2C32',
        'viz-orange': '#EF804E',
        'viz-green': '#1E3541'
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #D66932, #BC2F14)',
      },
      translate: {
        '1/8': '12.5%',
        '1/4': '25%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};