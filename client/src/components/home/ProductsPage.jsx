import ItemCard from "../cards/ItemCard";
import PageTurner from "../PageTurner";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/productsApi";
import { getCategories } from "../../services/categoryApi";
// import DropDown from "../DropDown";


export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();

      setProducts(data);
    }
    loadProducts();
  }, [selectedCategory]);

  const start = (page - 1) * 8;
  const end = Math.min(products.length, page * 8);
  const visibleProducts = products.filter((p)=>selectedCategory === "" ? p : p.category_name.toLowerCase() === selectedCategory.toLowerCase()).slice(start, end);



  useEffect(() => {
    async function loadCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    loadCategories();
  }, []);
  console.log(categories.category_name);

  return (
    <div
      id="shop"
      className=" md:px-30 w-full min-h-150 bg-white flex flex-col py-20 px-5 gap-4"
    >
      <h1 className="md:text-5xl md:font-bold text-4xl font-semibold">
        All Products
      </h1>
      <p className="mb-7 text-[1.2rem] text-gray-500 font-light">
        Explore our complete collection.
      </p>

      <div className="flex md:flex-row flex-col gap-3">
        <select
          className="xl:h-13 h-15 w-50 px-3 block bg-white rounded-[15px] border border-gray-300 self-start"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setPage(1);
          }}
        >
          <option value="" >
            All Products
          </option>
          {categories.map((category) => (
            <option
              key={category.category_id}
              value={category.category_name.toLowerCase()}
            >
              {category.category_name}
            </option>
          ))}
        </select>

        {/* <select
          className="xl:h-13 md:ml-auto h-15 w-40 px-3 block bg-white rounded-[15px] border border-gray-300 self-start"
        >
          <option value="" selected disabled>
            Sort by
          </option>
          {sort.map((sortOption) => (
            <option value={sortOption.toLowerCase()}>{sortOption}</option>
          ))}
        </select> */}
      </div>

      {/* grid with cards */}
      <div className="xl:mt-6 xl:grid-cols-4 md:px-10 md:gap-10 grid grid-cols-2 auto-rows-[440px] gap-6 w-full mt-10">
        {visibleProducts.map((product) => (
          <ItemCard key={product.pid} product={product}></ItemCard>
        ))}
      </div>

      <PageTurner
        page={page}
        setPage={setPage}
        products={products}
        endPage={end}
      />
    </div>
  );
}
