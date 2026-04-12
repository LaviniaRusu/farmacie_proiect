// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import toast from "react-hot-toast";

// import { Product } from "@/types";

// interface CartStore {
//   items: Product[];
//   addItem: (data: Product) => void;
//   removeItem: (id: string) => void;
//   removeAll: () => void;
// }

// const useCart = create<CartStore>()(
//   persist(
//     (set, get) => ({
//       items: [],

//       addItem: (data: Product) => {
//         const currentItems = get().items;
//         const existingItem = currentItems.find((item) => item.id === data.id);

//         if (existingItem) {
//           return toast.error("Item already in cart.");
//         }

//         set({ items: [...get().items, data] });
//         toast.success("Item added to cart.");
//       },

//       removeItem: (id: string) => {
//         set({
//           items: get().items.filter((item) => item.id !== id),
//         });
//         toast.success("Item removed from the cart.");
//       },

//       removeAll: () => set({ items: [] }),
//     }),
//     {
//       name: "cart-storage",
//       storage: createJSONStorage(() => localStorage),
//     },
//   ),
// );

// export default useCart;
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "@/types";

type CartItem = Product & {
  quantity: number;
};

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === data.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });

          toast.success("Quantity updated.");
          return;
        }

        set({
          items: [...currentItems, { ...data, quantity: 1 }],
        });

        toast.success("Item added to cart.");
      },

      removeItem: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (!existingItem) return;

        if (existingItem.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            ),
          });
        } else {
          set({
            items: currentItems.filter((item) => item.id !== id),
          });
        }

        toast.success("Item removed from cart.");
      },

      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
