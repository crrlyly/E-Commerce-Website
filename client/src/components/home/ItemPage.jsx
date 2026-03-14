export default function ItemPage({ product, openItemPage, setOpenItemPage }) {
  console.log(product);
  return (
    <div
      onClick={() => setOpenItemPage(false)}
      className={`${openItemPage ? "block" : "hidden"} w-full h-dvh bg-red-100 flex justify-center items-center z-100 fixed top-0 left-0`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] h-[90%] bg-green-400 border border-black/30 rounded-4xl flex flex-col items-left gap-3 overflow-y-scroll"
      >
        <div className="w-[80%] h-75 bg-green-200">
          <button></button>
          <img
            className="w-full h-full rounded-3xl"
            src={`/images/${product.productImage}`}
            alt=""
          />
        </div>
        <div>
          <h2>{product.category_name}</h2>
          <div>Featured</div>
          <div>-25%</div>
        </div>
        <h1>{product.pname}</h1>
        <div>
          {/* review */}
          <h2>4.8</h2>
          <h2>(234 reviews)</h2>
        </div>
        <div>
          <h1>{product.price}</h1>
          <h2>$120.00</h2>
        </div>

        <p>{product.description}</p>

        <div>{/* tags */}</div>
        <div>{/* in Stock */}</div>
        <div>{/* Quantity */}</div>
        <button></button>
      </div>
    </div>
  );
}
