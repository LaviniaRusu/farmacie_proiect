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
///cod funtional inainte de stocks
// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import toast from "react-hot-toast";

// import { Product } from "@/types";

// type CartItem = Product & {
//   quantity: number;
// };

// interface CartStore {
//   items: CartItem[];
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
//           set({
//             items: currentItems.map((item) =>
//               item.id === data.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item,
//             ),
//           });

//           toast.success("Quantity updated.");
//           return;
//         }

//         set({
//           items: [...currentItems, { ...data, quantity: 1 }],
//         });

//         toast.success("Item added to cart.");
//       },

//       removeItem: (id: string) => {
//         const currentItems = get().items;
//         const existingItem = currentItems.find((item) => item.id === id);

//         if (!existingItem) return;

//         if (existingItem.quantity > 1) {
//           set({
//             items: currentItems.map((item) =>
//               item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//             ),
//           });
//         } else {
//           set({
//             items: currentItems.filter((item) => item.id !== id),
//           });
//         }

//         toast.success("Item removed from cart.");
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

////local, salvare pe local

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import toast from "react-hot-toast";

// import { Product } from "@/types";

// export type CartItem = Product & {
//   quantity: number;
// };

// interface CartStore {
//   items: CartItem[];
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
//         const stock = Number(data.stock ?? 0);

//         if (stock <= 0) {
//           toast.error("Produsul nu mai este în stoc.");
//           return;
//         }

//         if (existingItem) {
//           if (existingItem.quantity >= stock) {
//             toast.error(`Mai sunt doar ${stock} bucăți în stoc.`);
//             return;
//           }

//           set({
//             items: currentItems.map((item) =>
//               item.id === data.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item,
//             ),
//           });

//           toast.success("Cantitatea a fost actualizată.");
//           return;
//         }

//         set({
//           items: [...currentItems, { ...data, quantity: 1 }],
//         });

//         toast.success("Produs adăugat în coș.");
//       },

//       removeItem: (id: string) => {
//         const currentItems = get().items;
//         const existingItem = currentItems.find((item) => item.id === id);

//         if (!existingItem) return;

//         if (existingItem.quantity > 1) {
//           set({
//             items: currentItems.map((item) =>
//               item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//             ),
//           });
//         } else {
//           set({
//             items: currentItems.filter((item) => item.id !== id),
//           });
//         }

//         toast.success("Produs eliminat din coș.");
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

///////use cart pe local cu erori
// import { create } from "zustand";
// import toast from "react-hot-toast";

// import { Product } from "@/types";

// export type CartItem = Product & {
//   quantity: number;
// };

// interface CartStore {
//   items: CartItem[];
//   userId: string | null;
//   setUserId: (userId: string | null) => void;
//   addItem: (data: Product) => void;
//   removeItem: (id: string) => void;
//   removeAll: () => void;
// }

// const getCartKey = (userId: string | null) => {
//   return userId ? `cart-storage-${userId}` : "cart-storage-guest";
// };

// const loadCart = (userId: string | null): CartItem[] => {
//   if (typeof window === "undefined") return [];

//   const saved = localStorage.getItem(getCartKey(userId));

//   if (!saved) return [];

//   try {
//     return JSON.parse(saved);
//   } catch {
//     return [];
//   }
// };

// const saveCart = (userId: string | null, items: CartItem[]) => {
//   if (typeof window === "undefined") return;

//   localStorage.setItem(getCartKey(userId), JSON.stringify(items));
// };

// const useCart = create<CartStore>((set, get) => ({
//   items: [],
//   userId: null,

//   setUserId: (userId: string | null) => {
//     const savedItems = loadCart(userId);

//     set({
//       userId,
//       items: savedItems,
//     });
//   },

//   addItem: (data: Product) => {
//     const { items, userId } = get();
//     const existingItem = items.find((item) => item.id === data.id);
//     const stock = Number(data.stock ?? 0);

//     if (stock <= 0) {
//       toast.error("Produsul nu mai este în stoc.");
//       return;
//     }

//     let updatedItems: CartItem[];

