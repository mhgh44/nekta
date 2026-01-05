import Link from "next/link";
import DetailedButton from "@/components/ui/DetailedButton";

export default function ProductCard({ id, name, price, image }) {
  return (
    <Link
      href={`/product/${id}`}
      className="
        block
        bg-white rounded-2xl shadow-lg
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      <div className="flex flex-col h-full">
        {/* تصویر */}
        <div className="w-full h-40 bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="
              object-cover min-h-40 w-full h-full
              transition-transform duration-300
              hover:scale-105
            "
          />
        </div>

        {/* نام */}
        <h3
          className="
            mt-3!
            px-2.5!
            text-base!
            font-medium!
            line-clamp-1!
          "
        >
          {name}
        </h3>
          {/* دکمه افزودن */}
          <div className="flex justify-end">
            <DetailedButton productId={id} price={price} />
          </div>
        </div>
    </Link>
  );
}
