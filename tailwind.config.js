/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '110': '110%',
    },
    listStyleType:{
      circle:'circle'
    },
    extend: {
      // transitionProperty: {
      //   'scaleImgSize':'transform',
      // },
      animation: {
        'animPopoutin': 'animPopoutin 3s ease 4',
      },
      keyframes: {
        animPopoutin: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
            'text-shadow': '0 0 0 rgba(0, 0, 0, 0)'
          },
          '25%': {
            transform: 'scale(1.2)',
            opacity: '1',
            'text-shadow': '0.3vmax 1vmax 0.5vmax rgba(0, 0, 0, 0.5)'
            // 0.3vmax 1vmax 0.5vmax
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
            'text-shadow': '0.1vmax 0 0 rgba(0, 0, 0, 0)'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
            'text-shadow': '0.1vmax 0 0 rgba(0, 0, 0, 0)'
          }
        }
      }
    },
  },
  plugins: [],
}

