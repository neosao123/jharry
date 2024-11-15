/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // customPrimaryColor: "#20c4f4",
        // customSecondaryColor: "#2F7DC0",

        customPrimaryColor: "#ef4037",
        customSecondaryColor: "#ef4037",
        btnColor: "#000000",

        customWhiteColor: "#ffffff",
        customPrimaryBlack: "#16254c",
        customSecondaryBlack: "#3f3f3f"
      },
      fontFamily: {
        ralway: ['Raleway', 'sans-serif'],
        gotham: ['Gotham Pro', 'sans-serif']
      },
      fontSize: {
        'h1sm': ['30px', { lineHeight: '50px' }],
        'h1md': ['40px', { lineHeight: "55px" }],
        'h1lg': ['50px', { lineHeight: '65px' }],
        'h2sm': ['28px', { lineHeight: '50px' }],
        'h2md': ['38px', { lineHeight: "55px" }],
        'h2lg': ['48px', { lineHeight: '65px' }]
      }
    },
  },
  plugins: [],
}