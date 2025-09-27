/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Import the default theme

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Your FunnelSans is the primary font, followed by Tailwind's defaults
        sans: ['FunnelSans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
