import Quantity from "./Quantity";
export default function CartBar() {
  return (
    <div className="w-full h-dvh bg-pink-400 flex flex-col">
      <div className="w-full h-40 bg-red-100 px-5 flex justify-between items-center border-b">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            shopping_bag
          </span>
          <h1 className="ml-3 text-[1.4rem] font-bold">Your Cart</h1>
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
      <div className="w-full h-full bg-green-200 overflow-y-auto overflow-x-hidden p-7">
        {/* make the item component */}
        <div className="w-full h-32 bg-blue-100 grid grid-cols-[40%_1fr] grid-rows-1 mb-7">
          <div className="bg-red-100">
            <img
              className="w-full h-full p-3"
              src="../assets/title.jpg"
              alt=""
            />
          </div>
          <div className="bg-yellow-100">
            <span>Ceramic Vase Set</span>
            <span>$159.98</span>
            <div>
              <Quantity></Quantity>
              <span className="material-symbols-outlined text-[1.4rem]! leading-none">
                delete
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-red-300 border-t p-5">
        <div className="flex justify-between mb-2 pt-2 pb-2">
          <span>Subtotal</span>
          <span>$1849.82</span>
        </div>
        <div className="flex justify-between border-b mb-2 pt-2 pb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between mb-2 pt-2 pb-2 font-bold text-[1.3rem]">
          <span>Total</span>
          <span>$1938.35</span>
        </div>
        <button className="w-full bg-blue-200 p-5 rounded-3xl">Checkout</button>
      </div>
    </div>
  );
}
