import ItemCard from "../cards/ItemCard";
import styles from "../../styles/home/featured.module.css";
import {useState, useEffect} from "react";
import { getFeaturedProducts } from "../../services/productsApi";

export default function FeaturedPage() {
  const [fproducts, setFproducts] = useState([])

  useEffect(() => {
    async function loadFeaturedProducts(){
      const data = await getFeaturedProducts()
      setFproducts(data)
    }
    loadFeaturedProducts()
  },[])

  return (
    <div className={`${styles.changeHeight} md:h-190 md:px-25 w-full h-200 bg-gray-50 pt-20 flex flex-col px-6 gap-3`}>
      <h3 className="text-[1.2rem]">Handpicked for you</h3>
      <h1 className="md:hidden text-4xl font-semibold">Featured Products</h1>
      <p className="md:hidden text-[1.1rem] text-gray-700 font-light">
        Our most loved items chosen by our curators.
      </p>

      <div className="hidden md:flex items-center">
        <h1 className="text-4xl font-semibold">Featured Products</h1>
        <p className="ml-auto text-[1.1rem] text-gray-700 font-light">
          Our most loved items chosen by our curators.
        </p>
      </div>

      {/* need to make separate cards here TODO */}
      <div className={`${styles.gridColsChange} md:gap-8 md:grid-cols-4 grid grid-cols-2 gap-6 h-full w-full mt-10 mb-30`}>
        {fproducts.map((product) => (
          <ItemCard key={product.pid} product={product}></ItemCard>
        ))}
      </div>
    </div>
  );
}
