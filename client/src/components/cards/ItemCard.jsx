import { useState } from "react";
import ItemPage from "../home/ItemPage";
import { useCartStore } from "../../store/cartStore";

export default function ItemCard({ product }) {
  const [favorited, setFavorited] = useState(false);
  const [openItemPage, setOpenItemPage] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const checkItems = useCartStore((state) => state.checkCart);
  /* async */ function toggleFavorite() {
    setFavorited(!favorited);
    //will access database soon so will have to make this an async function
  }

  return (
    <>
      <div
        onClick={() => setOpenItemPage(true)}
        className="group transition-all cursor-pointer delay-150 duration-600 translate-y-2 hover:translate-y-0 hover:shadow-2xl shadow-0 bg-white border border-gray-100 rounded-2xl relative"
      >
        <div className="md:h-3/5 bg-blue-100 absolute h-1/2 w-full rounded-t-2xl top-0 left-0">
          <div className="w-full h-full relative z-10 py-5 px-3">
            <div className="md:py-0.5 md:block md:w-fit bg-red-500 text-white x-5 px-3 py-1 rounded-2xl inline-block">
              -25%
            </div>
            <div
              className={`${product.featured ? "block" : "hidden"} md:py-0.5 bg-black text-white px-5 py-1 rounded-2xl mt-2 w-26`}
            >
              Featured
            </div>

            <div className="absolute w-full h-full top-0 left-0 flex justify-end">
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite();
                }}
                className="z-10 cursor-pointer bg-white/90 px-3 py-3 flex justify-center items-center rounded-full font-semibold self-start mt-5 mr-5 opacity-0 translate-x-6 transition-all duration-300
  group-hover:opacity-100 group-hover:translate-x-0"
              >
                <span
                  className={`material-symbols-outlined text-center ${favorited ? "text-red-600 [font-variation-settings: 'FILL'_1]" : "[font-variation-settings:'FILL'_0]"}`}
                >
                  favorite
                </span>
              </button>
            </div>

            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end">
              <button
                className="opacity-0 cursor-pointer translate-y-6 transition-all duration-200
  group-hover:opacity-100 group-hover:translate-y-0 z-10 bg-green-700 bottom-0 mx-10 my-5 py-3 flex justify-center items-center rounded-2xl text-white font-semibold"
                onClick={(event) => {
                  event.stopPropagation();
                  addItem(product);
                  checkItems();
                }}
              >
                Add to{" "}
                <span className="material-symbols-outlined text-center ml-1">
                  shopping_bag
                </span>
              </button>
            </div>
          </div>

          <img
            className="absolute w-full h-full object-cover z-0 top-0 left-0 rounded-t-2xl"
            src={`/images/${product.productImage}`}
            alt=""
          />
        </div>

        <div className="md:h-2/5 md:mb-5 w-full h-1/2 rounded-b-2xl absolute bottom-0 left-0 px-5 py-7 mb-3">
          <h3 className="uppercase text-gray-600">{product.category_name}</h3>
          <h2 className="truncate text-[1.2rem] pt-2">{product.pname}</h2>
          <div className="pt-1">
            <div className="rating inline">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star">★</span>
            </div>
            <span className="">(234)</span>
          </div>

          <div className="md:flex pt-3">
            <h2 className="font-semibold text-[1.3rem]">${product.price}</h2>
            <h2 className="text-[.9rem] line-through">$120.00</h2>
          </div>
        </div>
      </div>
      <ItemPage
        product={product}
        openItemPage={openItemPage}
        setOpenItemPage={setOpenItemPage}
      ></ItemPage>
    </>
  );
}
