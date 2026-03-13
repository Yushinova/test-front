// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;