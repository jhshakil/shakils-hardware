module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2F5D62",
          "secondary": "#364547",
          "accent": "#FFE268",
          "neutral": "#FFB037",
          "base-100": "#FFFFFF",
          "error": "#FF4C29",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
