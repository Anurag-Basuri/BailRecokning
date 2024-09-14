/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#003366',
        gold: '#FFD700',
        while: '#FFFFFF',
      },
    },
  },
  plugins: [],
  
}
