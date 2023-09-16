/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aires: "#F2F4F5",
        userinp: "#1CB0F6",
        userinptext: "#1899D6",
      },
    },
  },
  plugins: [],
};
