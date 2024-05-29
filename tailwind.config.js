/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {},
      borderColor: {
        "custom-color": "#ccdcf287",
      },
      borderWidth: {
        3: "3px",
      },
      colors: {
        users: {
          primary: "#dcf8c6",
          green: "#25d366",
          custom: "#fbfbfb",
          white: "#fff",
          whitesmoke: "whitesmoke",
        },
      },
    },
  },
  plugins: [],
};
