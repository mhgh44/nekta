import MobileHeader from "@/components/MobileHeader";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function MenuPage() {
  return (
    <>
      {/* <MobileHeader title="منوی نِکتا 🍹" /> */}

      <main className="p-4! grid grid-cols-2 gap-3">
        {products.map(p => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
          />
        ))}
      </main>

      {/* <BottomNav /> */}
    </>
  );
}
