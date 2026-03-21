export default function Quantity({quantity, setQuantity}) {
  return (
    <div className="inline-flex items-center">
      <h2>Qty:</h2>
      <div className="flex w-25 justify-around items-center h-10 rounded-[10px] border border-black/40 ml-3">
        <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="w-full h-full flex justify-center items-center  rounded-l-[10px] hover:bg-black/10">
          <span className="material-symbols-outlined text-center">remove</span>
        </button>
        <div className="w-full h-full flex justify-center items-center">{quantity}</div>
        <button onClick={() => setQuantity(prev => prev + 1)} className="w-full h-full flex justify-center items-center rounded-e-[10px] hover:bg-black/10">
          <span className="material-symbols-outlined text-center">add</span>
        </button>
      </div>
    </div>
  );
}
