export default function SearchBar({ searchOpen, setSearchOpen }) {
  return (
    <div
      onClick={() => setSearchOpen(false)}
      className={`${searchOpen ? "transition-opacity duration-300 opacity-100 pointer-events-auto" : "transition-opacity duration-300 opacity-0 pointer-events-none"}
     bg-white/70 backdrop-blur-2xl w-full z-90
    h-dvh flex justify-center fixed top-0 left-0`}
    >
      <div className="w-full">
        <form
          className="mt-40 flex justify-center"
          action="/search"
          method="GET"
        >
          <div className="w-[80%] max-w-175 relative flex justify-center">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 ">
              search
            </span>
            <input onClick={(e) => e.stopPropagation()}
              className="bg-white w-full py-5 px-15 rounded-2xl border border-black/20"
              type="search"
              name="query"
              placeholder="Search products..."
            />
          </div>
        </form>
        <h1 className="text-center mt-5">
          Press Enter to search or click anywhere to close
        </h1>
      </div>
    </div>
  );
}
