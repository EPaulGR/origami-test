/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary  : {
          // Change these color values to your desired custom color
          50:  '#f8e4e7',
          100: '#edbcc2',
          200: '#d07e80',
          300: '#ba4d51',
          400: '#bb1c2c',
          500: '#b7000e',
          600: '#aa000f',
          700: '#9b000a',
          800: '#8e0001',
          900: '#800000',
          DEFAULT: '#edbcc2',
        },
      },
    },
  },
  plugins: [],
}

