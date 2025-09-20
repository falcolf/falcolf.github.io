/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        brand: '#ff5733',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

