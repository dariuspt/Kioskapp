/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx,css}",
    "./pages/**/*.{html,js,jsx,ts,tsx,css}",
    "./components/**/*.{html,js,jsx,ts,tsx,css}",
 
    // Or if using `src` directory:
    "./src/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
