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
}

export const useCartStore = create(
  persist<CartState>(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const itemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          if (itemIndex !== -1) {
            // Item exists, update its quantity
            const updatedItems = state.items.map((item, index) =>
              index === itemIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { items: updatedItems };
          } else {
            // Item does not exist, add new item with quantity 1
            return { items: [...state.items, { ...newItem, quantity: 1 }] };
          }
        }),
      removeItem: (id) =>
        set((state) => {
          const itemIndex = state.items.findIndex((item) => item.id === id);
          if (itemIndex !== -1) {
            // Item exists
            const item = state.items[itemIndex];
            if (item.quantity > 1) {
              // Decrease quantity by 1 if more than 1
              const updatedItems = state.items.map((item, index) =>
                index === itemIndex
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
              return { items: updatedItems };
            } else {
              // Remove item if quantity is 1
              const updatedItems = state.items.filter(
                (item, index) => index !== itemIndex
              );
              return { items: updatedItems };
            }
          }
          return state; // Return state unchanged if item not found
        }),
    }),
    { name: "cart-storage" }
  )
);
