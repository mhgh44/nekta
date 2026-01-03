"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, ShoppingCart } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "خانه", icon: Home, path: "/" },
    { label: "منو", icon: List, path: "/menu" },
    { label: "سفارش", icon: ShoppingCart, path: "/order" },
  ];

  return (
    <nav className="
      fixed bottom-0 left-1/2 -translate-x-1/2
      w-full max-w-md
      bg-white border-t
      flex justify-around items-center
      py-3
    ">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.label}
            href={item.path}
            className="flex flex-col items-center text-sm font-medium"
          >
            <Icon
              className={`w-5 h-5 mb-1 transition-colors duration-200 ${
                isActive ? "text-primary" : "text-muted"
              }`}
            />
            <span className={`${isActive ? "text-primary" : "text-muted"}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
