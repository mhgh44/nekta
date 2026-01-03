/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(109 93 246)",
        text: "#1F2937",
        muted: "#6B7280",
        border: "#E5E7EB",
        bg: "#F9FAFB",
      },
      fontFamily: {
        sans: ["var(--font-pinar)", "system-ui"],
      },
    },
  },
};
