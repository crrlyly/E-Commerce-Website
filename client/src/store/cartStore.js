import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.pid === product.pid);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.pid === product.pid
              ? { ...item, selected: 1 + item.selected }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { ...product, selected: 1 }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0), //which ones you want to keep
    })),

  clearCart: () => set({ items: [] }),
  checkCart: () => {
    console.log(get().items);
  },
  checkAmount: () => {
    return get().items.reduce((total, item) => total + item.selected, 0);
  },
}));

// use it like this
// import { useCartStore } from "../store/cartStore";

// export default function ItemCard({ product }) {
//   const addItem = useCartStore((state) => state.addItem);

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <p>${product.price}</p>
//       <button onClick={() => addItem(product)}>Add to cart</button>
//     </div>
//   );
// }
