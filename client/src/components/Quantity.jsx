export default function Quantity() {
  return (
    <div className="inline-flex items-center">
      <h2>Qty:</h2>
      <div className="flex w-25 justify-around items-center h-10 rounded-[10px] border border-black/40 ml-3">
        <button className="w-full h-full flex justify-center items-center  rounded-l-[10px] hover:bg-black/10">
          <span className="material-symbols-outlined text-center">remove</span>
        </button>
        <div className="w-full h-full flex justify-center items-center">1</div>
        <button className="w-full h-full flex justify-center items-center rounded-e-[10px] hover:bg-black/10">
          <span className="material-symbols-outlined text-center">add</span>
        </button>
      </div>
    </div>
  );
}
