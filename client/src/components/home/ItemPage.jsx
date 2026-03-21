import { useState } from "react";
import Quantity from "../Quantity";
// import { useCartStore } from "../../store/cartStore";

export default function ItemPage({ product, openItemPage, setOpenItemPage }) {
  const [quantity, setQuantity] = useState(1);
  // const addItem = useCartStore((state)=>state.addItem)

  console.log(product);
  return (
    <div
      onClick={() => setOpenItemPage(false)}
      className={`${openItemPage ? "block" : "hidden"} w-full h-dvh bg-black/45 flex justify-center items-center z-100 fixed top-0 left-0`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:flex md:max-w-200 relative md:max-h-125 md:overflow-y-auto w-[90%] h-[90%] bg-white border border-black/30 rounded-4xl hidden justify-between"
      >
        <button onClick={() => (setOpenItemPage(false))} className="cursor-pointer absolute top-5 right-4 px-2 py-2 border border-black/20 bg-white backdrop-blur-2xl rounded-full flex items-center justify-center">
          <span class="material-symbols-outlined text-black/70">close</span>
        </button>
        <div className="w-[50%] h-100 relative mt-10 mx-8 flex-1">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={`/images/${product.productImage}`}
            alt=""
          />
        </div>
        <div className="flex-1 ml-5">
          <div className="flex mt-10">
            <h2 className="uppercase mr-3 font-semibold">
              {product.category_name}
            </h2>
            <div className="bg-blue-500 px-3 rounded-3xl mr-2 text-white">
              Featured
            </div>
            <div className="bg-blue-500 px-3 rounded-3xl mr-2 text-white">
              -25%
            </div>
          </div>
          <h1 className="mt-3 capitalize text-3xl font-bold">
            {product.pname}
          </h1>
          <div className="flex mt-3">
            {/* review */}
            <h2>4.8</h2>
            <h2>(234 reviews)</h2>
          </div>
          <div className=" mt-3 flex">
            <h1 className="text-3xl font-bold">{product.price}</h1>
            <h2 className="line-through">$120.00</h2>
          </div>

          <p className=" mt-3">{product.description}</p>

          <div className="flex mt-3 flex-wrap mr-10 gap-2 items-center">
            <span class="material-symbols-outlined text-[1.2rem]!">sell</span>
            <div className="bg-blue-500 px-2 rounded-3xl text-white flex justify-center items-center text-[.8rem]">
              shoes
            </div>
            <div className="bg-blue-500 px-2 rounded-3xl text-white flex justify-center items-center text-[.8rem]">
              sneakers
            </div>
            <div className="bg-blue-500 px-2 rounded-3xl text-white flex justify-center items-center text-[.8rem]">
              casual
            </div>
            <div className="bg-blue-500 px-2 rounded-3xl text-white flex justify-center items-center text-[.8rem]">
              shirt
            </div>
          </div>
          <div className="mt-5 flex text-green-500 font-semibold">
            <span class="material-symbols-outlined caret-neutral-50 mr-2">
              task_alt
            </span>
            In Stock
          </div>
          <div className="mt-3">
            <Quantity quantity={quantity} setQuantity={setQuantity}></Quantity>
          </div>
          <div className="flex justify-center items-center">
            <button  className="mb-7 mt-5 py-4 mx-auto w-full mr-5 bg-amber-200 flex justify-center items-center rounded-2xl">
              {" "}
              <span class="material-symbols-outlined mr-3">shopping_bag</span>
              Add to Cart --- ${product.price}
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="md:hidden md:max-w-200 md:max-h-125 md:overflow-y-auto w-[90%] h-[90%] bg-white border border-black/30 rounded-4xl flex flex-col items-left overflow-y-scroll"
      >
        <div className="w-[80%] h-auto relative mt-10 mx-auto">
          <button className="absolute -top-2.5 -right-2.5 px-2 py-2 border border-black/20 bg-white backdrop-blur-2xl rounded-full flex items-center justify-center">
            <span class="material-symbols-outlined text-black/70">close</span>
          </button>
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={`/images/${product.productImage}`}
            alt=""
          />
        </div>
        <div className="flex mt-10 ml-10">
          <h2 className="uppercase mr-3 font-semibold">
            {product.category_name}
          </h2>
          <div className="bg-blue-500 px-3 rounded-3xl mr-2 text-white">
            Featured
          </div>
          <div className="bg-blue-500 px-3 rounded-3xl mr-2 text-white">
            -25%
          </div>
        </div>
        <h1 className="ml-10 mt-4 capitalize text-3xl font-bold">
          {product.pname}
        </h1>
        <div className="ml-10 flex mt-4">
          {/* review */}
          <h2>4.8</h2>
          <h2>(234 reviews)</h2>
        </div>
        <div className="ml-10 mt-4 flex">
          <h1 className="text-3xl font-bold">{product.price}</h1>
          <h2 className="line-through">$120.00</h2>
        </div>

        <p className="ml-10 mt-4">{product.description}</p>

        <div className="flex ml-10 mt-4 flex-wrap mr-10 gap-2 items-center">
          <span class="material-symbols-outlined text-[1.4rem]!">sell</span>
          <div className="bg-blue-500 px-3 rounded-3xl text-white">shoes</div>
          <div className="bg-blue-500 px-3 rounded-3xl text-white">
            sneakers
          </div>
          <div className="bg-blue-500 px-3 rounded-3xl text-white">casual</div>
          <div className="bg-blue-500 px-3 rounded-3xl text-white">shirt</div>
        </div>
        <div className="ml-10 mt-4 flex text-green-500 font-semibold">
          <span class="material-symbols-outlined caret-neutral-50 mr-2">
            task_alt
          </span>
          In Stock
        </div>
        <div className="ml-10 mt-4">
          <Quantity></Quantity>
        </div>
        <button className="mb-10 mt-7 py-4 mx-10 bg-amber-200 flex justify-center items-center rounded-2xl">
          {" "}
          <span class="material-symbols-outlined mr-3">shopping_bag</span>Add to
          Cart --- ${product.price}
        </button>
      </div>
    </div>
  );
}
