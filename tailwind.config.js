/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F',
        secondary: '#1B2838',
        accent: '#FFB84D',
        background: '#FCFCFC',
        text: '#0F1419',
      },
      fontFamily: {
        uto: ['Uto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
