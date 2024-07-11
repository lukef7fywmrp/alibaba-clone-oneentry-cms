"use client";

import formatCurrency from "@/lib/formatCurrency";
import { useCartStore } from "@/store/cartStore";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { IOrderData } from "oneentry/dist/orders/ordersInterfaces";
import { useTransition } from "react";
import { Button } from "./ui/button";
import initiateOrderAndPaymentProcess from "@/actions/initiateOrderAndPaymentProcess";

function OrderSummary() {
  const { items, getItemSubtotal, getTotalItems } = useCartStore((state) => ({
    items: state.items,
    getItemSubtotal: state.getItemSubtotal,
    getTotalItems: state.getTotalItems,
  }));
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const createOrderFromItems = async () => {
    const data: IOrderData = {
      products: items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      formIdentifier: "order",
      paymentAccountIdentifier: "stripe",
      formData: [],
    };

    startTransition(async () => {
      const url = await initiateOrderAndPaymentProcess(data);
      router.push(url);
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="text-[#222] divide-y divide-[#eee] bg-white py-9 px-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] rounded-[8px] min-w-[384px]">
      <div className="pb-4 space-y-5">
        <p className="text-lg font-bold">
          Order Summary ({getTotalItems()} items)
        </p>
        <div className="flex items-center justify-between">
          <p>Item subtotal</p>
          <p className="font-semibold">${formatCurrency(getItemSubtotal())}</p>
        </div>
      </div>

      <div className="pt-4 space-y-1">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Subtotal excl. tax</p>
          <p className="text-lg font-semibold">
            ${formatCurrency(getItemSubtotal())}
          </p>
        </div>
        <p className="text-xs text-[#666]">(Excluding shipping fee and tax)</p>
      </div>

      <Button
        disabled={isPending}
        onClick={createOrderFromItems}
        className="text-lg font-bold gap-x-2 rounded-full w-full h-[48px] mt-6"
        size={"lg"}
      >
        <ShieldCheck /> Checkout
      </Button>
    </div>
  );
}

export default OrderSummary;
