import ItemCard from "../cards/ItemCard";
import PageTurner from "../PageTurner";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/productsApi";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts(page);
      setProducts(data);
    }
    loadProducts();
  }, [page]);

  //get visible products
  const start = (page - 1) * 8;
  const end = Math.min(products.length, page * 8);
  const visibleProducts = products.slice(start, end);

  return (
    <div className=" md:px-30 w-full min-h-150 bg-white flex flex-col py-20 px-5 gap-4">
      <h1 className="md:text-5xl md:font-bold text-4xl font-semibold">
        All Products
      </h1>
      <p className="mb-7 text-[1.2rem] text-gray-500 font-light">
        Explore our complete collection.
      </p>

      <div className="flex md:flex-row flex-col gap-3">
        <select
          className="xl:h-13 h-15 w-50 px-3 block bg-white rounded-[15px] border border-gray-300 self-start"
          name="cars"
          id="cars"
        >
          <option value="" selected disabled>
            All Products
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <select
          className="xl:h-13 md:ml-auto h-15 w-40 px-3 block bg-white rounded-[15px] border border-gray-300 self-start"
          name="cars"
          id="cars"
        >
          <option value="" selected disabled>
            Sort by
          </option>
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="priceLH">Price: Low to High</option>
          <option value="priceHL">Price: High to Low</option>
          <option value="rated">Highest Rated</option>
        </select>
      </div>

      {/* grid with cards */}
      <div className="xl:mt-6 xl:grid-cols-4 md:px-10 md:gap-10 grid grid-cols-2 auto-rows-[440px] gap-6 w-full mt-10">
        {visibleProducts.map((product) => (
          <ItemCard key={product.pid} product={product}></ItemCard>
        ))}
      </div>

      <PageTurner page={page} setPage={setPage} products={products} startPage={start} endPage={end} />
    </div>
  );
}
