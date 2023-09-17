/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "money-bg": "url('./assets/MoneyBGCyan.jpeg')",
        "ucf-image":
          "url('https://wemertgrouprealty.com/wp-content/uploads/2022/04/university-of-central-florida-wemert-group.jpg')",
      },
      colors: {
        aires: "#F2F4F5",
        userinp: "#1CB0F6",
        userinptext: "#1899D6",
      },
    },
  },
  plugins: [],
};
