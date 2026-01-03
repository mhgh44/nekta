import localFont from "next/font/local";

export const pinar = localFont({
  src: [
    { path: "../../public/fonts/PINAR-FD-LIGHT.woff2", weight: "400" },
    { path: "../../public/fonts/PINAR-FD-REGULAR.woff2", weight: "500" },
    { path: "../../public/fonts/PINAR-FD-MEDIUM.woff2", weight: "600" },
    { path: "../../public/fonts/PINAR-FD-BOLD.woff2", weight: "700" },
    { path: "../../public/fonts/PINAR-FD-EXTRABOLD.woff2", weight: "800" },
  ],
  variable: "--font-pinar",
  display: "swap",
});
