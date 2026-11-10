/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#243D32',
          50: '#F2F6F4',
          100: '#E2EBE5',
          200: '#C2D5CA',
          300: '#9ABBA6',
          400: '#649779',
          500: '#3A6852',
          600: '#2C513F',
          700: '#243D32',
          800: '#1B2E26',
          900: '#14221C',
          950: '#0B1310',
        },
        sage: {
          DEFAULT: '#A8B99C',
          light: '#C7D4BF',
          dark: '#8B9E7E',
        },
        olive: {
          DEFAULT: '#727D50',
          light: '#8E9B66',
          dark: '#58623B',
        },
        ivory: {
          DEFAULT: '#F5F1E8',
          light: '#FAF8F4',
          dark: '#EDE5D5',
        },
        sand: {
          DEFAULT: '#E5DCCB',
          light: '#EFE9DD',
          dark: '#D4C6B0',
        },
        copper: {
          DEFAULT: '#B77D5C',
          light: '#C89375',
          dark: '#9B6243',
        },
        charcoal: {
          DEFAULT: '#292D29',
          light: '#3D433D',
          dark: '#1C1F1C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
    },
  },
  plugins: [],
}

