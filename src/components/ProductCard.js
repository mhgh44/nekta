export default function ProductCard({ name, price }) {
  return (
    <div className="
      bg-white rounded-2xl
      p-3 shadow-sm
      flex flex-col
    ">
      <div className="h-24 bg-bg rounded-xl flex items-center justify-center">
        🍹
      </div>

      <h3 className="mt-2 text-sm font-medium text-text line-clamp-2">
        {name}
      </h3>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs text-muted">
          {price.toLocaleString()} تومان
        </span>
        <button className="
          bg-primary text-white
          px-3 py-1.5
          rounded-full text-xs
        ">
          افزودن
        </button>
      </div>
    </div>
  );
}
