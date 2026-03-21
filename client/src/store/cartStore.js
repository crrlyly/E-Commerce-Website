import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0), //which ones you want to keep
    })),

  clearCart: () => set({ items: [] }),
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