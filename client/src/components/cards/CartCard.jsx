
import test from "../../assets/bottle1.jpg";
import Quantity from "../Quantity";
export default function CartCard() {
  return (
    <div className="w-full h-32 bg-blue-100 grid grid-cols-[40%_1fr] grid-rows-1 mb-7">
      <div className="bg-white">
        <img
          className="w-full h-full p-3 rounded-3xl border border-black/30 object-fill"
          src={test}
          alt=""
        />
      </div>
      <div className="bg-white flex flex-col justify-between pl-5">
        <span className="text-[1.2rem] font-semibold">Ceramic Vase Set</span>
        <span className="block text-[1.3rem] font-semibold">$159.98</span>
        <div className="flex items-center justify-between">
          <Quantity></Quantity>
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
