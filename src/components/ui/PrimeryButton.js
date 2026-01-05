import { twMerge } from "tailwind-merge";
export default function PrimeryButton({ text, callback, styles = "" }) {
  let className = twMerge(
    `bg-white text-primary! border-primary! border-2! px-3! py-2! rounded-xl! font-semibold! transition-all duration-200 hover:bg-primary/10 active:scale-95`,
    styles
  );
  return (
    <button onClick={callback} className={className}>
      {text}
    </button>
  );
}
