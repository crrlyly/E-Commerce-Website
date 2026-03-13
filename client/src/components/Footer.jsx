import Instagram from "../assets/Instagram.png";
import X from "../assets/x.png";
import Youtube from "../assets/youtube.png";
import FooterLink from "./FooterLink";
export default function Footer() {
  return (
    <footer className="md:h-150 md:px-20 w-full h-190 bg-gray-50 py-15 px-5 flex flex-col gap-4">
      <h1 className="md:font-bold font-semibold text-3xl uppercase">Store</h1>
      <p className="md:text-[1rem] text-[1.1rem] font-light">
        Discover curated collections that blend style with quality. Your
        destination for modern essentials.
      </p>
      <div className="md:mb-5 w-full h-auto flex gap-3 mt-3 mb-3">
        <button className="hover:border-black cursor-pointer md:w-10 md:h-10 w-12 h-12 border-2 border-gray-300 bg-white flex justify-center items-center rounded-4xl">
          <img className="w-1/2 h-1/2" src={Instagram} alt="" />
        </button>
        <button className="hover:border-black cursor-pointer md:w-10 md:h-10 w-12 h-12 border-2 border-gray-300 bg-white flex justify-center items-center rounded-4xl">
          <img className="w-1/2 h-1/2" src={X} alt="" />
        </button>
        <button className="hover:border-black cursor-pointer md:w-10 md:h-10 w-12 h-12 border-2 border-gray-300 bg-white flex justify-center items-center rounded-4xl">
          <img className="w-1/2 h-1/2" src={Youtube} alt="" />
        </button>
      </div>
      <div className="md:grid-rows-1 md:w-180 md:grid-cols-3 grid grid-cols-2 grid-rows-2 gap-3 w-full h-auto">
        <FooterLink title={"Shop"} link1={"All Products"} link2={"Categories"} link3={"Featured"}/>
        <FooterLink title={"Support"} link1={"Contact Us"} link2={"FAQs"} link3={"Extra"}/>
        <FooterLink title={"Company"} link1={"About Us"} link2={"Lookbook"} link3={"Press"}/>
      </div>
      <div className="md:hidden line h-px bg-gray-300 w-full"></div>
      <p className="md:text-[1rem] md:mt-10 md:pt-7 md:w-5/6 md:text-center md:border-t md:border-gray-300 self-center mt-5 font-light text-gray-600">© 2026 STORE. All rights reserved.</p>
      <div className="md:mt-0.5 md:w-100 md:self-center flex place-content-around mt-3">
        <span className="md:text-[1rem] font-light text-gray-600">Privacy Policy</span>
        <span className="md:text-[1rem] font-light text-gray-600">Terms of Service</span>
        <span className="md:text-[1rem] font-light text-gray-600">Cookies</span>
      </div>
    </footer>
  );
}
