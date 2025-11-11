/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'veeam-green': '#00B336',
        'veeam-dark': '#005F4B',
        'primary': '#00B336',
        'primary-dark': '#009929',
        'secondary': '#0052CC',
        'dark': '#1A1A1A',
        'gray-light': '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

