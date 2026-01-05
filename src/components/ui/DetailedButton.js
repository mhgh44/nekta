"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2, Info } from "lucide-react";
import PrimeryButton from "@/components/ui/PrimeryButton";

export default function DetailedButton({ productId, price = "نا موجود" }) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault(); // ⛔ جلوگیری از Link
    e.stopPropagation(); // ⛔ جلوگیری از bubble

    console.log("افزودن محصول", productId);
  };
  const reset = () => setCount(0);

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-1.5 px-3! py-3! w-full"
    >
      {/* ردیف بالا */}
      <div className="flex items-center border-2! border-primary! rounded-lg! justify-between gap-3 ">
        {/* قیمت + دکمه */}
        <div className="mt-auto  flex gap-2">
          {/* قیمت */}
          <div className="flex items-center gap-1.5 pr-1!">
            <span className="text-[19px]! pt-1.5! price font-medium!  text-gray-800!">
              {/* {price.toLocaleString()} */}
              {new Intl.NumberFormat("fa-IR").format(price)}
            </span>
            <img src="/toman.webp" alt="تومان" className="w-5 h-5" />
          </div>
        </div>

        <PrimeryButton
          text={<Info size={22} />}
          // text="جزئیات"
          callback={() => router.push(`/product/${productId}`)}
          styles={"px-1.75! py-1! h-full! rounded-l-md! rounded-r-none!  bg-primary! hover:bg-primary/90 text-white!"}
        />
      </div>
      {/* حالت عادی */}
      {count === 0 ? (
        <>
          <PrimeryButton
            text="افزودن"
            callback={() => setCount(1)}
            styles={""}
          />
        </>
      ) : (
        <div className="flex flex-row-reverse rounded- items-center w-full! justify-center gap-1.5">
          <div className=" flex items-center border-2! border-primary! rounded-xl! rounded-r-xs! rounded-tl-lg! bg-white font-semibold! transition hover:bg-primary/10 active:scale-95 overflow-hidden! w-full!">
            {/* مثبت */}
            <button
              onClick={() => setCount((c) => c + 1)}
              className=" px-1.25! py-1.5! flex-1 text-white bg-primary! h-full! w-full! max-w-min! hover:bg-primary/10 transition"
            >
              <Plus color="white" size={22} />
            </button>

            {/* عدد */}
            <span className=" pt-0.5! flex-1 price text-2xl! h-full min-w-9! w-full! text-center font-semibold text-primary align-baseline!">
              {count}
            </span>

            {/* منفی */}
            <button
              onClick={() => (count === 1 ? reset() : setCount((c) => c - 1))}
              className=" px-1.25! py-1.5! flex-1 h-full w-full text-white bg-primary! max-w-min! hover:bg-primary/10 transition"
            >
              <Minus color="white" size={22} />
            </button>
          </div>
          {/* حذف - سمت راست */}
          <button
            onClick={reset}
            className=" w-9 h-full flex items-center justify-center rounded-xl! rounded-l-xs! rounded-tr-lg! bg-[#f79c26]! text-white! hover:bg-red-600! transition active:scale-95"
          >
            <Trash2 size={22} />
          </button>
        </div>
      )}

      {/* دکمه‌های پایین */}
      {/* 
      {count > 0 && (
        <div className="flex gap-2 flex-1">
          <button
            onClick={() => router.push("/order")}
            className="
              bg-white
              grow
              text-primary!
              border-2! border-primary!
              px-2!
              py-2!
              rounded-xl!
              font-semibold!
              transition
              hover:bg-primary/10
              active:scale-95
            "
          >
            سبد خرید
          </button>


        </div>
      )} 
      */}
    </div>
  );
}
