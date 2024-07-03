"use client";

import OrderSummary from "@/components/OrderSummary";
import QuantitySelector from "@/components/QuantitySelector";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

function CartPage() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="p-5 sm:px-10">
      <h1 className="text-[28px] text-[#222] font-bold">Shopping cart</h1>
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={item.id} className="border-b p-6 space-y-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "Jiajiang County Lingdian Advertising Decoration Business Department",
                }}
                className="text-lg text-[#222] font-semibold"
              />
              <div className="flex items-center">
                {item.image && (
                  <div className="border rounded-[8px] flex-shrink-0 bg-[#f2f2f2] w-[120px] h-[120px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`image ${i}`}
                      height={120}
                      width={120}
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="ml-4 space-y-2">
                  <Link
                    className=" hover:underline font-medium"
                    href={`/product/${item.id}`}
                    dangerouslySetInnerHTML={{
                      __html: item.name!,
                    }}
                  />
                  <QuantitySelector item={item} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <OrderSummary />
      </div>
    </div>
  );
}

export default CartPage;
