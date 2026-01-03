"use client";
import { useEffect, useState } from "react";

export default function LayoutShell({ children }) {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setShowFooter(current < lastScroll);
      setLastScroll(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Header */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          h-14 px-4
          flex items-center
          backdrop-blur-md
          bg-primary/20
          border-b border-white/20
        "
      >
        <h1 className="text-sm font-medium">نِکتا</h1>
      </header>

      {/* Content */}
      <main className="pt-14 pb-20 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer
        className={`
          fixed bottom-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${showFooter
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"}
        `}
      >
        <div
          className="
            h-16
            flex items-center justify-around
            backdrop-blur-md
            bg-primary/20
            border-t border-white/20
          "
        >
          <button className="text-sm font-medium text-primary">
            منو
          </button>
          <button className="text-sm text-muted">
            سفارش‌ها
          </button>
          <button className="text-sm text-muted">
            پروفایل
          </button>
        </div>
      </footer>
    </div>
  );
}
