export default function MobileHeader({ title }) {
  return (
    <header className="
      sticky top-0 z-10
      bg-white
      px-4 py-3
      border-b
    ">
      <h1 className="text-lg font-bold text-text">{title}</h1>
    </header>
  );
}
