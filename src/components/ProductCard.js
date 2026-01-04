export default function ProductCard({ name, price, image }) {
  return (
    <div
      className="
      bg-white rounded-2xl shadow-lg
      overflow-hidden flex flex-col
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-2xl
    "
    >
      {/* تصویر محصول */}
      <div className="w-full h-40 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            object-cover w-full h-full
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      {/* نام محصول */}
      <h3
        className="
  mt-3!
  px-4!
  text-base!
  font-medium!
  text-text
  line-clamp-2!
"
      >
        {name}
      </h3>

      {/* قیمت + دکمه */}
      <div className="mt-auto px-4! py-3! flex flex-col gap-2">
        {/* قیمت (بالا سمت راست) */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1 text-sm font-semibold text-black">
            <span className=" text-xl! font-semibold!">
              {price.toLocaleString()}
            </span>
            <img src="/toman.webp" alt="تومان" className="w-5.5 h-5.5" />
          </div>
        </div>

        {/* دکمه افزودن (پایین سمت چپ) */}
        <div className="flex justify-end">
          <button
            className="
        bg-white
        text-primary!
        border-primary! border-2!
        px-4! py-1.5!
        rounded-xl!
        font-semibold!
        transition-all duration-200
        hover:bg-primary/10
        active:scale-95
      "
          >
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}
