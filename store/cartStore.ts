import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string | TrustedHTML | undefined;
  description: string | TrustedHTML | undefined;
  price: string | undefined;
  image: string | undefined;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  getItemSubtotal: () => number;
  clearItems: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        set((state) => {
          const itemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          // If the item is not in the cart, add it with a quantity of 1
          const updatedItems =
            itemIndex === -1
              ? [...state.items, { ...newItem, quantity: 1 }]
              : state.items.map((item, index) =>
                  index === itemIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
          return { items: updatedItems };
        });
      },
      removeItem: (id) => {
        set((state) => {
          const itemIndex = state.items.findIndex((item) => item.id === id);
          if (itemIndex === -1) return state; // Item not found, return current state without changes

          // If the item quantity is greater than 1, decrement it by 1, otherwise remove it from the cart
          const updatedItems =
            state.items[itemIndex].quantity > 1
              ? state.items.map((item, index) =>
                  index === itemIndex
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
              : state.items.filter((_, index) => index !== itemIndex);
          return { items: updatedItems };
        });
      },
      getItemSubtotal: () => {
        const items = get().items;
        return items.reduce(
          (acc, item) => acc + parseFloat(item.price || "0") * item.quantity,
          0
        );
      },
      clearItems: () => set(() => ({ items: [] })),
      getTotalItems: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);
