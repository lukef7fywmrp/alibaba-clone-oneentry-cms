import ItemList from "@/components/ItemList";
import OrderSummary from "@/components/OrderSummary";

async function CartPage() {
  return (
    <div className="p-5 sm:px-10">
      <h1 className="text-[28px] text-[#222] font-bold">Shopping cart</h1>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <ItemList />
        <OrderSummary />
      </div>
    </div>
  );
}

export default CartPage;
