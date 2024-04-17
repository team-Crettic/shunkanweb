/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'full-150': '150%',
        '7/5' : '30rem'
      },
    },
  },
  plugins: [],
}

