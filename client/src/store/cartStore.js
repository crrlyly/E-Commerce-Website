import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  //version 1 = itempage
  //version 2 = cartpage
  //version 3 = itemcard
  addItem: (product, givenSelected, v) =>
    set((state) => {
      const existing = state.items.find((item) => item.pid === product.pid);

      if (v === 1) {
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.pid === product.pid
                ? { ...item, selected: givenSelected + item.selected }
                : item,
            ),
          };
        } else {
          return {
            items: [...state.items, { ...product, selected: givenSelected }],
          };
        }
      } else if (v === 2) {
        return {
          items: state.items.map((item) =>
            item.pid === product.pid
              ? { ...item, selected: 1 + item.selected }
              : item,
          ),
        };
      } else {
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.pid === product.pid
                ? { ...item, selected: 1 + item.selected }
                : item,
            ),
          };
        }
      }
      return {
        items: [...state.items, {...product, selected: 1}],
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.pid !== id),
    })),

  //modify
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.pid === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  //modify
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.pid === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0), //which ones you want to keep
    })),

  increaseSelected: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.pid === id ? { ...item, selected: item.selected + 1 } : item,
      ),
    })),

  decreaseSelected: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.pid === id ? { ...item, selected: item.selected - 1 } : item,
        )
        .filter((item) => item.selected > 0), //which ones you want to keep
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
