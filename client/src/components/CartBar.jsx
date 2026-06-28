
import CartCard from "./cards/CartCard";

export default function CartBar({ ifOpen, close }) {
  return (
  <div className={`fixed inset-0 z-40 w-full h-dvh bg-white flex flex-col 
  transition-opacity duration-300 ${ifOpen ? "opacity-0" : "pointer-events-none opacity-0"}`} onClick={close}>
      <div className="w-full h-40 bg-white px-5 flex justify-between items-center border-b border-black/30">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            shopping_bag
          </span>
          <h1 className="ml-3 text-[1.4rem] font-semibold">Your Cart</h1>
          <div className="bg-blue-100 flex justify-center items-center p-3 rounded-full ml-3">
            16
          </div>
        </div>
        <button className="">
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            close
          </span>
        </button>
      </div>
      <div className="w-full h-full bg-white overflow-y-auto overflow-x-hidden p-7">
        {/* make the item component */}
        <CartCard></CartCard>
        {/* end component */}
      </div>
      <div className="w-full h-auto bg-white border-t border-black/30 p-5">
        <div className="flex justify-between mb-2 pt-2 pb-2">
          <span className="text-[1.2rem] font-bold">Subtotal</span>
          <span className="text-[1.2rem]">$1849.82</span>
        </div>
        <div className="flex justify-between border-b border-black/30 mb-2 pt-2 pb-6">
          <span className="text-[1.2rem] font-bold">Shipping</span>
          <span className="text-[1.2rem]">Free</span>
        </div>

        <div className="flex justify-between mb-2 pt-2 pb-2 font-bold text-[1.3rem]">
          <span>Total</span>
          <span>$1938.35</span>
        </div>
        <button className="w-full bg-blue-200 p-5 rounded-3xl text-[1.1rem] font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
}
