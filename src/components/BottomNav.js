import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="
      fixed bottom-0 left-1/2 -translate-x-1/2
      w-full max-w-md
      bg-white border-t
      flex justify-around items-center
      py-3
    ">
      <Link href="/" className="text-sm text-muted">خانه</Link>
      <Link href="/menu" className="text-sm font-medium text-primary">منو</Link>
      <Link href="/order" className="text-sm text-muted">سفارش</Link>
    </nav>
  );
}
