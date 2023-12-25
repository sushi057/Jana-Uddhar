/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#ebf5fa",
          100: "#d7ebf4",
          200: "#afd8e9",
          300: "#87c4de",
          400: "#5fb0d3",
          500: "#379dc8",
          600: "#2c7da0",
          700: "#215e78",
          800: "#163f50",
          900: "#0b1f28",
          950: "#051014",
        },
        background: {
          50: "#ebf7f9",
          100: "#d7eef4",
          200: "#afdde9",
          300: "#88ccdd",
          400: "#60bbd2",
          500: "#38aac7",
          600: "#2d889f",
          700: "#226677",
          800: "#164450",
          900: "#0b2228",
          950: "#061114",
        },
        primary: {
          50: "#ebf7fa",
          100: "#d7eef4",
          200: "#aedeea",
          300: "#86cddf",
          400: "#5ebcd4",
          500: "#36acc9",
          600: "#2b89a1",
          700: "#206779",
          800: "#154551",
          900: "#0b2228",
          950: "#051114",
        },
        secondary: {
          50: "#faebf4",
          100: "#f4d7e9",
          200: "#eaaed4",
          300: "#df86be",
          400: "#d45ea9",
          500: "#c93693",
          600: "#a12b76",
          700: "#792058",
          800: "#51153b",
          900: "#280b1d",
          950: "#14050f",
        },
        accent: {
          50: "#e6f8fe",
          100: "#cef1fd",
          200: "#9ce4fc",
          300: "#6bd6fa",
          400: "#39c9f9",
          500: "#08bbf7",
          600: "#0696c6",
          700: "#057094",
          800: "#034b63",
          900: "#022531",
          950: "#011319",
        },
      },
    },
  },
  plugins: [],
};
