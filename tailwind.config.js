module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['HK Grotesk', 'sans-serif'],
      title: ['Bison', 'sans-serif'],
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '60': 60,
      '70': 70,
      '100': 100,
      'auto': 'auto',
    },

    fontSize: {
      'super-hero': '16rem',
      'hero': '6.25rem',
      'xxs': '0.5rem',
      'xs': '0.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '5.5xl': '3.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    extend: {
      height: {
        84: '340px',
        100: '420px'
      },
      colors: {
        orange: '#F06F46',
        orangelight: '#F1764F',
        white: '#FFFFFF',
        black: '#171717',
        'black-900': '#2F2F2F',
        'black-800': '#454545',
        'black-700': '#5D5D5D',
        'black-600': '#747474',
        'black-50': '#F3F3F3',
        input: '#C2C4D4'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
