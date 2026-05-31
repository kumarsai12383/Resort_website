/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: {
            DEFAULT: '#C5A880',
            light: '#D9C5B2',
            dark: '#B0936C',
            pale: '#EADBC8',
            glow: 'rgba(197, 168, 128, 0.4)'
          },
          dark: {
            DEFAULT: '#0B0D11', // Deep rich charcoal black
            card: '#14181F',     // Cards
            border: '#262D38',   // Borders
            accent: '#1D232E'    // Section background variant
          },
          cream: {
            DEFAULT: '#FDFBF7', // Premium warm paper white
            dark: '#FAF6F0',
            slate: '#EAE6DF'
          }
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.15em',
        'luxury-wide': '0.25em',
        'luxury-widest': '0.4em',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right, #B0936C, #D9C5B2, #B0936C)',
      }
    },
  },
  plugins: [],
}
