// version = 1 is quantity for item
// version = 2 is quantity for cart

// import { useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function Quantity({
  item,
  version,
  itemSelected,
  setItemSelected,
}) {
  const increaseSelected = useCartStore((state) => state.increaseSelected);
  const decreaseSelected = useCartStore((state) => state.decreaseSelected);

  const handleDecrease = () => {
    if (version === 1){
      setItemSelected((curr)=> Math.max(1, curr-1));
    } else {
      decreaseSelected(item.pid);
    }
  };

  const handleIncrease = () => {
    if (version === 1) {
      setItemSelected((curr) => curr + 1);
    } else {
      increaseSelected(item.pid);
    }
  };

  return (
    <div className="inline-flex items-center">
      <h2>Qty:</h2>
      <div className="flex w-25 justify-around items-center h-10 rounded-[10px] border border-black/40 ml-3">
        <button
          onClick={handleDecrease}
          className="w-full h-full flex justify-center items-center  rounded-l-[10px] hover:bg-black/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-center">remove</span>
        </button>
        <div className="w-full h-full flex justify-center items-center">
          {version == 1 ? itemSelected : item.selected}
        </div>
        <button
          onClick={handleIncrease}
          className="w-full h-full flex justify-center items-center rounded-e-[10px] hover:bg-black/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-center">add</span>
        </button>
      </div>
    </div>
  );
}
