"use client";
import MobileHeader from "@/components/MobileHeader";
import BottomNav from "@/components/BottomNav";
import { useEffect, useState } from "react";

export default function LayoutShell({ children }) {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setShowFooter(current < lastScroll || current < 100);
      setLastScroll(current);
      console.log(current)
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  return (
    <div className="min-h-screen relative! bg-bg text-text">
      {/* Header */}
      <MobileHeader />
      {/* Content */}
      <main className="pt-14! pb-20 relative! min-h-screen">{children}</main>

      {/* Footer */}
        <BottomNav showFooter={showFooter} />
    </div>
  );
}
