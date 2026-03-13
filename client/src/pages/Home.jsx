import Navbar from "../components/Navbar.jsx";
import TitlePage from "../components/home/TitlePage.jsx";
import CategoryPage from "../components/home/CategoryPage.jsx";
import FeaturedPage from "../components/home/FeaturedPage.jsx";
import ProductsPage from "../components/home/ProductsPage.jsx";
import ContactPage from "../components/home/ContactPage.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <TitlePage></TitlePage>
      <CategoryPage></CategoryPage>
      <FeaturedPage></FeaturedPage>
      <ProductsPage></ProductsPage>
      <ContactPage></ContactPage>
      <Footer></Footer>
      <BottomBar/>
    </>
  );
}

export default Home;
