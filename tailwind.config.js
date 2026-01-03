/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pinar", "sans-serif"],
      },
      colors: {
        primary: "#6D5DF6", // بنفش نزدیک آبی (Soft)
        primarySoft: "#F2F1FE",
        text: "#1F2937", // نزدیک مشکی (نه مشکی خالص)
        muted: "#6B7280", // متن ثانویه
        border: "#E5E7EB",
        bg: "#F9FAFB",
        white: "#FFFFFF",
      },
      //   colors: {
      //     primary: "#5B5FFF",
      //     text: "#1F2937",
      //     muted: "#6B7280",
      //     bg: "#FFFFFF",
      //   },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
};
