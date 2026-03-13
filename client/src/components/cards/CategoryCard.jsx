import { useEffect, useState } from "react";
import styles from "../../styles/home/categoryCard.module.css";
import { getCategoryItemCounts } from "../../services/categoryApi.js";


const areaClasses = {
  clothing: "md:[grid-area:clothing]",
  electronics: "md:[grid-area:electronics]",
  accessories: "md:[grid-area:accessories]",
  home: "md:[grid-area:home]",
  sports: "md:[grid-area:sports]",
  beauty: "md:[grid-area:beauty]",
};

const CategoryCard = ({ area, category }) => {
  const [itemCount, setItemCount] = useState([]);

  useEffect(() => {
    async function loadItemCount(){
      const data = await getCategoryItemCounts(category.category_id)
      setItemCount(data)
    }
    loadItemCount()
  })


  return (
    <div
      className={`cursor-pointer group overflow-hidden rounded-2xl min-h-50 relative ${areaClasses[area] || ""}`}
    >
      <div className="md:px-7 md:grid md:[grid-template-areas:'items_items''title_button'] md:grid-rows-2 md:grid-cols-2 absolute z-20 bottom-0 w-full text-center mb-10">
        <div className="md:self-end md:text-start md:[grid-area:items] text-white opacity-80">
          {itemCount.count} items
        </div>
        <h2 className="md:self-center md:font-bold md:text-3xl md:text-start md:[grid-area:title] text-white font-semibold text-2xl inline">
          {category.category_name}
        </h2>
        <button
          className={`md:transition-[transform,background] md:duration-500 md:group-hover:scale-110 md:group-hover:bg-white md:scale-100 md:group-hover:text-black  ${styles.hideButton} md:flex md:justify-center md:items-center md:px-3 md:py-3 md:rounded-full md:self-center md:justify-self-end md:[grid-area:button] text-white bg-white/10 backdrop-blur-md py-2 rounded-2xl`}
        >
          <span className="material-symbols-outlined ">arrow_outward</span>
        </button>
      </div>
      <div className="inset-0 bg-linear-to-b from-transparent to-black/70 z-10 absolute w-full h-full top-0 left-0 rounded-2xl"></div>
      <img
        className="transition-transform duration-500 group-hover:scale-110 absolute w-full h-full object-cover z-0 top-0 left-0 rounded-2xl"
        src={category.image}
        alt={category.category_name}
      />
    </div>
  );
};

export default CategoryCard;
