import { useCartStore } from "../../store/cartStore";

export default function CheckoutCard() {
  const items = useCartStore((state) => state.items);

  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.pid}
            className="w-full h-22 grid grid-cols-[40%_1fr] md:grid-cols-[30%_1fr] grid-rows-1 mb-4"
          >
            <div className="">
              <img
                className="w-full h-full p-3 rounded-3xl object-cover"
                src={`/images/${item.productImage}`}
                alt=""
              />
            </div>
            <div className="bg-white flex flex-col justify-around pl-5">
              <span className="text-[1.1rem] font-semibold">{item.pname}</span>
              <div className="flex justify-between">
                <span className="block text-[1.1rem] font-semibold">
                  ${item.price}
                </span>
                <span className="text-[1.1rem] font-semibold mr-1">
                  Qty: {item.selected}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
