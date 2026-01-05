import { Citrus } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 px-4 flex items-center justify-center  backdrop-blur-xs  bg-primary/10 border-b border-white/20">
      <h1 className="flex items-center gap-1 font-extrabold tracking-wide text-gray-900 inactive-glow">
        <span className="text-2xl relative top-px">نِکتا</span>
        <Citrus className="w-7 h-7 text-[#f79c26]" />
      </h1>
    </header>
  );
}
