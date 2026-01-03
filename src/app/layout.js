import "./globals.css";
import { pinar } from "./fonts";
import LayoutShell from "@/components/LayoutShell";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${pinar.variable} font-sans bg-bg text-text`}>
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}