import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { CartItem, useCartStore } from "@/store/cartStore";

function QuantitySelector({ item }: { item: CartItem }) {
  const { addItem, removeItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(item);
  };

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="bg-white overflow-hidden h-[44px] relative flex items-center justify-center w-[130px] rounded-full">
      <Button
        onClick={handleRemoveFromCart}
        variant={"outline"}
        size={"icon"}
        className="adjustButton absolute left-0 z-10"
      >
        <Minus size={18} />
      </Button>

      <input
        type="number"
        className="quantityInput"
        value={item.quantity}
        readOnly
      />

      <Button
        onClick={handleAddToCart}
        variant={"outline"}
        size={"icon"}
        className="adjustButton absolute right-0 z-10"
      >
        <Plus size={18} />
      </Button>
    </div>
  );
}

export default QuantitySelector;
