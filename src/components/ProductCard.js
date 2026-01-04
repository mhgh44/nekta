export default function ProductCard({ name, price, image }) {
  return (
    <div className="
      bg-white rounded-2xl shadow-lg
      overflow-hidden
      flex flex-col
      hover:shadow-2xl transition-shadow duration-200
    ">
      {/* تصویر محصول */}
      <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* نام محصول */}
      <h3 className="mt-3 px-3 text-base font-semibold text-text line-clamp-2">
        {name}
      </h3>

      {/* قیمت + دکمه */}
      <div className="mt-auto px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm font-medium text-primary">
          {/* آیکون تومان */}
          <img
            src="/icons/toman.png"
            alt="تومان"
            className="w-4 h-4"
          />
          <span>{price.toLocaleString()}</span>
        </div>

        <button className="
          bg-primary text-white
          px-3 py-1.5
          rounded-full text-sm
          hover:bg-primary/90
          transition-colors duration-200
        ">
          افزودن
        </button>
      </div>
    </div>
  );
}
