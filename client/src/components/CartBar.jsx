import CartCard from "./cards/CartCard";
import { useCartStore } from "../store/cartStore";
import { calculateItemTotal } from "../utils/calculateItemTotal";
import { Link } from "react-router-dom";

// ${ifOpen ? "opacity-0" : "pointer-events-none opacity-0"}`}

export default function CartBar({ ifOpen, close }) {
  const items = useCartStore((state) => state.items);
  const total = calculateItemTotal(items);
  const numOfItems = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.selected, 0),
  );
  return (
    <>
      <div
        onClick={close}
        className={`fixed top-0 left-0 w-full h-full z-30 bg-black/50 transition-opacity duration-300 ${ifOpen ? "opacity-100 backdrop-blur-md" : "pointer-events-none opacity-0"}`}
      ></div>
      <div
        className={`fixed top-0 right-0 z-40 w-full max-w-140 h-dvh bg-white flex flex-col 
  transition-transform duration-300 ${ifOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        <div className="w-full h-40 bg-white px-5 flex justify-between items-center border-b border-black/30">
          <div className="flex items-center">
            <span className="material-symbols-outlined text-[1.4rem]! leading-none">
              shopping_bag
            </span>
            <h1 className="ml-3 text-[1.4rem] font-semibold">Your Cart</h1>
            <div className="bg-blue-100 flex justify-center items-center p-3 rounded-full ml-3">
              {numOfItems}
            </div>
          </div>
          <button onClick={close} className="cursor-pointer">
            <span className="material-symbols-outlined text-[1.4rem]! leading-none">
              close
            </span>
          </button>
        </div>
        <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden p-7">
          {/* make the item component */}
          {items.map((item) => (
            <CartCard key={item.pid} item={item} />
          ))}
          {/* end component */}
        </div>
        <div className="w-full h-auto bg-white border-t border-black/30 p-5">
          <div className="flex justify-between mb-2 pt-2 pb-2">
            <span className="text-[1.2rem] font-bold">Subtotal</span>
            <span className="text-[1.2rem]">${total.toFixed(2) || 0}</span>
          </div>
          <div className="flex justify-between border-b border-black/30 mb-2 pt-2 pb-6">
            <span className="text-[1.2rem] font-bold">Shipping</span>
            <span className="text-[1.2rem]">Free</span>
          </div>

          <div className="flex justify-between mb-2 pt-2 pb-2 font-bold text-[1.3rem]">
            <span>Total</span>
            <span>${(total + 0).toFixed(2) || 0}</span>
          </div>
          <Link
            to="/checkout"
            className="transition:text duration-200 hover:text-black"
            href=""
          >
            <button className="w-full bg-blue-200 p-5 rounded-3xl text-[1.1rem] font-bold cursor-pointer">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
