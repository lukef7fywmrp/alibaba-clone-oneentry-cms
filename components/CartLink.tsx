"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function CartLink() {
  const { getTotalItems } = useCartStore((state) => ({
    getTotalItems: state.getTotalItems,
  }));

  return (
    <Link href={"/cart"} className="headerLink">
      <div className="relative">
        <ShoppingCart size={24} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-1 -right-2 bg-primary text-white rounded-full text-xs h-4 w-4 flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </div>
      <span className="hover:text-primary">Cart</span>
    </Link>
  );
}

export default CartLink;
