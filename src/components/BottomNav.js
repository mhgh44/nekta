"use client";
import { usePathname } from "next/navigation";
import { Home, List, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Footer({ showFooter }) {
  const pathname = usePathname();

  const navItems = [
    { label: "خانه", icon: Home, path: "/" },
    { label: "منو", icon: List, path: "/menu" },
    { label: "سفارش‌ها", icon: ShoppingCart, path: "/order" },
  ];

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        showFooter ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="h-16 flex items-center justify-around backdrop-blur-xs bg-primary/10 border-t border-white/20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.label}
              href={item.path}
              className="flex flex-col items-center justify-center text-sm font-medium"
            >
              {/* Icon */}
              <Icon
                className={`
                  w-6 h-6 mb-1
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-primary drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]!"
                      : "text-muted drop-shadow-[0_6px_6px_rgba(255,255,255,0.4)]!"
                  }
                `}
              />

              {/* Label */}
              <span
                className={`
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-primary drop-shadow-[0_0_18px_rgba(255,255,255,0.9)]!"
                      : "text-muted drop-shadow-[0_6px_6px_rgba(255,255,255,0.4)]!"
                  }
                `}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
