module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/**/*.{html,ts}",
    "./src/**/**/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B1215',
        oil: {
          50 : '#8e7f4f',
          100: '#7a6743',
          200: '#63532f',
          300: '#5c4f2b',
          400: '#554b27',
          500: '#4e4723',
          600: '#47431f', 
          700: '#403f1b',
          800: '#393b17',
          900: '#323613',
        }
      },
      dropShadow: {
        'oil-900': '10px 16px 1.5rem #323613' 
      },
      keyframes: {
        slide: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
      },
      animation: {
        slide: 'slide 1s ease forwards'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
