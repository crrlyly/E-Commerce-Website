
export default function PageTurner({page, setPage, products, endPage}) {
  console.log(endPage)
  return (
    <div className="md:mt-10 md:flex mt-5 inline-flex items-center place-content-around gap-2">
      {/* <p className=" text-gray-600 font-light">Showing {startPage+1}-{endPage} of {products.length} products</p> */}
      <div className="xl:scale-80 flex justify-between md:gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className={`flex items-center 
            justify-center px-5 py-3
             bg-white border-2 ${page === 1 ? "border-gray-100" : "hover:bg-green-100 cursor-pointer border-gray-200"}
             rounded-[.8rem]`}
        >
          <span
            className={`material-symbols-outlined text-[.9rem]! flex 
          items-center justify-center ${page === 1 ? "text-black/40" : "text-black"}`}
          >
            arrow_back_ios
          </span>
        </button>
        <div className="inline px-6 py-3 bg-black text-white border border-gray-100 rounded-[.8rem]">
          {page}
        </div>
        <div className="inline px-6 py-3 bg-white rounded-[.8rem]">
          {page + 1}
        </div>
        <button
          onClick={() => setPage((p) => products.length > p * 8 ? p + 1 : p )}
          className={`px-5 py-3 bg-white border-2 border-gray-200 rounded-[.8rem] 
          flex items-center justify-center ${page * 8 >= products.length ? "border-gray-100" : "hover:bg-green-100 cursor-pointer border-gray-200"}`}
        >
          <span
            className={`material-symbols-outlined text-[.9rem]! flex items-center justify-center
            ${page * 8 >= products.length ? "text-black/40" : "text-black"}`}
          >
            arrow_forward_ios
          </span>
        </button>
      </div>
    </div>
  );
}
