"use client";
import { useEffect, useState } from "react";

export default function LayoutShell({ children }) {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll) {
        // اسکرول به بالا
        setShowFooter(true);
      } else {
        // اسکرول به پایین
        setShowFooter(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <>
      {/* Header */}
      <header className="
        fixed top-0 left-0 right-0 z-50
        h-14 bg-white
        border-b border-border
        flex items-center px-4
      ">
        <h1 className="text-sm font-medium">نِکتا</h1>
      </header>

      {/* Content */}
      <main className="pt-14 pb-20">
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
        <div className="
          h-16 bg-white
          border-t border-border
          flex items-center justify-around
        ">
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
    </>
  );
}
