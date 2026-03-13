import CategoryCard from "../cards/CategoryCard";
import { useState, useEffect } from "react";
import { getCategories } from "../../services/categoryApi.js";

export default function CategoryPage() {

  const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      async function loadCategories(){
        const data = await getCategories();
        console.log("categories data:", data);
        setCategories(data);
      }
      loadCategories();
    }, [])

  return (
    <div className="md:min-h-400 w-full min-h-250 flex flex-col items-center pt-15">
      <h1 className="md:font-bold md:text-5xl text-4xl font-semibold">
        Shop by Category
      </h1>
      <p className="pt-5 px-2 text-center text-[1.2rem] font-light">
        Browse our extensive collection organized by category.
      </p>

      {/* Make a component for a single card and add to the grid later TODO*/}
      <div
        className= {`md:p-0 md:px-25 md:gap-10 md:flex-1 grid w-full h-full grid-cols-2 gap-7 mt-15 mb-15 p-5
             md:grid-cols-3 md:grid-rows-3
             md:[grid-template-areas:'clothing_clothing_accessories''clothing_clothing_electronics''home_beauty_sports']`}
      >
        {categories.map((category) => {
          return <CategoryCard area={category.category_name.toLowerCase()} key={category.category_id} category={category}/>;
        })}
      </div>
    </div>
  );
}
