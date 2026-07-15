
// import test from "../../assets/bottle1.jpg";
import Quantity from "../Quantity";
export default function CartCard({ item }) {
  return (
    <div className="w-full h-32 bg-blue-100 grid grid-cols-[40%_1fr] grid-rows-1 mb-7">
      <div className="bg-white">
        <img
          className="w-full h-full p-3 rounded-3xl border border-black/30 object-cover"
          src={`../../../public/images/${item.productImage}`}
          alt=""
        /> 
      </div>
      <div className="bg-white flex flex-col justify-between pl-5">
        <span className="text-[1.2rem] font-semibold">{item.pname}</span>
        <span className="block text-[1.3rem] font-semibold">${item.price}</span>
        <div className="flex items-center justify-between">
          <Quantity item={item} version={2}></Quantity>
          <span className="material-symbols-outlined text-[1.4rem]! leading-none">
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
