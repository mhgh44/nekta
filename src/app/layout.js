import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className="bg-bg text-text">
        <LayoutShell>{children}</LayoutShell>
        {/* <div className="max-w-md mx-auto min-h-screen pb-20">{children}</div> */}
      </body>
    </html>
  );
}
