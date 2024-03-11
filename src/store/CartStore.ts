import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OrderModel {
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  order: OrderModel[];
  totalItems: number;
  totalPrice: number;
  orderNumber: string;
  resetCart: () => void;
  setOrderNumber: (orderNumber: string) => void;
  addToCart: (name: string, price: number) => void;
  deleteFromCart: (name: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      order: [],
      totalItems: 0,
      totalPrice: 0,
      orderNumber: "",

      resetCart: () => set({ order: [], totalItems: 0, totalPrice: 0 }),

      setOrderNumber: (orderNumber) =>
        set({
          orderNumber,
        }),

      addToCart: (name, price) =>
        set((state) => {
          const totalPrice = state.totalPrice + price;
          const totalItems = state.totalItems + 1;
          const order = [...state.order];
          const itemIndex = order.findIndex((item) => item.name === name);
          if (itemIndex === -1) {
            order.push({
              name,
              price,
              quantity: 1,
            });
          } else {
            order[itemIndex].quantity += 1;
          }
          return {
            ...state,
            order,
            totalItems,
            totalPrice,
          };
        }),
      deleteFromCart: (name) =>
        set((state) => {
          const order = [...state.order];
          const itemIndex = order.findIndex((item) => item.name === name);
          const totalPrice = state.totalPrice - order[itemIndex].price;
          const totalItems = state.totalItems - 1;
          if (order[itemIndex].quantity === 1) {
            order.splice(itemIndex, 1);
          } else {
            order[itemIndex].quantity -= 1;
          }
          return {
            ...state,
            order,
            totalItems,
            totalPrice,
          };
        }),
    }),
    {
      name: "Airbean-Cartstore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
