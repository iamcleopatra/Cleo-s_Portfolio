/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}", // Add your file types here
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E3A8A', // Replace with the desired shade
        lightBlue: '#3B82F6',
        bgGray: '#F3F4F6',
        accent: '#10B981', // Example accent color
      },
    },
  },
  plugins: [],
}
