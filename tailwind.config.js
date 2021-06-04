module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      gray: "#00000080",
      blue: "#39B0FF",
      green: "#04B58B",
      lemon: "#3E9C4B",
      yelow: "#B6BC00",
      lightOrange: "#E59100",
      orange: "#E55C00",
      red: "#EE1F50"  ,
      pink: "#D6198A",
      purple: "#D6198A",
      cielo: "#48B5FE"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
