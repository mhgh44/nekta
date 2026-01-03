"use client";
import BottomNav from "@/components/BottomNav";
import { useEffect, useState } from "react";
import { Citrus } from "lucide-react";

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
    <div className="min-h-screen relative! bg-bg text-text">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 px-4 flex items-center justify-center  backdrop-blur-md  bg-primary/10 border-b border-white/20">
        <h1 className="flex items-center gap-1 font-extrabold tracking-wide text-gray-900">
          <span className="text-2xl relative top-px">نِکتا</span>
          <Citrus className="w-7 h-7 text-[#f79c26]" />
        </h1>
      </header>

      {/* Content */}
      <main className="pt-14! pb-20 relative! min-h-screen">{children}</main>

      {/* Footer */}
        <BottomNav />
    </div>
  );
}
