import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-bg text-text">
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}