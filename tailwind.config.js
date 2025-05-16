/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evera: {
          teal: {
            dark: '#006A71',
            DEFAULT: '#48A6A7',
          },
          skyblue: '#9ACBD0',
          sand: '#FFDDAB',
          cream: '#EFE9D5',
          offwhite: '#EFE9D5',
          dark: '#030303',
        }
      },
    },
  },
  plugins: [],
}
