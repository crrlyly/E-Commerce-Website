
export default function CartBar() {
  return (
    <div className="w-full h-dvh bg-pink-400 flex flex-col">
      <div className="w-full h-40 bg-red-100 px-5 flex justify-between items-center border-b">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            shopping_bag
          </span>
          <h1>Your Cart</h1>
          <div className="bg-blue-100 flex justify-center items-center p-3 rounded-full">
            16
          </div>
        </div>
        <button className="">
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            close
          </span>
        </button>
      </div>
      <div className="w-full h-full bg-green-200 overflow-y-auto overflow-x-hidden">
        {/* make the item component */}
        <div>
          {/* <img src="" alt="" /> */}
          <div>
            <span></span>
            <span></span>
            <div>
              {/* <Quantity></Quantity> */}
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
