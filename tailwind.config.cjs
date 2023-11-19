/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        comoingsoonback: "url('/assets/images/comingsoonhome.jpg')",
        comingmobile: "url('/assets/images/comingmobile.jpg')",
        landing: "url('/assets/images/landingback.jpg')",
        aboutusmain: "url('/assets/images/aboutusmain.png')",
        contactusmain: "url('/assets/images/contactmain.png')",
        registervendormain: "url('/assets/images/registervendor.png')",
        communitymain: "url('/assets/images/communitymain.png')",
      },
      fontFamily: {
        avenirnormal: ["AvenirLTPBook"],
        avenirmedium: ["AvenirLTPMedium"],
        avenirheavy: ["AvenirLTProHeavy"],
        avenirblack: ["AvenirLTPBlack"],
      },
    },
  },
  plugins: [],
};
