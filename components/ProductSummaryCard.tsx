import { MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import AddToCartDrawer from "./AddToCartDrawer";
import { CartItem } from "@/store/cartStore";
import { cn } from "@/lib/utils";

function ProductSummaryCard({
  item,
  drawer,
}: {
  item: CartItem;
  drawer?: boolean;
}) {
  const getEstimatedDelivery = () => {
    const today = new Date();
    const delivery = new Date(today.setDate(today.getDate() + 7));
    return `${delivery.toLocaleString("en-US", {
      month: "short",
    })} ${delivery.getDate()}-${delivery.getDate() + 7}`;
  };

  return (
    <div
      className={cn(
        "col-span-2 w-full flow-root h-fit rounded-[8px] p-6 divide-[#e6e7eb]",
        drawer
          ? "bg-transparent"
          : "bg-white shadow-[0_-4px_20px_0_rgba(0,0,0,.06)] divide-y"
      )}
    >
      <div className="space-y-1 pb-[24px]">
        <p className="text-[#666] text-sm">1 piece</p>
        <p className="font-bold text-[#222] text-xl">${item.price}</p>
      </div>

      <div className="space-y-3.5 text-[#222] pt-[24px]">
        <p className="text-lg leading-none font-semibold">Shipping</p>

        <div>
          <p className="font-semibold text-base">
            Electronics Parcels (Standard)
          </p>
          <p>Shipping total: ${item.price} for 1 piece</p>
          <p>Estimated delivery by {getEstimatedDelivery()}</p>
        </div>

        {!drawer && (
          <div className="flex items-center space-x-3">
            <Button
              size={"lg"}
              className="hidden sm:flex rounded-full font-bold h-[48px] flex-1 w-full"
            >
              Start order
            </Button>

            <AddToCartDrawer item={item} />

            <Button
              variant={"outline"}
              size={"icon"}
              className="hidden sm:flex rounded-full font-semibold flex-shrink-0 w-[48px] h-[48px] text-[#333] border-[#222] items-center justify-center"
            >
              <MailIcon />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSummaryCard;
