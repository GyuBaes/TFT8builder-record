/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gangwonEdu: ['GangwonEduPowerExtraBoldA', 'sans-serif'],
        netmarbleB: ['LeferiPoint-WhiteObliqueA', 'sans-serif'],
        ibm: ['IBMPlexSansKR-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