//     if (existingItem) {
//       if (existingItem.quantity >= stock) {
//         toast.error(`Mai sunt doar ${stock} bucăți în stoc.`);
//         return;
//       }

//       updatedItems = items.map((item) =>
//         item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item,
//       );

//       toast.success("Cantitatea a fost actualizată.");
//     } else {
//       updatedItems = [...items, { ...data, quantity: 1 }];
//       toast.success("Produs adăugat în coș.");
//     }

//     saveCart(userId, updatedItems);
//     set({ items: updatedItems });
//   },

//   removeItem: (id: string) => {
//     const { items, userId } = get();
//     const existingItem = items.find((item) => item.id === id);

//     if (!existingItem) return;

//     let updatedItems: CartItem[];

//     if (existingItem.quantity > 1) {
//       updatedItems = items.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//       );
//     } else {
//       updatedItems = items.filter((item) => item.id !== id);
//     }

//     saveCart(userId, updatedItems);
//     set({ items: updatedItems });

//     toast.success("Produs eliminat din coș.");
//   },

//   removeAll: () => {
//     const { userId } = get();

//     saveCart(userId, []);
//     set({ items: [] });
//   },
// }));

// export default useCart;
import { create } from "zustand";
import toast from "react-hot-toast";

import { Product } from "@/types";

export type CartItem = Product & {
  quantity: number;
};

interface CartStore {
  items: CartItem[];
  userId: string | null;
  setUserId: (userId: string | null) => void;
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const getCartKey = (userId: string | null) => {
  return userId ? `cart-storage-${userId}` : "cart-storage-guest";
};

const normalizeCart = (data: unknown): CartItem[] => {
  if (Array.isArray(data)) {
    return data;
  }

  if (
    data &&
    typeof data === "object" &&
    "state" in data &&
    Array.isArray((data as { state?: { items?: CartItem[] } }).state?.items)
  ) {
    return (data as { state: { items: CartItem[] } }).state.items;
  }

  if (
    data &&
    typeof data === "object" &&
    "items" in data &&
    Array.isArray((data as { items?: CartItem[] }).items)
  ) {
    return (data as { items: CartItem[] }).items;
  }

  return [];
};

const loadCart = (userId: string | null): CartItem[] => {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem(getCartKey(userId));

  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    return normalizeCart(parsed);
  } catch {
    return [];
  }
};

const saveCart = (userId: string | null, items: CartItem[]) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(getCartKey(userId), JSON.stringify(items));
};

const useCart = create<CartStore>((set, get) => ({
  items: [],
  userId: null,

  setUserId: (userId: string | null) => {
    const savedItems = loadCart(userId);

    set({
      userId,
      items: savedItems,
    });
  },

  addItem: (data: Product) => {
    const { userId } = get();
    const items = Array.isArray(get().items) ? get().items : [];

    const existingItem = items.find((item) => item.id === data.id);
    const stock = Number(data.stock ?? 0);

    if (stock <= 0) {
      toast.error("Produsul nu mai este în stoc.");
      return;
    }

    let updatedItems: CartItem[];

    if (existingItem) {
      if (existingItem.quantity >= stock) {
        toast.error(`Mai sunt doar ${stock} bucăți în stoc.`);
        return;
      }

      updatedItems = items.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item,
      );

      toast.success("Cantitatea a fost actualizată.");
    } else {
      updatedItems = [...items, { ...data, quantity: 1 }];
      toast.success("Produs adăugat în coș.");
    }

    saveCart(userId, updatedItems);
    set({ items: updatedItems });
  },

  removeItem: (id: string) => {
    const { userId } = get();
    const items = Array.isArray(get().items) ? get().items : [];

    const existingItem = items.find((item) => item.id === id);

    if (!existingItem) return;

    let updatedItems: CartItem[];

    if (existingItem.quantity > 1) {
      updatedItems = items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    } else {
      updatedItems = items.filter((item) => item.id !== id);
    }

    saveCart(userId, updatedItems);
    set({ items: updatedItems });

    toast.success("Produs eliminat din coș.");
  },

  removeAll: () => {
    const { userId } = get();

    saveCart(userId, []);
    set({ items: [] });
  },
}));

export default useCart;
