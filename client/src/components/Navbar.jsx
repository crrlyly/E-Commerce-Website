import { useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import CartBar from "./CartBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  const bagClose = () => setBagOpen(false);
  const bagToggle = () => setBagOpen((v) => !v);

  return (
    <>
      <nav className="md:h-18 md:px-15 fixed top-0 left-0 z-30 flex h-15 w-full items-center justify-between bg-white md:bg-white/80 md:backdrop-blur-md px-3 py-3">
        <div className="flex items-center">
          {/* Mobile only */}
          <button
            onClick={toggle}
            className="px-3 py-1 font-semibold text-black md:hidden cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl! leading-none">
              menu
            </span>
          </button>

          {/* Ipad + pc */}
          <h1 className="md:block md:font-semibold md:text-2xl hidden">
            STORE
          </h1>
        </div>

        <div className=" hidden md:flex items-center gap-7 text-slate-600 font-medium">
          <a className="transition:text duration-200 hover:text-black" href="/">
            Home
          </a>
          <a className="transition:text duration-200 hover:text-black" href="/#shop">
            Shop
          </a>
          <Link to="/lookbook" className="transition:text duration-200 hover:text-black" href="">
            Lookbook
          </Link>
          <a className="transition:text duration-200 hover:text-black" href="">
            About
          </a>
          <div className="bg-red-400 px-3 py-[.2rem] rounded-2xl text-white font-extrabold flex items-center gap-2 text-[.8rem]">
            <span class="material-symbols-outlined">sell</span>30% OFF
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setSearchOpen(true)}
            className="px-2 py-2 
          cursor-pointer font-semibold text-slate-600 hover:bg-black/10 flex 
          justify-center items-center rounded-[9px]"
          >
            <span className="material-symbols-outlined text-[1.4rem]! leading-none">
              search
            </span>
          </button>

          <button
            className="px-2 py-2  font-semibold text-slate-600 relative cursor-pointer hover:bg-black/10 flex 
          justify-center items-center rounded-[9px]"
          onClick={bagToggle}
          >
            <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
              0
            </div>
            <span className="material-symbols-outlined text-[1.4rem]! leading-none">
              shopping_bag
            </span>
          </button>

          <Link
            to="/profile"
            className="px-2 py-2  font-semibold text-slate-600 cursor-pointer hover:bg-black/10 flex 
          justify-center items-center rounded-[9px]"
          >
            <span className="material-symbols-outlined text-[1.4rem]! leading-none">
              account_circle
            </span>
          </Link>
        </div>
      </nav>
      <SideBar ifOpen={isOpen} close={close}></SideBar>
      <SearchBar
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      ></SearchBar>
      <CartBar ifOpen={bagOpen} close={bagClose}></CartBar> 
    </>
  );
}

export default Navbar;
