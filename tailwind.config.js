/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./parts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        bg_primary: '#101010',
        bg_secondary: '#190a0a',
        bg_primary_alt: '#171717',
        bg_secondary_alt: '#4f0f0f',

        icon_primary: '#e0f0f0',
        icon_secondary: '#000000',

        text_primary: '#eef0f0',
        text_secondary: '#dde0e0',
        
        text_path:"#ff7777",
        text_path_current: "#dd77dd",
        
        button_primary: '#0a0c0c',
        button_primary_hover: '#aa9990',
        button_secondary: '#190a0a',
        button_secondary_hover: '#390f0f',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};