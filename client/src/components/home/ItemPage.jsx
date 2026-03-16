import Quantity from "../Quantity";

export default function ItemPage({ product, openItemPage, setOpenItemPage }) {
  console.log(product);
  return (
    <div
      onClick={() => setOpenItemPage(false)}
      className={`${openItemPage ? "block" : "hidden"} w-full h-dvh bg-black/45 flex justify-center items-center z-100 fixed top-0 left-0`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] h-[90%] bg-white border border-black/30 rounded-4xl flex flex-col items-left overflow-y-scroll"
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
          <span class="material-symbols-outlined mr-3">shopping_bag</span>Add to Cart
          --- ${product.price}
        </button>
      </div>
    </div>
  );
}
